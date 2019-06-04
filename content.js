console.log("at content.js");
for(i = 0 ; i < 10; i++)
{
    console.log("Go Anshul GO!!");
}

chrome.runtime.onMessage.addListener(function (message, sender, sendResponce){
    console.log("message got");
    console.log(message.msg);
});
