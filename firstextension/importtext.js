console.log("This is the importtext html")
browser.runtime.onMessage.addListener(displayText);
function displayText(response) {
    console.log("Response in the import html is", response);
      if(response['func'] == 'importtext'){
          var textp = document.getElementById("content")
          textp.innerHTML = response['importText']
      }
}
