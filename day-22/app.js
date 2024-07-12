//Selecting Elements

//1) getElementById("idName")

/*let idObj=document.getElementById("image");
console.dir(idObj);
console.log(idObj.src);*/

//2) getElementByClassName("className")

/*let classObj=document.getElementsByClassName("imc");
for(let i=0;i<classObj.length;i++){
    //classObj[i].src="./spiderman.png";
    console.log(`image ${i} source has changed`);
}*/

//3) getElementByTagName("tagName");

/*let tagObj=document.getElementsByTagName("p");
for(let i=0;i<tagObj.length;i++){
    tagObj[i].innerHTML=`${i+1} image`
}*/

//4) querySelector() and querySelectorAll();

/*document.dir(document.querySelector("p").innerHTML="Hello");
document.dir(document.querySelectorAll("p").innerHTML="All are changed");*/


let a = document.querySelector(".abc");
let cols = document.querySelectorAll(".box a"); 
for (let c of cols) {
    c.style.color = "black";
}

//appendChild

let box=document.querySelector(".box");
let newPara=document.createElement("p");
newPara.innerHTML="This is a new Para using appendChild";
box.appendChild(newPara);

//append is used as appendChild and it is also used to add information to an existing element
newPara.append("This is an appended sentence");

let but=document.createElement("button");
but.innerText="clickMe";
newPara.append(but);

//prepend it will append the childElement at the beginning of the parent

let prepPara=document.createElement("p");
prepPara.innerText="Prepend content";
box.prepend(prepPara);

//insertAdjacentElement(position,element)

let adj=document.createElement("button");
adj.innerText="Button!!!";

let addTo=document.querySelector("p");
addTo.insertAdjacentElement("beforebegin",adj);


adj.remove();
but.remove();
box.removeChild(newPara);







