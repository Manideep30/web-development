/*Qs1. Square and sum the array elements using the arrow function and then find the
average of the array. */

let arr=[1,2,3,4,5];
let ans=arr.reduce((ac,el)=>ac+el);
console.log(ans);
console.log("Average: ",ans/arr.length);

/*Qs2. Create a new array using the map function whose each element is equal to the
original element plus 5. */

let arr2=[1,2,3,4,5];
let newArr=arr2.map((el)=>{
    return el+5;
});
console.log(newArr);

/*Qs3. Create a new array whose elements are in uppercase of words present in the
original array */

let stArr=["manideep","shanumuk","pavan"];
let upperArr=stArr.map((ele)=>{
    return ele.toUpperCase();
});
console.log(upperArr);


/*Qs4. Write a function called doubleAndReturnArgs which accepts an array and a
variable number of arguments. The function should return a new array with the original
array values and all of the additional arguments doubled.*/

/*Qs5. Write a function called mergeObjects that accepts two objects and returns a new
object which contains all the keys and values of the first object and second object */


