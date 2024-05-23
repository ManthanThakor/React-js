console.log();
console.log();

//=============================================================================================

// Destructuring
// To illustrate destructuring, we'll make a sandwich. Do you take everything out of the refrigerator to make your sandwich? No, you only take out the items you would like to use on your sandwich.

// Destructuring is exactly the same. We may have an array or object that we are working with, but we only need some of the items contained in these.

// Destructuring makes it easy to extract only what is needed.

//=============================================================================================
// Destructing Arrays
// Here is the old way of assigning array items to a variable:

// Before:

const vehicles = ['mustang', 'f-150', 'expedition'];

// old way
const carr = vehicles[0];
const truckk = vehicles[1];
const suvv = vehicles[2];

console.log(carr); // mustang
console.log(truckk); // f-150
console.log(suvv); // expedition

console.log();
console.log();

// Here is the new way of assigning array items to a variable:

// Example
// With destructuring:

const vehicless = ['mustanggg', 'f-1500000', 'expeditionnnn'];

const [car, truck, suv] = vehicless;

console.log(car); // mustanggg
console.log(truck); // f-15000000
console.log(suv); // expeditionnnn

console.log();
console.log();


// If we only want the car and suv we can simply leave out the truck but keep the comma:

const vehiclesss = ['mustang', 'f-150', 'expedition'];

const [caar,, suuv] = vehiclesss;

//=============================================================================================

// example

// Destructuring comes in handy when a function returns an array:
function calculate(a, b) {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;

  return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = calculate(4, 7);