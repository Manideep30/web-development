let btn=document.querySelector("button");

btn.addEventListener("click",function(){
    let heading=document.querySelector("h3");
    let randomNumber=getRandom();
    heading.innerText=randomNumber;
    let div=document.querySelector("div");
    div.style.backgroundColor=randomNumber;

});

function getRandom(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);

    let result=`rgb(${red},${green},${blue})`;
    return result;

}