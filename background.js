// background.js
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (tab.url.includes("deepl.com")) {
        chrome.action.enable(tabId);
    } else {
        chrome.action.disable(tabId);
    }
});