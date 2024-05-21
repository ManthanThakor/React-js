

// Abstraction:
// Abstraction is a concept that allows the hiding of complex implementation details and showing only the necessary features of an object.
// It focuses on what an object does rather than how it does it.
// Abstraction is achieved through the use of classes, where the internal workings of the class are hidden from the outside world, and only essential interfaces (methods) are exposed.
// It helps in reducing complexity, making code easier to understand, maintain, and reuse.


class Shape {
  // Abstract method
  calculateArea() {
    throw new Error('Method calculateArea() must be implemented');
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  // Implementation of abstract method
  calculateArea() {
    return this.width * this.height;
  }
}

let rectangle = new Rectangle(5, 4);
console.log(rectangle.calculateArea()); // Output: 20