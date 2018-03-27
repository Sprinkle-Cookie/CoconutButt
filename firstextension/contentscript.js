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
    else if(!alreadyRun){
        var toHighlight = response["toHighlight"];
        wordRankDict = response["wordRankDict"];
		highlight(toHighlight);
        alreadyRun = true;
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
        browser.runtime.sendMessage({"recipient": "background", "lang": document.documentElement.lang, "text": text });
        console.log("sent text to background") ;
}

//function getText(message){
	//var text = document.getElementById('mw-content-text').textContent;
    //browser.runtime.sendMessage({"text": text });
    //console.log("sent text to background") ;
//}

function highlight(words){
	//$('#mw-content-text').mark(words, {'accuracy':'exactly', "diacritics": false});
    var tag = getTextTag();
    for (var i = 0; i < words.length; i++) {
        Array.from(tag.getElementsByTagName('p')).forEach(function(elem) {
			highlight2(elem, words[i]);
        });
    }
}

function highlight2(container,what) {
    var content = container.innerHTML,
        newcn = container.innerHTML,
        pattern = new RegExp('^[^<]{3,}|>[^<]{3,}[^<]','g'),
        replace_regex = new RegExp('(^|[^\\wÀ-ÖØ-öø-ſ])(' + what + ')(?![\\wÀ-ÖØ-öø-ſ])', 'ig'),
        replaceWith = '$1<span style="color:red;">$2</span>',
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
    var stripped_selection = $.trim(selection);
    if(wordRankDict[stripped_selection] != null){
        var popupText = selection + ' occurs ' + wordRankDict[stripped_selection] + ' times';
        return popupText;
    }
    return false;
}

function getSelected() {
      if(window.getSelection) { return window.getSelection(); }
      else if(document.getSelection) { return document.getSelection(); }
      else {
              var selection = document.selection && document.selection.createRange();
              if(selection.text) { return selection.text; }
              return false;
            }
      return false;
}

$('body').mouseup(function() {
        var selection = getSelected();

        if (selection) {
                    var popupText = getPopupText(selection);
                    console.log(popupText);
                    if(popupText){
                        alert(popupText);
                    }
                }
});

undefined
