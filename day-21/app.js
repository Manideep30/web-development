//Array Methods

//1) forEach   

arr=[1,2,3,4,5]
arr.forEach(function(ele){
    console.log(ele);
})

arr.forEach((ele)=>{
    console.log(ele*2);
})

object=[{
    name:"Manideep",
    marks:95
},
{
    name:"Ramya",
    marks:96
},
{
    name:"Priya",
    marks:97
}]

object.forEach((student)=>{
    console.log(student.name);
});

//2) Map method

let mapArr=arr.map((ele)=>{
    return ele*3;
});

console.log(mapArr);

let gpa=object.map((ele)=>{
    return (ele.marks/10);
});

console.log(gpa);

//3) filter : This function returns true or false ,if it returns true then that element is added to array

let even=arr.filter((ele)=>{
    return ele%2==0;
});

console.log(even);

//4) every function ,similar to logical AND
let isEven=even.every((ele)=>{
    return ele%2===0;
});
console.log(isEven);

//5) some function ,similar to logical OR
let odd=[1,2,3,4,5];
let isOdd=odd.some((ele)=>{
    return ele%2!=0;
});
console.log(isOdd);

//6) reduce method ac=accumulator and el=element
let red=[1,2,3,4];
let res=red.reduce((ac,el)=>{
    return (ac+el);
});
console.log(res);

//Q1) maximum in the array using reduce method

let myArr=[1,2,3,1];
let maximum=myArr.reduce((ac,el)=>{
    if(el>ac){
        return el;
    }
    else{
        return ac;
    }
});
console.log(maximum);

//Q2) Check if all the numbers in the array are multiple of 10 or not

let myArr1=[10,20,30,40,50];
let isMulOfTen=myArr1.every((el)=>{
    return el%10==0;
});
console.log(isMulOfTen);

//Q3) Create a function to find the minimum in the array

function getMin(myArr2){
    let min=myArr2.reduce((mi,el)=>{
        if(mi>el){
            return el;
        }
        else{
            return mi;
        }
    });
    return min;
}
let myArr2=[-1,6,7,5,-6,-8];

console.log(getMin(myArr2));

//Default parameters

function mult(a,b=6){
    console.log(a*b);
}

mult(5);

//spread operator

console.log(..."Manideep");
console.log(Math.max(...myArr2));

let oddNums=[1,3,5];            //spread for array literals
let evenNums=[2,4,6];
let nums=[...oddNums,...evenNums];
console.log(nums);

let college={
    name:"IARE",
    year:2000
};

let copyOfCollege={...college,nirf:123};
console.log(copyOfCollege);

let arrayObject={...evenNums};
console.log(arrayObject);

//rest operator 

function min(msg,...args){
    console.log(msg);
    return args.reduce((ac,el)=> ac+el);
}
console.log(min("hello",[1,2,3,4]));

//Destructuring on Arrays

let a=["Tony","Stark","Sidhu","Afreed"];
let[winner,runner,...others]=a;
console.log(winner);
console.log(others);

//Destructuring on objects

let student={
    name:"Karan",
    age:21,
    city:"Mumbai",
    subjects:["maths","english","hindi"],
    userName:"karan@123",
    password:"12345678"
};

let {userName,password,city:place,schoolName="SKK"}=student;

