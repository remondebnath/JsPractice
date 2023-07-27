// How to Recognize an Array
// return true/false

const fruit = ["Banana", "Orange", "Apple", "Mango"];
console.log(Array.isArray(fruit))


// JavaScript Array forEach()
// foreach callback a function

fruit.forEach(myFunc)
function myFunc( itm, indx,arr){
    console.log(indx+":"+ itm+":"+arr)
}
// simillarApproch to foreach function(index)
// const keys = fruit.keys();
// for (let x of keys) {
//     console.log( x);
// }


// map() creates a new array from calling a function for every array element

// The filter() method creates a new array filled with elements that /*pass a test*/provided by a function.

// The sort() sorts the elements of an array.
// The sort() sorts the elements as strings in alphabetical and ascending order.

// The reduce() method does not reduce the original array.

const numbers = [44, 33, 22, 11];

const ages = [32, 33, 16, 4];

const newArr=numbers.concat(ages)


console.log(numbers.map(function(item){return item*10}))

console.log(ages.filter(function(item){return item>21}))
// The every() checks if all array values are larger than 18:
console.log(numbers.every(function(item){return item>21}))

console.log(newArr.sort(function(a,b){return a-b}));

console.log(numbers.reduce((ttl,itm)=>{return ttl+itm}));


// The Array.keys() method returns an Array Iterator object with the keys of an array.
