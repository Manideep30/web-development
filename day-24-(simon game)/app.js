//Module-1

let game=[];
let user=[];
let maxScore=[];
let start=false;
let level=0;
colors=["yellow","pink","blue","skyblue"];
let h2=document.querySelector("h2");
let body=document.querySelector("body");
let para=document.querySelector("p");

document.addEventListener("keypress",function(){
    if(start==false){
        console.log("Game started");
    }
    start=true;
    levelUp();

})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);

    let gameColor=btn.getAttribute("id");
    game.push(gameColor);
}


function checkSeq(idx){
    if(game[idx]===user[idx]){
        if(game.length===user.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        maxScore.push(level);
        maxScore.sort();
        para.innerText=`Your Max Score was ${maxScore[maxScore.length-1]}`;
        h2.innerHTML=`Game Over ! Your score was <b>${level}</b> <br>
        Press any Key to start`;
        
        body.classList.add("over");
        setTimeout(function(){
            body.classList.remove("over")
        },150);
        
        reset();
    }
}

function userFlash(btn){
    btn.classList.add("green");
    setTimeout(function(){
        btn.classList.remove("green")
    },250);

    let userColor=btn.getAttribute("id");
    user.push(userColor);

    checkSeq(user.length-1);
}


function levelUp(){
    user=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random()*4);
    let randColor=colors[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameFlash(randBtn);

}

function buttonPress(){
    let btn=this;
    userFlash(btn);
}

let btns=document.querySelectorAll("button");
for(let btn of btns){
    btn.addEventListener("click",buttonPress);
}

function reset(){
    game=[];
    user=[];
    start=false;
    level=0;
}

