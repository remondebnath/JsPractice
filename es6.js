/*======A. ES6 function returns======*/


// snippet1
const add = (a, b) => {
  return a + b; 
  };
 const result1 = add(3, 4);
//  console.log(result1);
//  answer 7


// Snippet 2 :
const greet = (name) => {
return {name};
};
const message = greet("Alice");
// console.log(message);
//  answer { name: 'Alice' }



// Snippet 3 :
const calculateArea = (radius) => {
 const PI = 3.14159;
  var area = PI * radius * radius;
  return area;
};
 const area=calculateArea(5);
//  answer  78.53975



// Snippet 4 :
var multiply = (a, b) => a * b;

var result2 = multiply(2, 5);
// console.log(result2);
// answer 10




// Snippet 5 :
const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

const evenNumber = isEven(8);
// console.log(evenNumber)
 
// answer true




// Snippet 6:
const sayHello = () => {
  return "Hello!";
};

const hello = sayHello();

// console.log(sayHello())
// answer Hello!



// Snippet 7:
const calculateSquare = (num) => num * num;

const squaredNumber = calculateSquare(4);
// console.log(squaredNumber)
// answer 16


 
// Snippet 8:
const divide = (a, b) => {
  if (b === 0) {
    return "Error: Division by zero.";
  }
  return a / b;
};

const result3 = divide(10, 2);
// answer 5

const result4 = divide(8, 0);
// answer Error: Division by zero.

//  console.log(result3+" & "+result4)




