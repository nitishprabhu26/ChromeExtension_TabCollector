chrome.runtime.onMessage.addListener(
    function(request){
        if(request.title){
            chrome.windows.getCurrent({populate:true}, (window)=>{
                // takes all the tabs on window and filtering all the general chrome tabs
                
                // The indexOf() method returns the position of the first occurrence of a specified value in a string.
                // This method returns -1 if the value to search for never occurs.
                // Note: The indexOf() method is case sensitive.
                const urls = window.tabs.filter( t=> t.url.indexOf("chrome://") !=0);
                console.log(urls);
            });
            // Store New URL's
        }
    }
);
