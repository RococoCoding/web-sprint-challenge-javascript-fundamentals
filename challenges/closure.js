// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
//nestedFunction can access the the variable internal because functions can reach outside of themselves to access variables, so it can always access variables inside the larger function it is nested in.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
function summation(a) {
  let counter = 0;
  function add(a) {
    for (let i = 1; i <= a; i++) {
      counter += i;
    }
    return counter;
  }
  return add(a);
}

console.log(summation(4));