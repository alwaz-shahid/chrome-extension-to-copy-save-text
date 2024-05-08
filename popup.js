chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message === "showCopiedText") {
      const copiedTextElement = document.getElementById("copied-text");
      copiedTextElement.textContent = message || "No text copied yet.";
    }
  });
  