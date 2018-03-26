
browser.runtime.onMessage.addListener(showStats);

function listenForClicks(){
	document.addEventListener("click", (e) => {
            switch(e.target.textContent){
                case "Analyze":
                    browser.tabs.query({ currentWindow: true, active: true}).then(sendMessageToTabs).catch(onError);
                    break;
                case "Stats":
                    browser.tabs.query({ currentWindow: true, active: true}).then(getStats).catch(onError);
                    break;

        }
    });
}


function showStats(payload, sender){
    if(payload['recipient'] == 'popup'){
        wordlist = payload['wordlist'];
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
      document.body.appendChild(table);
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
