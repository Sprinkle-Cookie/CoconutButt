console.log('AHHHHHHH');

browser.runtime.onMessage.addListener(chooseResponse);

function chooseResponse(response){
	console.log('response is',response);
	if(response['func'] == 'text'){
		getText(response);
	}
	else {
		highlight(response);
	}
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
        browser.runtime.sendMessage({"lang": document.documentElement.lang, "text": text });
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
        replace_regex = new RegExp('(\\b' + what + '\\b)', 'ig'),
        replaceWith = '<span style="color:red;">$1</span>',
        match = pattern.exec(content);
        while(match != null){
            text_block1 = match[0];
            text_block2 = text_block1.replace(replace_regex,replaceWith);

            newcn = newcn.replace(text_block1, text_block2);
            match = pattern.exec(content);
        }

    return (container.innerHTML = newcn) !== content;
}
