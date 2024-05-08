document.addEventListener("selectionchange", () => {
    if (chrome.runtime?.id) {
      chrome.runtime.sendMessage("copyText");
    } else {
      console.error("Extension context might be invalid!");
    }
  });
  
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message === "copiedTextSaved") {
      chrome.runtime.sendMessage("showCopiedText");
    }
  });
  