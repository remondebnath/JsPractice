function main(input) {
  // const numbers = input.trim().split(' ');
  // const number1 = parseFloat(numbers[0]);
  // const number2 = parseFloat(numbers[1]);

 
  //   const sum = number1 + number2;
  //   console.log(sum);
  
  const name= input.trim();
  
  console.log(`${name},good morning good morning`)

}

process.stdin.on('data', data => {
  main(data.toString());
});

