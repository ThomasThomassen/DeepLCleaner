// popup.js
document.addEventListener('DOMContentLoaded', function () {
  var cleanButton = document.getElementById('cleanButton');

  cleanButton.addEventListener('click', function () {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      const activeTab = tabs[0];
        chrome.scripting.executeScript({target: {tabId: activeTab.id }, files: ["content.js"] }, function() {
          chrome.tabs.sendMessage(activeTab.id, { action: 'cleanLocalStorage' });
      });
    });
  });
});