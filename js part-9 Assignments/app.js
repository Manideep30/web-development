/* 1)a <p> with red text that says "Hey I'm red"
   2)an <h3> with blue says "Hey I'm blue"
   3)a <div> with a black border and pink background color with the following elements inside it
    another <h1> says that "Iam in a div"
    a <P> says "Me to"*/

let para=document.createElement("p");
let body=document.querySelector("body");
para.innerText="Hey I'm red";
para.style.color="red";
body.append(para);

let heading3=document.createElement("h3");
heading3.innerText="Hey I'm, blue";
heading3.style.color="blue";
body.appendChild(heading3);

let div=document.createElement("div");
div.classList.add("box");
let heading1=document.createElement("h1");
let par=document.createElement("p");
heading1.innerText="Iam in a div";
par.innerText="Me to";
div.append(heading1);
div.append(par);
body.append(div);
