// adding two array and sort out
const numbers = [44, 33, 22, 11];

const ages = [32, 33, 16, 4];

const newArr=numbers.concat(ages)


console.log(numbers.map((item)=>item*10))

console.log(ages.filter((item)=>item>21))

console.log(newArr.sort((a,b)=>a-b));

