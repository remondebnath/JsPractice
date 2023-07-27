// How to Recognize an Array
// return true/false

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(Array.isArray(fruits))


// JavaScript Array forEach()
// foreach callback a function

const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.forEach(myFunc)
function myFunc( itm, indx,arr){
    console.log(indx+":"+ itm+":"+arr)
}


// map() creates a new array from calling a function for every array element

// The filter() method creates a new array filled with elements that /*pass a test*/provided by a function.

// The sort() sorts the elements of an array.
// The sort() sorts the elements as strings in alphabetical and ascending order.
const numbers = [44, 33, 22, 11];

const ages = [32, 33, 16, 4];

const newArr=numbers.concat(ages)


console.log(numbers.map(function(item){return item*10}))

console.log(ages.filter(function(item){return item>21}))

console.log(newArr.sort(function(a,b){return a-b}));