/*write an arrow function names arrayAverage that accepts an array of numbers and returns the average of 
those numbers */

let arr=[1,2,3,4,5,6,7,8,9];
const avg=(arr)=>{
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    return (sum/arr.length);
}
let ans=avg(arr);
console.log(ans);

/*write an arrow function names isEven() that takes a single number as argument and 
returns if it is even or not */

let num=9;
const oddEven=(num)=>{
    if(num%2==0){
        return true;
    }
    return false;
}

var a=oddEven(num);
if(a){
    console.log("Even");
}
else{
    console.log("odd");
}

