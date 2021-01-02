document.getElementById("urls-group-title").addEventListener("keypress",
    function(e){
        if(e.key === "Enter"){
            // broadcasts a message to any listener that we have instantiated in our chrome extension
            chrome.runtime.sendMessage({addUrls: true})
        }
    }
);