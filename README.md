# Copy Highlighted Text
A simple chrome extension that allows you to copy highlighted text and save it to the browser's storage. The extension also allows you to export the saved text to a text file.
</hr>

### Installation
To install the extension, you need to download the source code and load it into your chrome browser as an "unpacked extension".

> - Download the source code from GitHub
> - Open the chrome browser and navigate to chrome://extensions/
> - Enable the "Developer mode" toggle in the top right corner
> - Click on the "Load unpacked" button and select the folder where you have the source code
> - The extension should now be installed and you should see it in the extension list
> - You should now see the extension's icon on the top right corner of your chrome browser 

</hr>

### Usage
> - Click on the extension's icon after highlighting text on any website.
> - The text will be saved in the browser storage and an alert will be shown to confirm it.
> - To export the saved text to a text file, right-click on the extension's icon, and select "Export Highlighted Text" from the context menu.

</hr>

### Notes
> - The extension uses the browser's local storage to save the highlighted text.
> - The exported text file will be named "highlighted_text.txt" and it will be downloaded to the default download folder.
> - In case of any conflict, chrome will prompt to save the file with a different name or overwrite the existing one.

</hr>

### Functionalities
<p>
The provided code creates a context menu item "Export Highlighted Text" on browser_action and sets an onClicked event listener to it. Once the menu item is clicked, the function "exportData" is called which retrieves the highlightedText from chrome.storage.local and passes it to "downloadTextFile" function. The "downloadTextFile" function creates a text file with the passed text and downloads it.

Additionally, the code also sets an onClicked event listener for browser action which retrieves the currently selected text from the active tab and if there is any text selected, it concatenates it with previously saved highlightedText and saves it to chrome.storage.local.
</p> 

</hr>

### Contribution
You are welcome to contribute to the project by submitting pull requests or by reporting issues.

</hr>
## License
This code is open-sourced under the MIT license
