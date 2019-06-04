console.log("backjs runnig check?");


function buttonClicked(tab){
    console.log("button clicked! at "+ tab);
    console.log(tab);
    chrome.tabs.sendMessage(tab.id, { "msg" : "hello"});
}

chrome.browserAction.onClicked.addListener(buttonClicked);

