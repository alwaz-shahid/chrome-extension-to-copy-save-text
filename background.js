chrome.contextMenus.create({
    id: "export-data",
    title: "Export Highlighted Text",
    contexts: ["browser_action"]
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    if (info.menuItemId === "export-data") {
        exportData();
    }
});

function downloadTextFile(text) {
    var filename = "highlighted_text.txt";
    var blob = new Blob([text], { type: "text/plain" });
    chrome.downloads.download({
        url: URL.createObjectURL(blob),
        filename: filename,
        conflictAction: "prompt"
    });
}

function exportData() {
    chrome.storage.local.get(['highlightedText'], function (result) {
        var text = result.highlightedText || "";
        downloadTextFile(text);
    });
}

chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.executeScript({
        code: "window.getSelection().toString();"
    }, function (selection) {
        var text = selection[0];
        if (text) {
            chrome.storage.local.get(['highlightedText'], function (result) {
                var previousText = result.highlightedText || "";
                var currentText = previousText + "\n" + text;
                chrome.storage.local.set({ 'highlightedText': currentText }, function () {
                    alert("Text has been copied and saved!");
                    downloadTextFile(currentText);
                });
            });
        } else {
            alert("No text highlighted.");
        }
    });
});
