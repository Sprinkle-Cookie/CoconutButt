console.log('AHHHHHHH');

var wordRankDict;
var contextDict;
var pageLang;
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
        var foundHistoryWords = response["foundHistoryWords"];
        pageLang = response["lang"];
        wordRankDict = response["wordRankDict"];
        contextDict = response["contextDict"];
		highlight(toHighlight, 'redword', 'red');
        highlight(Object.keys(foundHistoryWords), 'historyword', 'green');
        alreadyRun = true;
        addPopUps(foundHistoryWords);
	}
    else if(response['func'] == 'addWord') {
        console.log('add word! ', response);
        addWord();
    }
    else if(response['func'] == 'addStop') {
        console.log('add stop! ', response);
        addStop();
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

function highlight(words, className, color){
    var tag = getTextTag();
    var tagArray = Array.from(tag.getElementsByTagName('p'));
    for (var i = 0; i < words.length; i++) {
        tagArray.forEach(function(elem) {
			highlight2(elem, words[i], className, color);
        });
    }
}

function highlight2(container,what, className, color) {
    var content = container.innerHTML,
        newcn = container.innerHTML,
        pattern = new RegExp('^[^<]{3,}|>[^<]{3,}[^<]','g'),
        replace_regex = new RegExp('(^|[^\\wÀ-ÖØ-öø-ſ])(' + what + ')(?![\\wÀ-ÖØ-öø-ſ])', 'ig'),
        replaceWith = '$1<span class="'+className+'" style="color:'+color+';">$2</span>',
        match = pattern.exec(content);
        while(match != null){
            text_block1 = match[0];
            text_block2 = text_block1.replace(replace_regex,replaceWith);

            newcn = newcn.replace(text_block1, text_block2);
            match = pattern.exec(content);
        }

    return (container.innerHTML = newcn) !== content;
}

function addPopUps(foundHistoryWords){

    var historyWords = $('.historyword');
    var histtexts = [];
    var redAndHistory = [];
    historyWords.each(function(e){histtexts.push(this.textContent.toLowerCase());});

    Array.from($('.redword')).forEach(function(i){
        console.log("inside redword " + i.textContent);
        if(!histtexts.includes(i.textContent.toLowerCase())){
            var content = '<html>' + getPopupText(i.textContent) + '</html>';
            makeBalloon(i, content);
        }else {
            redAndHistory.push(i.textContent.toLowerCase());
        }
    });

    Array.from(historyWords).forEach(function(i){
        var content = '<html>'
        var wordData = foundHistoryWords[i.textContent.toLowerCase()];
        content += '<p>Seen ' + i.textContent + ' previously in url <a target="_blank" href="' + wordData['url'] + '">' + wordData['title'] +'</a></p>';
        if (redAndHistory.includes(i.textContent.toLowerCase())){
            content += '<p> In this document </p>' + getPopupText(i.textContent);
        }
        content += '</html>';
        makeBalloon(i, content);
    });

}

function makeBalloon(elem, htmlContent){
    $(elem).balloon({
            html: true,
            contents: htmlContent,
            tipSize: 24,
            css: {
                border: 'solid 4px #5baec0',
                padding: '10px',
                fontSize: '100%',
                fontWeight: 'normal',
                lineHeight: '2',
                backgroundColor: '#666',
                color: '#fff'
            }
        });
}

function addWord(){
    /*save word selected in text*/
    var selected = getSelected().toLowerCase();
    console.log('selected is ', selected);
    
    if(pageLang == null){
        console.warn("warning: pageLang has not been set yet (need to run 'analyze' once)");
    }

    if(selected){
        url = document.URL;
        title = document.title;
        contexts = (selected in contextDict) ? contextDict[selected] : new Array;
        storeWord(selected, {'title': title, 'url' : url, 'contexts' : contexts, 'lang' : pageLang});
    }
}

function addStop(){
    /*set word selected in text as stop word*/
    var selected = getSelected().toLowerCase();
    console.log('selected is ', selected);
    if(selected){
        storeStop(selected);
    }
}

function getPopupText(selection){
    console.log("selection is ", selection);
    var stripped_selection = $.trim(selection.toLowerCase());
    if(wordRankDict[stripped_selection] != null){
        var popupText = selection + ' occurs ' + wordRankDict[stripped_selection] + ' times.<br>';
        
        /*also add some contexts*/
        var contexts = contextDict[stripped_selection];
        var shortened_contexts = contexts.slice(0,3).map((sent) => { return shortenCenterText(sent, stripped_selection);});
        contextText = 'Some examples...<br><ul><li>' + shortened_contexts.join('</li><li>') + '</li></ul>';

        return popupText + contextText;
    }
    return false;
}

function shortenCenterText(text, token){
    var buffer = 40;
    var start = text.toLowerCase().indexOf(token);
    var end = start + token.length;
    var pretext = ( buffer > start ) ? '' : '...';
    var posttext = ( end + buffer > text.length ) ? '' : '...';
    return pretext + text.slice(max(0,start - buffer), end) + text.slice(end, min(end + buffer, text.length)) + posttext;
}

function max(a,b){
    return ( a > b ) ? a : b;
}

function min(a,b){
    return ( a < b ) ? a : b;
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

function storeStop(word) {
    if(pageLang == null){
        console.warn("warning: pageLang has not been set yet (need to run 'analyze' once)");
    }
    browser.runtime.sendMessage({"recipient": "background", "func": "storeStop", "word": word, "lang": pageLang});
}

undefined
