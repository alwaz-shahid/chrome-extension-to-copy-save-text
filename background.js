// chrome.runtime.onInstalled.addListener(() => {
//   const currentVersion = chrome.runtime.getManifest().version;
//   chrome.storage.local.get("extensionVersion", function(result) {
//     const previousVersion = result.extensionVersion; // Retrieve the stored version
//     if (currentVersion!== previousVersion) {
//       chrome.tabs.query({}, (tabs) => {
//         for (const tab of tabs) {
//           chrome.tabs.executeScript(tab.id, { file: 'content.js' });
//         }
//       });
//       chrome.storage.local.set({ "extensionVersion": currentVersion }); // Store the new version
//     }
//   });
// });

chrome.runtime.onInstalled.addListener(() => {
  const currentVersion = chrome.runtime.getManifest().version;
  chrome.storage.local.get("extensionVersion", function(result) {
    const previousVersion = result.extensionVersion; // Retrieve the stored version
    if (currentVersion!== previousVersion) {
      chrome.tabs.query({}, (tabs) => {
        for (const tab of tabs) {
          // Example of executing a script file
          chrome.scripting.executeScript({
            target: { tabId: tab.id, allFrames: true },
            files: ['content_scripts/content.js']
          });

          // Or, if you're executing inline code, use the `function` property
          // chrome.scripting.executeScript({
          //   target: { tabId: tab.id, allFrames: true },
          //   function: functionToExecute
          // });
        }
      });
      chrome.storage.local.set({ "extensionVersion": currentVersion }); // Store the new version
    }
  });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message === "copyText") {
    const selection = window.getSelection();
    if (selection.toString().trim() !== "") {
      navigator.clipboard.writeText(selection.toString())
        .then(() => {
          chrome.storage.local.set({ "copiedText": selection.toString() });
          chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, "copiedTextSaved");
          });
          console.log("Copied text saved to local storage!");
        })
        .catch(() => {
          console.error("Failed to copy text!");
        });
    }
  }
});
