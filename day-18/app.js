const student={
    name:"manideep",
    age:21,
    marks:8.3,
    city:"dundigal",
    favFood:["chicken","panner","uttappa"]
};

const post={
    username:"@manideep",
    content:"#myfirst post",
    likes:50,
    reposts:5,
    tags:["@iare","@cmr","@bvrit"]
};

console.log(post["username"]);
console.log(post.content);

post.likes=60;
post.comments=5;
console.log(delete post.tags);
console.log(post);

let classInfo={
    aman:{
        grade:"A",
        city:"mumbai"
    },
    shradha:{
        grade:"B",
        city:"delhi",
    },
    kumar:{
        grade:"C",
        city:"hyderabad",
    },
};

console.log(classInfo);
console.log(classInfo.shradha.city);
classInfo.shradha.city="Hyderabad";
console.log(classInfo.shradha.city);

let ArrayOfObjects=[
    {
        name:"Manideep",
        age:21,
        city:"Hyderabad",
    },
    {
        name:"bhavana",
        age:21,
        city:"Medchal",

    }
];
console.log(ArrayOfObjects);
console.log(ArrayOfObjects[0].name);

//Random numbers from 1 to 10

for(let i=0;i<10;i++){
    let n=Math.random();
    n=n*10;
    n=Math.floor(n);
    console.log(n+1);
}

//Generate a Random number between 1 and 100
let n=Math.floor(Math.random()*100)+1;
console.log(n);

//Generate a Random number between 1 and 5
let s=Math.floor(Math.random()*5)+1
console.log(s);

let number=prompt("Enter max value: ");
let guessNumber=prompt("Enter the number you guess: ");
let innerNum=Math.floor((Math.random()*number))+1;
while(true && guessNumber!="quit"){
    if(guessNumber==innerNum){
        alert("Hurray your guess was correct!");
        break;
    }
    if(guessNumber<innerNum){
        guessNumber=prompt("your guessNumber is less than the number try again ");
    }
    else if(guessNumber>innerNum){
        guessNumber=prompt("your guessNumber is more than the number try again ");
    }
}
if(guessNumber=="quit"){
    alert("quitting successfully");
}