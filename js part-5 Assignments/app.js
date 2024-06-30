/*Qs1. Create a program that generates a random number representing a dice roll.
[The number should be between 1 and 6]*/

let n=Math.floor(Math.random()*6)+1;
console.log(n);

/*Qs2. Create an object representing a car that stores the following properties for the
car: name, model, color.
Print the car’s name*/

let carObject={
    car1:{
        name:"Maruthi",
        model:"2002",
        color:"red"
    },
    car2:{
        name:"Honda",
        model:"2012",
        color:"black"
    }
};
console.log(carObject);

/*Qs3. Create an object Person with their name, age and city.
Edit their city’s original value to change it to “New York”.
Add a new property country and set it to the United States*/

let personObject={
    name:"ravi",
    age:25,
    city:"Hyderabad"
};
console.log(personObject);

personObject.city="Newyork";
personObject.country="United States";
console.log(personObject);
