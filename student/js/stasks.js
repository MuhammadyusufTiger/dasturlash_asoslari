let staskL=[
    {
        id: 0,
        title:"Topshiriq 1",
        link: "sourses/books/amaliyot/1,2,3-Amaliy.pdf",
    },
    {
        id: 1,
        title:"Topshiriq 2",
        link: "sourses/books/amaliyot/4,5,6-Amaliy.pdf",
    },
    {
        id: 2,
        title:"Topshiriq 3",
        link: "sourses/books/amaliyot/7,8,9-Amaliy.pdf",
    },
    {
        id: 3,
        title:"Topshiriq 4",
        link: "sourses/books/amaliyot/10,11,12-Amaliy.pdf",
    },
    {
        id: 4,
        title:"Topshiriq 5",
        link: "sourses/books/amaliyot/13,14,15-Amaliy.pdf",
    }
    
]

let stasksBtns=document.querySelector("#stasksLink");
let objT=document.querySelector("#objL");
let countT=document.querySelector("#taskCount");

// countT.textContent=`${staskL.length} ta`;
// for(let k=0;k<staskL.length;k++){
    
// }

$(document).ready(() => {
    countT.textContent=`${staskL.length} ta`
    for(let i=0;i<staskL.length;i++){
        stasksBtns.innerHTML+=`<button 
                                    type="button" 
                                    class="btn btn-lg btn-primary w-100 text-start mb-2 mt-2" 
                                    style="font-size: 14px; height:50px;"
                                    onclick="setLink(${i})">
                                    ${staskL[i].title}
                                </button>`;
    }
});
function setLink(i){
    objT.data=staskL[i].link;
}