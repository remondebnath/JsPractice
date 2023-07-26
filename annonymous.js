/*======B. Anonymous functions======*/
// ans01
const sum=function(num1,num2){
    return num1+num2;
  }
  sum(3,5);
  
  
  // ans02
  const numbers = [1, 2, 3, 4, 5];
  const squaredNumbers = numbers.map((value) => {
    return value*value;
  });
  
  console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
  
  

  /*======C. JavaScript arrow function ======*/
  const calculateSquare=(number)=>{
    const result= number*number
    return result;

  }
  console.log(calculateSquare(5));
  console.log(calculateSquare(8));
  console.log(calculateSquare(12));