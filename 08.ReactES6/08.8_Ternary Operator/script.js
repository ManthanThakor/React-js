// React ES6 Ternary Operator
// Ternary Operator
// The ternary operator is a simplified conditional operator like if / else.

// Syntax: condition ? <expression if true> : <expression if false>

// Here is an example using if / else:

// ExampleGet your own React.js Server
// Before:

if (authenticated) {
  renderApp();
} else {
  renderLogin();
}

// Here is the same example using a ternary operator:

// Example
// With Ternary

authenticated ? renderApp() : renderLogin();