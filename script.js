/* learning of Arrays
Fundamental concept in JavaScript, that deals with
 collection of variable with different Data Types. */

 var boyNames = ["Qozeem", "Ibrahim", "Habeeb", "Anas", "Lukman"];
 console.log(boyNames);

/*
LENGTH: LENGTH in an array is to know the number of items in an array. To get the length, 
you use ".length" to get the number of items in the array.
*/ 
var femaleNames = ["Aishat", "Khadeejah", "Munirah", "Hannat", "Sofiyah"];
 console.log(femaleNames.length);

 /*
 Position:  the position of an item in an array or index, you use bracket "[]" and put the number inside the bracket.
 */

 var fruits = ["Banan", "Orange", "Watermelon", "Carrot", "Apple", "Gauva", "Pineapple"];
 console.log(fruits[4]);


 "MUTATION IN ARRAY"

 /*
 Mutation: is to change the value of an item or replace a value with another value in array.
 */

 var animals = ["Lion", "Tiger", "Elephant", "Horse", "Leopard", "Antelope", "Goat",];
 animals[4] = "Dog"; 
 /*
 to add to the item in an array with specification of value position in the index or array use the below method. 
 */
 animals[9] = "Cat"; 
 console.log(animals);

 /*
 To make an item the last in item in the array use the below method.
 */

 var foods = ["Rice", "Beans", "Smovita", "Yam"];
 foods[foods.length] = "Indomie";
 console.log(foods);


//DATA TYPES IN ARRAY: We can have different data types in array.

var Qozeem = ['lekan', 'ilorin', 2005, 'teacher', false];
Qozeem.push("English", "Nigeria");
Qozeem.unshift('Mr.');
// Qozeem.pop();
// Qozeem.shift();
console.log(Qozeem);
console.log(Qozeem.indexOf('ilorin'));


// OBJECT: is used tohold different types of data type. it can hold arrays, other objects and can also attach functions to this object which is called object method. Just like in Array we use bracket, in object we use curly-braces.
// Object in javascript is written in key value pairs.
var Qozeem ={
    firstName: "Qozeem",
    lastName: "lekan",
    Age: 20,
    family: ['daddy', 'mummy', 'sisters', 'brothers'],
    job: "teacher",
    status: false
}; 
console.log(Qozeem["lastName"]);
console.log(Qozeem.family);
Qozeem.hobby = "learning";
Qozeem['friend'] = 'muhammad';
console.log(Qozeem);

var Abdul = new Object();
Abdul.lastName = 'Ahmed';
Abdul.birthYear = 2005;
Abdul['middleName'] = 'ajadi';
Abdul['family'] = 'daddy', 'mummy', 'sisters';
console.log(Abdul);
 
// OBJECT METHOD:
var Qozeem = {
    firstName: "Qozeem",
    lastName: "lekan",
    birthYear: 1997,
    family: ['daddy', 'mummy', 'sisters', 'brothers'],
    job: "teacher",
    status: false,
    calcAge: function() {
        this.age = 2024 - this.birthYear;
        this.Address = "146 Alore ilorin, kwara state";
        this.Friend = "Abu Muqbil";

    }
};
Qozeem.calcAge();
console.log(Qozeem)

// loops: in javacript is a way of repeating lines of codes in a multiple time: we have for loop, while loop, do...while loop, for...in loop, for...of loop.
// the first expression is declaration (initial expression), follow by condition and then increment expression.
for (var i = 0; i < 10; i++) {
    console.log(i);
}


for (let i = 1; i <= 5; i+=2) {
    console.log(i);
}

var Qozeem = ['lekan', 'ilorin', 2005, 'teacher', false, 'student',];
for (var i = 0; i <= Qozeem.length; i++){
    console.log(Qozeem[i]);
}

// while loop

var i = 0;
while(i < Qozeem.length){
    console.log(Qozeem[i]);
    i++;
}


// continue in loop
var Qozeem = ['lekan', 2005, 'teacher', 2024, false, 'student', "boy", 2025];
for (var i = 0; i <= Qozeem.length; i++){
    if(typeof Qozeem[i] !== "string") continue; 
    console.log(Qozeem[i]);
}


//breaks in loop
var Qozeem = ['lekan', 'teacher', 2024, false, 'student', "boy", 2025];
for (var i = 0; i <= Qozeem.length; i++){
    if(typeof Qozeem[i] !== "string") break; 
    console.log(Qozeem[i]);
}