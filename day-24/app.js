/*let div=document.querySelector("div");
let ul=document.querySelector("ul");
let lis=document.querySelectorAll("li");

div.addEventListener("click",function(){
    console.log("div was clicked");
})

ul.addEventListener("click",function(e){
    e.stopPropagation();
    console.log("ul was clicked");
})

for(li of lis){
    li.addEventListener("click",function(e){
        e.stopPropagation();
        console.log("li was clicked");
    })
}*/

let btn=document.querySelector("button");
let li=document.querySelectorAll("li");
let ul=document.querySelector(".todo");
let inp=document.querySelector("input");
btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;
    let delbtn=document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("del");
    item.appendChild(delbtn);
    ul.appendChild(item);
    inp.value="";
})

let delbtns=document.querySelectorAll(".del");
for(let delbtno of delbtns){
    delbtno.addEventListener("click",function(){
        let rem=this.parentElement;
        rem.remove();
    })
}

//But the disadvantage is we cannot delete the tasks that are newly created

ul.addEventListener("click",function(e){
    if(e.target.nodeName="BUTTON"){
        let itemDelete=e.target.parentElement;
        itemDelete.remove();
    }
})

