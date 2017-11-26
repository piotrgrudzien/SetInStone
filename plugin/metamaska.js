

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
  if (event.source != window)
    return;

  if (event.data.type && (event.data.type == "FROM_PAGE")) {
    console.log("Sending challenge from url: " + event.data.url + ", scenario: " + event.data.scenario + ", snippet: " + event.data.snippet);
    //run(event.data.snippet, event.data.url);
    window.postMessage({type: 'FROM_METAMASKA', url: event.data.url, snippet: event.data.snippet}, '*');
  }
}, false);