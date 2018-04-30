console.log("This is the export html")
browser.runtime.onMessage.addListener(createTableFromDict);
function createTableFromDict(response) {
    console.log("Response in the export html is", response);
      if(response['func'] == 'export'){
          var statstable = document.getElementById("statsTable")
          statstable.innerHTML = response['statsTableHtml']
      }
}
