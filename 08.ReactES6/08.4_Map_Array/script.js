
//=============================================================================================

// React ES6 Array Methods

// Array Methods

// There are many JavaScript array methods.
// One of the most useful in React is the .map() array method.
// The .map() method allows you to run a function on each item in the array, returning a new array as the result.
// In React, map() can be used to generate lists.

// Generate a list of items from an array:

const myArray = ['apple', 'banana', 'orange'];

const myList = myArray.map((item) => console.log(item))

//=============================================================================================

//============================================= extra ================================================


//  filter method :

const users = [
    {
      name: "Van Batchelder",
      city: "London",
      birthYear: 1998
    },
    {
      name: "Winter Rubino",
      city: "Madrid",
      birthYear: 1992
    },
    {
      name: "Yusuf Shea",
      city: "Paris",
      birthYear: 1990
    },
    {
      name: "Zion Shively",
      city: "Alabama",
      birthYear: 2002,
    }
  ];
  
  const currentYear = new Date().getFullYear();
  const filteredUsers = users.filter((user) => (currentYear - user.birthYear) > 30);
  
  console.log(filteredUsers);

//=============================================================================================

//   reduce method

//   The reduce method in JavaScript is a powerful tool for processing arrays and reducing them to a single value. It applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

// Example 1: Sum of All Elements in an Array

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15
// Example 2: Flattening an Array of Arrays

const nestedArray = [[0, 1], [2, 3], [4, 5]];
const flatArray = nestedArray.reduce((accumulator, currentValue) => {
    return accumulator.concat(currentValue);
}, []);

console.log(flatArray); // Output: [0, 1, 2, 3, 4, 5]

// Example 3: Counting Instances of Values in an Object

const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
const nameCount = names.reduce((accumulator, currentValue) => {
    if (currentValue in accumulator) {
        accumulator[currentValue]++;
    } else {
        accumulator[currentValue] = 1;
    }
    return accumulator;
}, {});

console.log(nameCount); // Output: { Alice: 2, Bob: 1, Tiff: 1, Bruce: 1 }

// Example 4: Grouping Objects by a Property

const people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 }
];

const groupedByAge = people.reduce((accumulator, currentValue) => {
    const key = currentValue.age;
    if (!accumulator[key]) {
        accumulator[key] = [];
    }
    accumulator[key].push(currentValue);
    return accumulator;
}, {});

console.log(groupedByAge);
// Output: 
// {
//   20: [{ name: 'Max', age: 20 }, { name: 'Jane', age: 20 }],
//   21: [{ name: 'Alice', age: 21 }]
// }

// Example 5: Removing Duplicates in an Array

const array = [1, 2, 3, 4, 4, 3, 2, 1];
const uniqueArray = array.reduce((accumulator, currentValue) => {
    if (!accumulator.includes(currentValue)) {
        accumulator.push(currentValue);
    }
    return accumulator;
}, []);

console.log(uniqueArray); // Output: [1, 2, 3, 4]

//=============================================================================================
