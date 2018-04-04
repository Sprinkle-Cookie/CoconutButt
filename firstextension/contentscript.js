console.log('AHHHHHHH');

var wordRankDict;
browser.runtime.onMessage.addListener(chooseResponse);
var alreadyRun = false;


function chooseResponse(response){
	console.log('response is',response);
	if(response['func'] == 'text' && !alreadyRun){
		getText(response);
	}
	else if(response['func'] == 'stats') {
        if(!alreadyRun){return false;}
        getStats();
    }
    else if(response['func'] == 'highlight' && !alreadyRun){
        var toHighlight = response["toHighlight"];
        wordRankDict = response["wordRankDict"];
		highlight(toHighlight);
        alreadyRun = true;
        addPopUps()
	}
    else if(response['func'] == 'addWord') {
        console.log('add word! ', response);
        addWord();
    }

}
function getTextTag(){
        var tag;
        tag =  document.getElementById('mw-content-text');
        if(tag == null){
            tag = document.getElementsByClassName('entry-content e-content')[0];
        }

        if(tag == null ){
                    tag = document.getElementsByTagName("body")[0];
        }
        return tag;
}

function getStats(){
    console.log("sending ", wordRankDict, " to popup");
    browser.runtime.sendMessage({"recipient":"popup", "wordlist": wordRankDict});
}

function getTextTag(){
        var tag;
        tag =  document.getElementById('mw-content-text');
        if(tag == null){
                    tag = document.getElementsByTagName("body")[0];
                }
        return tag;
}

function getText(message){

        var tag = getTextTag();
        var text = "";

        Array.from(tag.getElementsByTagName("p")).forEach(function(elem){
                    text += elem.textContent + " ";
                });

        console.log('text is', text);
        console.log('lang is', document.documentElement.lang);
        browser.runtime.sendMessage({"recipient": "background", "func": "sendText", "lang": document.documentElement.lang, "text": text });
        console.log("sent text to background") ;
}

function highlight(words){
    var tag = getTextTag();
    for (var i = 0; i < words.length; i++) {
        Array.from(tag.getElementsByTagName('p')).forEach(function(elem) {
			highlight2(elem, words[i]);
        });
    }
}

function addPopUps(){
    Array.from($('.redword')).forEach(function(i){
        console.log("inside redword " + i.textContent);
        $(i).balloon({
                html: true,
                contents: '<html><p>' + getPopupText(i.textContent) + '</p></html>',
                tipSize: 24,
                css: {
                    border: 'solid 4px #5baec0',
                    padding: '10px',
                    fontSize: '150%',
                    fontWeight: 'bold',
                    lineHeight: '3',
                    backgroundColor: '#666',
                    color: '#fff'
                }
            });
        });
}


function addWord(){
    /*save word selected in text*/
    var selected = getSelected();
    console.log('selected is ', selected);
    if(selected){
        url = document.URL;
        context = 'nothing yet';
        storeWord(selected, {'url' : url, 'contexts' : [context]});
    }
}

function highlight2(container,what) {
    var content = container.innerHTML,
        newcn = container.innerHTML,
        pattern = new RegExp('^[^<]{3,}|>[^<]{3,}[^<]','g'),
        replace_regex = new RegExp('(^|[^\\wÀ-ÖØ-öø-ſ])(' + what + ')(?![\\wÀ-ÖØ-öø-ſ])', 'ig'),
        replaceWith = '$1<span class="redword" style="color:red;">$2</span>',
        match = pattern.exec(content);
        while(match != null){
            text_block1 = match[0];
            text_block2 = text_block1.replace(replace_regex,replaceWith);

            newcn = newcn.replace(text_block1, text_block2);
            match = pattern.exec(content);
        }

    return (container.innerHTML = newcn) !== content;
}


function getPopupText(selection){
    console.log("selection is ", selection);
    var stripped_selection = $.trim(selection.toLowerCase());
    if(wordRankDict[stripped_selection] != null){
        var popupText = selection + ' occurs ' + wordRankDict[stripped_selection] + ' times';
        return popupText;
    }
    return false;
}

function getSelected() {

      var func;
      if(window.getSelection) {
         selection = window.getSelection();
         console.log("func output is", selection);
         if(selection.anchorNode.textContent != selection.focusNode.textContent){
            /*for text in another span element*/
            return selection.anchorNode.nextSibling.textContent;
         }
         var start = selection.anchorOffset;
         var end = selection.focusOffset;
         return selection.anchorNode.textContent.slice(start, end);

      }
      else if(document.getSelection) {
         selection = document.getSelection();
         console.log("func output is", selection);
         if(selection.anchorNode.textContent != selection.focusNode.textContent){
            /*for text in another span element*/
            return selection.anchorNode.nextSibling.textContent;
         }
         var start = selection.anchorOffset;
         var end = selection.focusOffset;
         return selection.anchorNode.textContent.slice(start, end);
      }
      else {
              var selection = document.selection && document.selection.createRange();
              console.log('selection.text is ', selection.text);
              if(selection.text) { return selection.text; }
              return false;
        }
      return false;
}



function storeWord(word, wordData) {
        browser.runtime.sendMessage({"recipient": "background", "func": "storeWord", "word": word, "wordData": wordData});

}

undefined
