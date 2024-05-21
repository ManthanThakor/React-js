

// *********************** OBJECT ***********************

// Objects: Objects are the fundamental building blocks of JavaScript. They encapsulate data and behavior into a single entity.

// Original car object
let car = {
    brand: 'Toyota',
    model: 'Camy',
    year: 2020,
    start: function() {
      console.log('Engine started');
    }
};

// Accessing object properties and methods
console.log(car.brand); // Output: Toyota
car.start(); // Output: Engine started

// Creating a new object based on car with a different year
let car1 = Object.assign({}, car); // Cloning car object
car1.year = 2021; // Modifying year for car1

console.log(car); // Original car object remains unchanged
console.log(car1.year); // Output: 2021


console.log("");
console.log("");
console.log("");

//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------


///  ********** extra part **********

//Object.create object 

const myPrototype = {
    // Prototype properties and methods go here
    greet: function() {
        console.log('Hello!');
    },
    age: 22
};

const newObj = Object.create(myPrototype);
newObj.name = 'John'; // Adding a new property to the newObj
newObj.age = '21'; 


console.log(newObj.name); // Output: John
console.log(myPrototype); // Output: { greet: [Function: greet] }
console.log(newObj.age); // Output: { name: 'John' }
newObj.greet(); // Output: Hello!
console.log("");
console.log("");


//---------------------------------------------------------------------------------------------------

// Define a template for user data
const userTemplate = {
    name: '',
    age: 0,
    id: 0,
    pass: ''
};

//mULTIPLE TYPE OBJECT 

// Create a function to easily create new user objects
function createUser(name, age, id, pass) {
    return {
        ...userTemplate,
        name: name,
        age: age,
        id: id,
        pass: pass
    };
}

// Usage example
const user1 = createUser('John', 3, 112, '12222');
const user2 = createUser('Alice', 25, 113, 'password123');

console.log(user1);
console.log(user2);

//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------

console.log("");
console.log("");


// *********************** CLASS ***********************

// Classes: Classes are a blueprint for creating objects with similar properties and methods. They provide a way to define a new type of object.
//-- JavaScript Class Syntax
// Use the keyword class to create a class.

// Always add a method named constructor():

// Example of defining a class
class Carc {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  start() {
    console.log('Engine startedddddddddddddddd');
  }
}

// Creating objects using the class
let myCar = new Carc('farari', 'Camry', 2090);
console.log(myCar.brand); // Output: farari
myCar.start(); // Output: Engine startedddddddddddddddd
console.log(Carc); // Output: [class Carc]

console.log("");
console.log("");
