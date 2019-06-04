function setup(){

    noCanvas();

    let userInput = document.getElementById('inputText');
    userInput.input(newText);

    function newText(){
        let params = {
            active:true,
            currentWindow: true
        }
        chrome.tabs.query(params, gotTab);
        function gotTab(tabs)
        {
            console.log(tabs);
            let message = {
            msg: userInput.value
            }

            chrome.tabs.sendMessage(tabs[0].id, message);
        }
    }
}