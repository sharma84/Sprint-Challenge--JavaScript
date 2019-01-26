// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
function consume(x, y, callback) {
  return callback(x, y)
  }
/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
function consume(x, y, callback) {
  return callback(x, y)
  }
    
  function multiply(x, y) {
  return x*y;
  }
  
  function add(x, y) {
  return x+y;
  }
  
  function greeting(x, y) {
    return `Hello ${x} ${y}, nice to meet you!`;
  }
  
/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2,2,add)); // 4
console.log(consume(10,16,multiply)); // 160
console.log(consume("Mary","Poppins", greeting));  // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 

//Since all functions have access to the scope above them and 'variable - internal'  is defined in the scope above the 'nestedFunction()' it has access to the 'variable - internal'. 

// const external = "I'm outside the function";

// function myFunction() {
//   console.log(external);
//   const internal = "Hello! I'm inside myFunction!";

//   function nestedFunction() { 
//     console.log(internal);
//   };
//   nestedFunction();

// }
// myFunction();