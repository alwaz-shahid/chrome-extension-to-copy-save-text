chrome.storage.local.get(['copiedText'], function(result) {
  document.getElementById('copiedText').innerText = result.copiedText || 'No text copied yet.';
});
