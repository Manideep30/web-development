//this keyword in js

const student={
    name:"Manideep",
    age:21,
    maths:97,
    phy:95,
    chem:84,
    getAvg(){
        let avg=this.maths+this.phy+this.chem;
        console.log(`${this.name}'s average marks is ${avg/3}`);
    }
}
student.getAvg();
console.log(this);      //window object is executed

//try-catch

console.log("hello");
console.log("hello");
try{
    console.log(a);
}
catch(e){
    console.log("The error is: ",e);
}

console.log("hello");
console.log("hello");

//Arrow functions

const sum=(a,b)=>{
    console.log(a+b);
}
sum(9,3);

const cube=n=>{
    return n*n*n;
}
let ans=cube(2);
console.log(ans);

const mult=(a,b)=>(a*b)
ans=mult(2,5);
console.log(ans);

//setTimeout function of window object

console.log("Hi there");
setTimeout(()=>{
    console.log("Apnacollege")
},5000);

console.log("welcome to");

let id=setInterval(()=>{
    console.log("Manideep")
},2000);

clearInterval(id);

//this with Arrow functions

const sample={
    name:"Manideep",
    age:21,
    marks:85,
    getMarks:function(){
        console.log(this);  //sample object
        console.log(this.marks); //sample object marks
    },
    getName:()=>{
        console.log(this);  //parent's object here parent is sample its refernece is window
        console.log(this.name); //undefined cannot access the object variables in arrow function using this
    },
    getInfo1:function(){
        setTimeout(()=>{
            console.log(this) //parent is function and the scope of function is sample object
        },2000)
    },
    getInfo2:()=>{
        setTimeout(()=>{
            console.log(this) //parent is sample its scope of this is window
        },2000)
    }
}
console.log(sample);
console.log(sample.getMarks());
console.log(sample.getName());
console.log(sample.getInfo1());
console.log(sample.getInfo2());




 

