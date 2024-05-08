document.addEventListener('DOMContentLoaded', function() {
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type === 'COPY_TEXT') {
      // Display the copied text in the popup
      document.getElementById('copiedText').innerText = request.text;
  }
  });

  // Example of initiating a download in popup.js
document.getElementById('downloadButton').addEventListener('click', function() {
  var blob = new Blob([document.getElementById('copiedText').innerText], {type: 'text/plain'});
  var url = URL.createObjectURL(blob);
  chrome.downloads.download({
      url: url,
      filename: 'highlighted_text.txt'
  });
});

  // document.getElementById('downloadButton').addEventListener('click', function() {
  //     const link = document.createElement('a');
  //     const content = document.getElementById('copiedText').innerText;
  //     const file = new Blob([content], { type: 'text/plain' });
  //     link.href = URL.createObjectURL(file);
  //     link.download = 'highlighted_text.txt';
  //     link.click();
  //     URL.revokeObjectURL(link.href);
  // });
});


