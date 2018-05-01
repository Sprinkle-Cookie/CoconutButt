console.log("This is the addwordspopup html")
var pageLang;
var sourceTabId;
browser.runtime.onMessage.addListener(function(response){
    console.log(response);
    if(response['func'] == 'addwordspopup'){
		pageLang = response['pageLang'];
		sourceTabId = response['currenttabid'];
		console.log('source tab is ', sourceTabId);
        createTableFromDict(response['wordRankDict']);
    }
});

//submit button sends selected words to background script
var formel = document.getElementById('addwordform');
if(formel.addEventListener){
    formel.addEventListener("submit",addWords,false);
}else{
    //ie doesn't have addEventListner
    formel.attachEvent('onsubmit', addWords);
}

function checkAll(evt) {
	 var ele = evt.target;
	 console.log(ele);
     var checkboxes = document.getElementsByClassName(ele.className);
	 console.log(checkboxes);
     if (ele.checked) {
         for (var i = 0; i < checkboxes.length; i++) {
             if (checkboxes[i].type == 'checkbox') {
                 checkboxes[i].checked = true;
             }
         }
     } else {
         for (var i = 0; i < checkboxes.length; i++) {
             if (checkboxes[i].type == 'checkbox') {
                 checkboxes[i].checked = false;
             }
         }
     }
 }

function createTableFromDict(tableData) {
      var keys = Object.keys(tableData).sort((a,b) => tableData[a] < tableData[b]);
      var inputboxdiv = document.getElementById('inputboxes');
      var table = document.createElement('table');
      var tableBody = document.createElement('tbody');
      var counter = 1;

      //select all boxes
      var row = document.createElement('tr');
	  var histth = document.createElement('th');
      var histallbox = document.createElement('input');
      histallbox.setAttribute("type", "checkbox");
	  histallbox.addEventListener("change", checkAll);
	  histallbox.setAttribute("class", "historybox");
	  histth.appendChild(histallbox);
	  var stopth = document.createElement('th');
      var stopallbox = document.createElement('input');
      stopallbox.setAttribute("type", "checkbox");
	  stopallbox.addEventListener("change", checkAll);
	  stopallbox.setAttribute("class", "stopbox");
	  stopth.appendChild(stopallbox);
	  row.appendChild(histth);
	  row.appendChild(stopth);
	  tableBody.appendChild(row);


      keys.forEach(function(key) {
              var row = document.createElement('tr');

              // save as history checkbox
              var cell0 = document.createElement('td');
              var checkbox = document.createElement('input');
              checkbox.setAttribute("type", "checkbox");
              checkbox.setAttribute("class", "historybox");
			  checkbox.setAttribute("id", key + "-history");
              cell0.appendChild(checkbox);
              row.appendChild(cell0);

              // save as stopword checkbox
              var cell1 = document.createElement('td');
              var checkbox2 = document.createElement('input');
              checkbox2.setAttribute("type", "checkbox");
              checkbox2.setAttribute("class", "stopbox");
			  checkbox2.setAttribute("id", key + "-stop");
              cell1.appendChild(checkbox2);
              row.appendChild(cell1);

              // word
              var cel2 = document.createElement('td');
              cel2.appendChild(document.createTextNode(key));
              row.appendChild(cel2);

              //word count
              var cell3 = document.createElement('td');
              cell3.appendChild(document.createTextNode(tableData[key]));
              row.appendChild(cell3);

              tableBody.appendChild(row);

              counter +=1;
            });

      table.appendChild(tableBody);
      inputboxdiv.appendChild(table);
}

function addWords(evt){
	evt.preventDefault();
	console.log(evt);
	var formel = evt.target;
	var histwords = new Array;
	var stopwords = new Array;
	Array.from(formel).forEach(function(x){
		//console.log(x);
		if(x.checked){
			var [word, grp] = x.id.split('-');
			if(grp == 'history'){
				histwords.push(word);
			} else if (grp == 'stop') {
				stopwords.push(word);
			}
		}
	});
    var sndmsgProm = browser.tabs.sendMessage(sourceTabId, {"func": "addWordsPopup", "pageLang": pageLang, "historyWords": histwords, "stopWords": stopwords });
	//close this tab
	sndmsgProm.then(function(res){
		browser.tabs.query({currentWindow: true, active: true}).then(function(tabres){ browser.tabs.remove(tabres[0].id);});
	});
}
