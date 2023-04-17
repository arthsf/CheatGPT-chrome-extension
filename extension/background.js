// Create a context menu item
chrome.contextMenus.create({
  id: "ask-chatgpt",
  title: "Ask ChatGPT",
  contexts: ["all"],
});

// Listen for when the user clicks on the context menu item
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "ask-chatgpt") {
    // Send a message to the content script
    chrome.tabs.sendMessage(tab.id, { type: "ASK_CHATGPT" });
  }
});

// Listen for commands sent from the keyboard shortcut
chrome.commands.onCommand.addListener(function(command) { 
  if (command === "myCommand") { 
    chrome.tabs.sendMessage(tab.id, { type: "ASK_CHATGPT" });
 } 
});
