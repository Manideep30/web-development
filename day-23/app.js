let btns=document.querySelectorAll("button");

function sayHello(){
    console.log("Hello!");
}
/*for(let btn of btns){
    btn.onmouseenter=function(){
        console.log("control on button");
    }
    btn.onclick=sayHello;
    
}*/

for(let btn of btns){
    /*btn.addEventListener("click",function(){
        console.log("Button clicked");
    })*/
    btn.addEventListener("dblclick",function(){
        console.log("mouse entered");
    })
}

let para=document.querySelector("p");
para.addEventListener("click",function(){
    console.log("parah is clicked");
});

let inp=document.querySelector("input");
inp.addEventListener("keydown",function(event){
    //console.log("Key code: ",event.code);
    if(event.code=="ArrowUp"){
        console.log("Move up");
    }else if(event.code=="ArrowDown"){
        console.log("Move down");
    }else if(event.code=="ArrowLeft"){
        console.log("Move left");
    }else if(event.code=="ArrowRight"){
        console.log("Move right");
    }
    
});

/*let form=document.querySelector("form");
let input=document.querySelector("#text");
let passoword=document.querySelector("#password");
form.addEventListener("submit",function(event){
    event.preventDefault();
    console.log(input.value);
    console.log(password.value);
    
})*/

//Instead of creating querySelectors again we can use help of this keyword. the form object
//contains an elements collection which contains all elements of form

let form=document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
    let text=this.elements[0];
    let password=this.elements[1];
    console.log(text.value);
    console.log(password.value);
});

let paragraph=document.querySelector("#para");
let text=document.querySelector("#text1");

text.addEventListener("input",function(){
    console.log("input event");
    console.log(text.value);
    paragraph.innerText=text.value;
});

text.addEventListener("change",function(){
    console.log("Change event");
    console.log(text.value);
    
});


