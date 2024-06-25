console.log("Manideep");
console.log("Manideep",21,"Medak");

let a=99;
let b=50;
console.log(`You pay ${a+b} rupees`);
console.log(`manideep`);

console.log("2"==2);
console.log("2"===2);

console.log("Before if");
let age=21;
if(age>=18){
    console.log("You can vote");
}
else{
    console.log("You cannot vote");
}
console.log("After if");

let myName="Manideep";
if(myName=="Manideep"){
    console.log(`Welcome ${myName}`);
}

let color="Green";
if(color==="Red"){
    console.log("Stop color is red");
}
else if(color==="Yellow"){
    console.log("Ready color is Yellow");
}
else
    console.log("Go color is Green");


let size="M";
if(size==="XL"){
    console.log(250);
}
else if(size==="L"){
    console.log(200);
}
else if(size==="M"){
    console.log(100);
}
else if(size==="S"){
    console.log(50)
}

let String="aman";
if(String[0]=="a" && String.length>3){
    console.log("good string");
}
else{
    console.log("not a good string");
}

if(0n){
    console.log("truthy values");
}
else{
    console.log("falsy values");
}

let c="green";
switch(c){
    case("red"):
        console.log("Stop");
        break;
    case("yellow"):
        console.log("slow down");
        break;
    case("green"):
        console.log("Go");
        break;
    default:
        console.log("Broken light");
}

let day=5;
switch(day){
    case(1):
        console.log("Monday");
        break;
    case(2):
        console.log("Tuesday");
        break;
    case(3):
        console.log("Wednesday");
        break;
    case(4):
        console.log("Thrusday");
        break;
    case(5):
        console.log("Friday");
        break;
    case(6):
        console.log("Saturday");
        break;
    case(7):
        console.log("Sunday");
        break;
    default:
        console.log("Enter a valid day number");
    
}

console.error("This is an error message");
console.warn("This is a warning message");

let firstName=prompt("Enter firstName");
let lastName=prompt("Enter lastName");
let nam="Welcome "+firstName+" "+lastName+"!";
alert(nam);

let n1=5;
let n2=-3;
let n3=0;
if(n1>n2 && n1>n3){
    console.log(`${n1} is largest`);
}
else if(n2>n2 && n2>n3){
    console.log(`${n2} is largest`);
}
else{
    console.log(`${n3} is largest`);
}

let num1=32;
let num2=4752;

if(num1%10===num2%10){
    console.log("Both are having same last digit");
}
else{
    console.log("Both numbers having different last digits");
}