
//=========================================================================================================================

// ******************** Inheritance ********************

// Classical Inheritance with Classes

// 1. Base Class (Superclass) Definition:

//A base class (or superclass) is a class whose properties and methods are inherited by another class.

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

let animal = new Animal('Generic Animal');
animal.speak(); // Output: Generic Animal makes a sound.

// 2. Derived Class (Subclass) Definition:

// A derived class (or subclass) extends the base class and inherits its properties and methods.
// The extends keyword is used to create a subclass.


class Dog extends Animal {
    constructor(name, breed) {
      super(name); // Calls the constructor of the superclass (Animal)
      this.breed = breed;
    }
  
    speak() {
      console.log(`${this.name} barks.`);
      console.log(`${this.breed} loyal.`);
    }
  }
  
  let myDog = new Dog('Rex', 'German Shepherd');
  myDog.speak(); 
  // Output: Rex barks, german Shepherd loyal.


// In this example, the Dog class extends the Animal class, inheriting its properties and methods. The super keyword is used to call the constructor of the superclass (Animal) to initialize the name property.

//=========================================================================================================================

// 3. Overriding Methods:

// Subclasses can override methods from the superclass to provide specific implementations.

class Cat extends Animal {
  speak() {
    console.log(`${this.name} meows.`);
  }
}

let myCat = new Cat('Whiskers');
myCat.speak(); // Output: Whiskers meows.

// In this example, the Cat class overrides the speak method from the Animal class to provide a different implementation.

// 4. Prototypal Inheritance

// JavaScript also supports prototypal inheritance, which is the original and more flexible form of inheritance. Objects can directly inherit from other objects. Here’s an example:
// Prototypal Inheritance Using Object.create:

// Base object
const animaal = {
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
};

// Creating a new object that inherits from animal
const dog = Object.create(animaal);
dog.name = 'Rex';
dog.speak(); // Output: Rex makes a sound.

// Overriding the speak method
dog.speak = function() {
  console.log(`${this.name} barks.`);
};

dog.speak(); // Output: Rex barks.

//=========================================================================================================================

// ******************** Encapsulation ********************

// Encapsulation: Encapsulation refers to bundling data and methods that operate on the data into a single unit (i.e., class). It hides the internal state of an object from the outside world and only exposes the necessary functionalities.

// Example of encapsulation
class Counter {
  #count = 0; // Private field

  increment() {
    this.#count++;
  }

  getCount() {
    return this.#count;
  }
}

let counter = new Counter();
counter.increment();
console.log(counter.getCount()); // Output: 1

//=========================================================================================================================
