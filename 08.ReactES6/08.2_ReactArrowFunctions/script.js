

// Arrow Functions
// Arrow functions allow us to write shorter function syntax:

// ExampleGet your own React.js Server
// Before:

hello = function() {
  return "Hello World!";
}

//=============================================================================================

// *********** With Arrow Function: ***********

hello = () => {
  return "Hello World!";
}

//=============================================================================================

// It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword:

// Arrow Functions Return Value by Default:

hello = () => "Hello World!";

// ** Note: This works only if the function has only one statement.
//=============================================================================================

// If you have parameters, you pass them inside the parentheses:

// Arrow Function With Parameters:

hello = (val) => "Hello " + val;

//=============================================================================================

// In fact, if you have only one parameter, you can skip the parentheses as well:

// Arrow Function Without Parentheses:

hello = val => "Hello " + val;

//=============================================================================================

// If you have more than one parameter, you have to use the parentheses:

// Arrow Function With Multiple Parameters:

hello = (val1, val2) => "Hello " + val1 + " and " + val2;
