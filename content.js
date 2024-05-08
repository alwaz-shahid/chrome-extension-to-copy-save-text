// content.js
document.addEventListener('mouseup', function() {
  var text = window.getSelection().toString().trim();
  if (text.length > 0) {
      chrome.runtime.sendMessage({type: 'COPY_TEXT', text: text});
  }
});
