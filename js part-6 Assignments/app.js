/*Qs1. Write a JavaScript function that returns array elements larger than a number.*/

let num=6;
let arr=[1,2,3,4,5,6,7,8,9,10,11,12];
function getNumbers(arr,num){
    for(let i=0;i<arr.length;i++){
        if(arr[i]>num){
            console.log(arr[i]);
        }
    }
}
getNumbers(arr,num);

/*Qs2. Write a JavaScript function to extract unique characters from a string.
Example: str = “abcdabcdefgggh” ans = “abcdefgh”*/

let str="abcdabcdefgggh";
ans="";
let arr1=[]
function getUnique(str){
    for(let i=0;i<str.length;i++){
        if(ans.indexOf(str[i])==-1){
            ans=ans+str[i];
        }
    }
    console.log(ans);
}
getUnique(str);

/*Qs3. Write a JavaScript function that accepts a list of country names as input and 
returns the longest country name as output.
Example : country = ["Australia", "Germany", "United States of America"] output : 
"United States of America"*/


let maxe="";
function findMax(){
    while(true){
        let n=prompt("Enter country name ");
        if(n=="quit"){
            break;
        }
        if(n.length>maxe.length){
            maxe=n;
        }
        
    }
    console.log(maxe);

}
findMax();

/*Qs4. Write a JavaScript function to count the number of vowels in a String 
argument.*/


function getCountOfVowels(){
    for(let i=0;i<str1.length;i++){
        let ch=str1[i];
        if(ch=="a" || ch=="e" || ch=="i" || ch=="o" || ch=="u"){
            count++;
        }        
    }
    console.log(count);
}
let str1="manideep";
let count=0;
getCountOfVowels(str1);


/*Qs5. Write a JavaScript function to generate a random number within a range 
(start, end)*/

let start=0;
let end=10;
function generateRandom(){
    let n=Math.floor(Math.random()*end)+1;
    console.log(n);
}
generateRandom();






