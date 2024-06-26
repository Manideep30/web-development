/*let password=prompt("set your password");
console.log(password.trim());*/

let str="Manideep";
console.log(str.indexOf("e"));

let s="ILoveCoding";
console.log(s.slice(-5));

let s1="ApnaApnaApna";
console.log(s1.replace("Apna","College"));
console.log(s.repeat(2));

let fruits=["Banana","Apple","Orange"];
fruits[10]="strawberry";
console.log(fruits);

let animals=["dog","lion","cat"]
animals.push("cheetah");
animals.unshift("tiger");
console.log(animals);
animals.pop();
animals.shift();
console.log(animals);

let months=["january","july","march","august"];
console.log(months);
months.shift();
let a=months.shift();
months.unshift("june");
months.unshift(a);
console.log(months);


console.log(fruits.concat(animals));
console.log(animals.reverse());

console.log(animals.slice(2,3));

let arr=["telangana","andrapradesh","tamilnadu","kerala","Uttarpradesh"];
console.log(arr.splice(2));
console.log(arr.splice(0,1));
console.log(arr);
console.log(arr.splice(0,1,"Hyderabad","Mumbai"));
console.log(arr);

let array=[100,200,300,500,90];
array.sort();
console.log(array);

let ab=["january","july","march","august"];
ab.splice(0,2,"june");
ab.splice(0,0,"july");
console.log(ab);

let lang=["c","c++","html","javascript","python","java","c#","sql"];
console.log(lang.reverse().indexOf("javascript"));

let game=[["X",null,"O"],[null,"X",null],["O",null,"X"]];
console.log(game);
game[0][1]="O";
console.log(game);