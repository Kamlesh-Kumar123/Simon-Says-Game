let btn=document.querySelector("button");
let inp=document.querySelector("input");
let ul=document.querySelector("ul");

btn.addEventListener("click",function(){
    let li = document.createElement("li");
    li.innerText = inp.value ;

    let delbtn = document.createElement("button");
    delbtn.innerText = "Delete"
    delbtn.classList.add('delete');

    li.appendChild(delbtn);
    ul.appendChild(li);
    inp.value = "";
});



// It work for all delete btns inside ul due to event bubbling 
ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listItem = event.target.parentElement ;
        listItem.remove();
        console.log("Deleted");
    }
});





// Ye only already existing buttons ko delete karta hai
// let delbtns = document.querySelectorAll(".delete");
// for( delbtn of delbtns){
//     delbtn.addEventListener("click",function(){
//         console.log(this.parentElement);
//         let par = this.parentElement ;
//         par.remove();
//     });
// }