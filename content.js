// content.js
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.action == "cleanLocalStorage") {
        cleanLocalStorageOnDeepL();
      }
});


function cleanLocalStorageOnDeepL() {
    var valuesToDelete = ["LMT_text_translator_usage_free", "LMT_freeUserUsageBlock", "LMT_freeTranslator"];
  
    valuesToDelete.forEach(function (key) {
        window.localStorage.removeItem(key);
        console.log("Deleted", key, "from Local Storage");
      });
      location.reload();
  }
  