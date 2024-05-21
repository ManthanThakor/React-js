// *********************** The Constructor Method ***********************

// The constructor method is a special method:

// It has to have the exact name "constructor"
// It is executed automatically when a new object is created
// It is used to initialize object properties
// If you do not define a constructor method, JavaScript will add an empty constructor method.

// example 1


class Carr {
    constructor(brand, model) {
      this.brand = brand;
      this.model = model;
    }
  }
  
  let mysCar = new Carr('Toyota', 'Camry');
  console.log(mysCar.brand); // Toyota

// example 2

class Person {
    constructor(details) {
        this.name = details.name;
        this.age = details.age;
    }
}

class Teacher extends Person {
    constructor(details) {
        super(details);
        this.subject = details.subject;
    }
}

class Student extends Person {
    constructor(details) {
        super(details);
        this.grade = details.grade;
    }
}

// Creating instances
const teacher1 = new Teacher({ name: "Mr. Smith", age: 35, subject: "Math" });
const student1 = new Student({ name: "Alice", age: 12, grade: 7 });

console.log(teacher1.name); // Mr. Smith

console.log(student1.name); // Alice




// *********************** Class Methods ***********************

// Class methods are created with the same syntax as object methods.
// Use the keyword class to create a class.
// Always add a constructor() method.
// Then add any number of methods.

// Syntax
/* class ClassName {
   constructor() { ... }
  method_1() { ... }
  method_2() { ... }
   method_3() { ... }
 } */

// -- create a Class method named "age", that returns the Car age:

class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age() {
        const date = new Date();
        return date.getFullYear() - this.year;
    }
}

const myCar = new Car("Volvo", 2016);

console.log(myCar.age());
