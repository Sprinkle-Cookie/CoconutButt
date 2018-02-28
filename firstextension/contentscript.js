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

function getText(message){
	var text = document.getElementById('mw-content-text').textContent;
    browser.runtime.sendMessage({"text": text });
    console.log("sent text to background") ;
}

function highlight(words){
	//$('#mw-content-text').mark(words, {'accuracy':'exactly', "diacritics": false});
    for (var i = 0; i < words.length; i++) {
        Array.from(document.getElementById('mw-content-text').getElementsByTagName('p')).forEach(function(elem) {
			highlight2(elem, words[i]);
        });
    }
}

function highlight2(container,what) {
    var content = container.innerHTML,
        pattern = new RegExp('(>[^<.]*)(\\b' + what + '\\b)([^<.]*)','g'),
        replaceWith = '$1<span style="color:red;"' + '">$2</span>$3',
        highlighted = content.replace(pattern,replaceWith);
    return (container.innerHTML = highlighted) !== content;
}
