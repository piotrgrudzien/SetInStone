

document.addEventListener('DOMContentLoaded', () => {

    chrome.tabs.getSelected(null,function(tab) {

        submit.addEventListener('click', () => {
            var script = "window.postMessage({type: 'FROM_PAGE', url: '" + tab.url + "', scenario: '" + document.getElementById('scenario').value + "', snippet: '" + document.getElementById('snippet').value + "'}, '*')";
            chrome.tabs.executeScript({
                code: 'console.log("Posting message: ' + script + '");'
            });
            chrome.tabs.executeScript({
                code: script
            });
        });
    });
});
