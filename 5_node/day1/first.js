console.log("KG Coding is the best!!");

const fs = require('fs');

// Define two varibales

let a = 10, b = 5;

// Basic arithmetic operations
let sum = a+b, prod = a*b;

// Prepare data to write
let data = `Sum: ${sum}\nProduct: ${prod}`;
console.log(data);

// Write data to a local file
fs.writeFile('output.txt', data, (err) => {
  if(err) throw err;
  console.log('Data written to file');
});

