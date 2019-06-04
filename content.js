console.log("at content.js");
for(i = 0 ; i < 10; i++)
{
    console.log("Go Anshul GO!!");
}
// add popups
let arr = ["download.jpg" , "alpha.jpg"];

chrome.runtime.onMessage.addListener(function (message, sender, sendResponce){
    console.log("message got");
    console.log(message.msg);
});

let imgs = document.getElementsByTagName('img');

for ( img of imgs ){
    console.log("Img: ", img.src);
    let src = "kittens/"+arr[1];
    let url = chrome.extension.getURL(src); 
    img.src = url;
    console.log(img.src);
}
