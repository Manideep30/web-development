/*Qs1. Write a JavaScript program to get the first n elements of an array. [n can be any
    positive number].
    For example: for array [7, 9, 0, -2] and n=3
    Print, [7, 9, 0]*/

let arr1=[7,9,0,-2,5,6]
n=3;
let arr2=arr1.slice(0,n);
console.log(arr2);

/*Qs2. Write a JavaScript program to get the last n elements of an array. [n can be any
    positive number].
    For example: for array [7, 9, 0, -2] and n=3
    Print, [9, 0, -2]*/

let arr3=arr1.slice(arr1.length-n);
console.log(arr3)

/*Qs3. Write a JavaScript program to check whether a string is blank or not*/

let str1=prompt("Enter the string: ")
if(str1.length==0){
    console.log("String is empty");
}
else{
    console.log("String is not empty");
}

/*Qs4. Write a JavaScript program to test whether the character at the given (character)
index is lower case*/

let str2="Manideep";
let idx=5;
if(str2[idx]==str2[idx].toLowerCase()){
    console.log("index character is in lower case");
}
else{
    console.log("index character is not in lower case");
}

/*Qs5. Write a JavaScript program to strip leading and trailing spaces from a string*/

let str3="    ApnaCollege    ";
console.log(str3.trim());

/*Qs6. Write a JavaScript program to check if an element exists in an array or no*/

let arr4=[1,2,3,4,5];
let value=5;
if(arr4.includes(value)){
    console.log(value+" is in Array");
}
else{
    console.log(value+" is not in Array");
}

