chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.type === 'COPY_TEXT') {
    chrome.storage.local.set({ copiedText: request.text }, function () {
      console.log('Text copied to storage.');
    });
  }
})