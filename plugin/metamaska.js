

var s = document.createElement('script');
s.src = chrome.extension.getURL('abis.js');
s.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);

s = document.createElement('script');
s.src = chrome.extension.getURL('script.js');
s.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);


var port = chrome.runtime.connect();

window.addEventListener("message", function(event) {
  // We only accept messages from ourselves
  if (event.source != window)
    return;

  if (event.data.type && (event.data.type == "FROM_PAGE")) {
    console.log("Current block number: " + event.data.currentBlockNumber);
  }
}, false);