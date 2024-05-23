


// React ES6 Spread Operator
// Spread Operator
// The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.

// ExampleGet your own React.js Server
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];

console.log(numbersCombined); // Output: [1, 2, 3, 4, 5, 6]

// The spread operator is often used in combination with destructuring.

// Example
// Assign the first and second items from numbers to variables and put the rest in an array:

const numbers = [1, 2, 3, 4, 5, 6];

const [one, two, ...rest] = numbers;

console.log(one); // Output: 1
console.log(two); // Output: 2
console.log(rest); // Output: [3, 4, 5, 6]

// We can use the spread operator with objects too:

// Example
// Combine these two objects:

const myVehicle = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red'
}

const updateMyVehicle = {
  type: 'car',
  year: 2021, 
  color: 'yellow'
}

const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}

console.log(myUpdatedVehicle); // { brand: 'Ford', model: 'Mustang', color: 'yellow', type: 'car', year: 2021 }

// Notice the properties that did not match were combined, but the property that did match, color, was overwritten by the last object that was passed, updateMyVehicle. The resulting color is now yellow.