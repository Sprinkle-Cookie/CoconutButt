
browser.runtime.onMessage.addListener(showStats);
var alreadyGotStatsTable = false;
var statsTable = document.getElementById('statsTable');
var historyContainer = document.querySelector('.history-container');
var historyShown = false;
var wordRankDict;
var pageLang;
// Listen for a file being selected through the file picker
const inputElement = document.getElementById("input");
inputElement.addEventListener("change", handlePicked, false);

function listenForClicks(){
	document.addEventListener("click", (e) => {
            switch(e.target.textContent){
                case "Analyze":
                    browser.tabs.query({ currentWindow: true, active: true}).then(sendMessageToTabs).catch(onError);
                    break;
                case "History":
                    showHistory();
                    break;
                case "Stats":
                    if(!alreadyGotStatsTable){
                        browser.tabs.query({ currentWindow: true, active: true}).then(getStats).catch(onError);
                        alreadyGotStatsTable= true;
                    } else {
                        if(statsTable.style.display == "block"){
                            statsTable.style.display = "none";
                        }
                        else {
                            statsTable.style.display = "block";
                        }

                    }
                    break;
                 case "Export":
                    browser.tabs.create({'active':true, 'url':'/export.html'}).then(addHtml);
                    break;
                 case "Add Words to History and Stop":
				 	browser.tabs.query({ currentWindow: true, active: true}).then(addWordsPopup);
                    break;


        }
    });
}

function addWordsPopup(tabqueryresult){
	currenttab = tabqueryresult[0];
	console.log('current tab is ', currenttab);
    browser.tabs.create({'active':true, 'url':'/addwordspopup.html'}).then(function(newtab) {
		console.log("sending ", wordRankDict, " to tab ", newtab.id);
		browser.tabs.sendMessage(newtab.id, {"func": "addwordspopup", "currenttabid": currenttab.id, "pageLang": pageLang, "wordRankDict": wordRankDict});
	});
}

function addHtml(tab){
    console.log("create new tab", tab.id);
    var statstab = document.getElementById('statsTable');
    console.log("sending data", statstab.innerHTML);
    browser.tabs.sendMessage(tab.id, {"func": "export", "statsTableHtml": statstab.innerHTML});
}
// Get the image file if it was chosen from the pick list
 function handlePicked() {
   console.log(this.files);
   var file = this.files[0];
   var fileReader = new FileReader();
   fileReader.onload = function(event) {
       console.log(event.target.result);
       browser.runtime.sendMessage({"recipient": "background", "func": "importText", "text": event.target.result});
       browser.tabs.create({'active':true, 'url':'/importtext.html'}).then(function(tab) {
            console.log("create new tab", tab.id);
            console.log("sending data", event.target.result);
            browser.tabs.sendMessage(tab.id, {"func": "importtext", "importText": event.target.result});
       });
   };
   fileReader.readAsText(file);

 }

function showHistory() {
      if(!historyShown){
          var gettingAllStorageItems = browser.storage.local.get(null);
          gettingAllStorageItems.then((results) => {
                  var historyKeys = Object.keys(results);
                  for (let historyKey of historyKeys) {
                            var curValue = results[historyKey];
							if(curValue["wordType"] == 'history'){
								displayWord(historyKey,curValue);
							}
                          }
                }, onError);
          historyShown = true;
      }
      else{
          if(historyContainer.style.display == "block"){
              historyContainer.style.display = "none";
          }
          else {
              historyContainer.style.display = "block";
          }
      }
}

function displayWord(wordtext, wordDict){
    /*historyContainer parent*/
    var word = document.createElement('div');
    var wordDisplay = document.createElement('div');
    var wordH = document.createElement('h2');
    var wordCont = document.createElement('ul');
    var deleteBtn = document.createElement('button');

    word.setAttribute('class', 'word');
    wordH.textContent = wordtext;
    var contextList = wordDict['contexts'];
    for( var i = 0; i < contextList.length; i++){
        var sent = contextList[i];
        var item = document.createElement('li');
        item.innerHTML = sent;
        wordCont.appendChild(item);
    }
    deleteBtn.setAttribute('class', 'delete');
    deleteBtn.textContent = 'Delete word';

    wordDisplay.appendChild(wordH);
    wordDisplay.appendChild(wordCont);
    wordDisplay.appendChild(deleteBtn);

    word.appendChild(wordDisplay);
  /* set up listener for the delete functionality */

  deleteBtn.addEventListener('click',(e) => {
    const evtTgt = e.target;
    evtTgt.parentNode.parentNode.parentNode.removeChild(evtTgt.parentNode.parentNode);
    console.log('word to remove is ', word);
    browser.storage.local.remove(wordtext);
  });
  historyContainer.appendChild(word);

}

function showStats(payload, sender){
    if(payload['recipient'] == 'popup'){
        wordlist = payload['wordlist'];
		//save off page lang
		pageLang = payload['pageLang'];
        wordRankDict = wordlist;
        console.log('popup received ', wordlist);
        createTableFromDict(wordlist);
    }
}


function createTableFromDict(tableData) {
      var table = document.createElement('table');
      var tableBody = document.createElement('tbody');
      var keys = Object.keys(tableData).sort((a,b) => tableData[a] < tableData[b]);
      var counter = 1;

      keys.forEach(function(key) {
              var row = document.createElement('tr');

              var cell0 = document.createElement('td');
              cell0.appendChild(document.createTextNode(counter.toString()));
              row.appendChild(cell0);
              var cell = document.createElement('td');
              cell.appendChild(document.createTextNode(key));
              row.appendChild(cell);
              var cell2 = document.createElement('td');
              cell2.appendChild(document.createTextNode(tableData[key]));
              row.appendChild(cell2);

              tableBody.appendChild(row);
              counter +=1;
            });

      table.appendChild(tableBody);
      statsTable.appendChild(table);
}

function onError(fu){
    console.log(fu);
}

function getStats(tabsData){
    browser.tabs.sendMessage(tabsData[0]['id'], {"func": "stats"});
}


function sendMessageToTabs(tabsData){
    browser.tabs.sendMessage(tabsData[0]['id'], {"func": "text"});
}

//browser.tabs.executeScript({file: "/contentscript.js"})
listenForClicks();
