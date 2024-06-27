/*Qs1. Write a JS program to delete all occurrences of element ‘num’ in a given array.
Example : if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
Result should be arr = [1, 3, 4, 5, 6, 3]*/

let arr1=[1, 2, 3, 4, 5, 6, 2, 3];
let num=2;
for(let i=0;i<arr1.length;i++){
    if(arr1[i]==num){
        arr1.splice(i,1);
    }
}
console.log(arr1);

/*Qs2. Write a JS program to find the no of digits in a number.
Example : if number = 287152, count = 6*/

let digits=0;
let number=287152;
while(number>0){
    digits++;
    number=Math.floor(number/10);
}
console.log("Number of digits: "+digits);

/*Qs3. Write a JS program to find the sum of digits in a number.
Example : if number = 287152, sum = 25*/

let sum=0;
let number2=287152;
let rem;
while(number2>0){
    rem=number2%10;
    sum=sum+rem;
    number2=Math.floor(number2/10);
}
console.log("Sum of digits: "+sum);

/*Qs4. Print the factorial of a number n.
[Factorial of a number n is the product of all positive integers less than or equal to a
given positive integer and denoted by that integer. ]
Example :
7! (factorial of 7) = 1x2x3x4x5x6x7 = 5040
5! (factorial of 5) = 1x2x3x4x5 = 120
3! (factorial of 3) = 1x2x3 = 6
0! Is always 1*/

let number3=7;
let fact=1;
for(let i=1;i<=number3;i++){
    fact=fact*i;
}
console.log("factorial of "+number3+" is "+fact);

/*Qs5. Find the largest number in an array with only positive numbers*/

let arr5=[10,15,32,5,9,8];
let maxe=arr5[0];
for(let i=1;i<arr5.length;i++){
    if(arr5[i]>maxe){
        maxe=arr5[i];
    }
}
console.log("Max element in array is: "+maxe);