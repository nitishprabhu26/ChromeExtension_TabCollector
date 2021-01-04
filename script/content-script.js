document.getElementById("urls-group-title").addEventListener("keypress",
    function(e){
        if(e.key === "Enter"){
            // broadcasts a message to any listener that we have instantiated in our chrome extension
            chrome.runtime.sendMessage({title: e.target.value});
        }
    }
);

chrome.storage.sync.get(["urlLists"], (obj)=>{
    console.log(obj);
    if(obj.urlLists.length){
        const htmlLists = obj.urlLists.map((list) => {
            const container = document.createElement("div");
            container.setAttribute("class", "title");
            container.innerHTML=list.title;

            container.addEventListener("click", () => {
                const urlStrings = list.urls.map((urlObject) => urlObject.url);
                chrome.windows.create({url:urlStrings});
            });

            list.urls.forEach((element) => {
                const div = document.createElement("div");
                div.innerHTML = element.url;
                container.appendChild(div);
            });
            return container;
        });

        htmlLists.forEach((list)=>{
            document.getElementById("lists-container").appendChild(list);
        });
    }
});
