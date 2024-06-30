//Print a peom using function

function PrintPeom(){
    console.log("Twinkle Twinkle little star");
    console.log("How I wonder what you are?");
    console.log("Up about the world so high");
    console.log("Like a diamond in the sky");
}
PrintPeom();

//roll a dice and generate the number (1-6)

let num;

function rollDice(){                //Method Defination
    num=Math.floor(Math.random()*6)+1;
    console.log(num);
}

rollDice();                         //Method calling

//create a function that gives the average of 3 numbers

function Avg(a,b,c){
    let sum=a+b+c;
    let average=(sum/3);
    console.log(average);
}

Avg(1,2,3);

//create a function to print multiplication table of a number

function multiplicationTable(num){
    for(let i=1;i<=10;i++){
        console.log(`${num}*${i}=${num*i}`);
    }
}
multiplicationTable(7);

//create a function to print sum of numbers from 1 to n

function findSum(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum=sum+i;
    }
    return sum;
}

let n=10;
let ans=findSum(n);
console.log(`Sum of ${n} numbers is: ${ans}`);

//create a function that returns the concatenation of all strings in an array

let res="";
function printStrings(arr){
    for(ch of arr){
        res=res+ch;
    }
    return res;  
}

arr=["Institute ","of ","Aeronautical ","Engineering ","Dundigal ","Hyderabad"];
console.log(printStrings(arr));

//Functions Scope

let greet="hello";  //global scope

function outerGreet(){
    let greet="namaste";    //function scope
    function innerGreet(){
        console.log(greet); //lexical scope
    }
    innerGreet();
    console.log(greet);
}

console.log(greet);
outerGreet();

//Function expressions (nameless function)

const myName=function(firstName,lastName){
    console.log(firstName+" "+lastName);
}
myName("Manideep","kukunarapu");


//High Order Functions

const numberOfTimes=function(func,count){
    for(let i=0;i<count;i++){
        func();
    }
}

function greetings(){
    console.log("namasthe");
}

numberOfTimes(greetings,10);

//detect odd or even

/*let HOF=function(request){
    if(request=="odd"){
        let odd=function(n){
            console.log(n%2!=0);
        }
        return odd;
    }
    else if(request=="even"){
        let even=function(n){
            console.log(n%2==0);
        }
        return even;
    }
    else{
        console.log("No request in queue");
    }
}


let fun=HOF("even");
fun(6);*/


const Calculator={
    add:function(a,b){
        return a+b;
    },
    sub:function(a,b){
        return a-b;
    },
    mul:function(a,b){
        return a*b;
    },
    div:function(a,b){
        return a/b;
    }
};

const calculator1={
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    }
};
console.log(calculator1.sub(9,4));