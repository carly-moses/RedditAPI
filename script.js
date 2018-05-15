"use-strict";
$(document).ready(()=> {

    $.get("https://www.reddit.com/r/aww/.json", (data)=> {
        // console.log(data); 
        // console.log(data.data.children);   //two datas b/c parameter is called data and data is in the console
        for (let i=0; i<10; i++){
            let title = data.data.children[i].data.title
            let image = data.data.children[i].data.thumbnail
            let link = data.data.children[i].data.permalink
            let url = (`https://reddit.com${link}`)
            console.log(link); 
                    $(".container").append(`
                        <div class=photo>
                            <h2>${title}</h2>
                            <img src="${image}">
                            <a href="${url}">Visit the Full Page Here!</a>
                        </div>
                    `)
                }
                //I will make it so the another page opens up to the link
                //Work in progress
                // $("div").click(function(){
                //     window.open(`this.a.href`); 
                // });
            
    });

   


}); 

