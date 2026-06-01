// function greeting() {
//     console.log("Hello Code Army, Shubham is learning JS");
// }
// greeting();

// function addNumber(num1, num2, num3=0, num4=0) {
//     const sum = num1+num2+num3+num4;
//     console.log(sum);
// }

// addNumber(2, 4);
// addNumber(3, 5, 9);
// addNumber(3, 5, 9, 10);

// function addNumber(...num) {
//     let sum = 0;
//     for(let ele of num) sum += ele;
//     console.log(sum);
// }
// addNumber(3, 5, 9, 10)


// difference between spread operator and rest operatot.

// 1. Rest Operator
const arr = [10, 12, 13, 14, 15];
const [first, second, ...num] = arr;
console.log(first, second, num);

// Here we can see rest operator used to catch remaining element apart from first and second element.

// 2. Spread operator
const arr1 = [1, 3, 5, 6, 30, 5, 3, 1];
const ans = [...arr, ...arr1];
console.log(ans);

// Here we can see spread operator used to combine and spread there element in one single array.


// Function expression, In this case function should define first and call later otherwise it will throw error.

// const addNumber = function(...num) {
//     let sum = 0;
//     for(let ele of num) sum += ele;
//     console.log(sum);
// }

// addNumber(3, 4, 5, 9);

// arrow function : advantage 1). for a single line code no return required.

// const addNumber = (num1, num2) => {
//     console.log(num1+num2);
// }
// addNumber(2, 5);

// //e.g.
// arr1.sort((a,b) => a-b);
// console.log(arr1);


// callback is used to make code re usablility. Without call back direct calling function is hardcode.
// function greet() {
//     console.log("Hello Shubham, Kaise ho");
// }

// function meet(callback) {
//     console.log("I am going to meet Shubham.");
//     callback();
//     console.log("I have finished the meeting");
// }

// meet(greet);

// e.g.
// function bilinkitOrderPlacement() {
//     console.log("Order is under process by bilinkit.")
// }

// function zomatoOrderPlacement() {
//     console.log("Order is under process by zomato.")
// }

// function doPayment(amount, prepareOrderCallback) {
//     console.log("Paymnet initiated.")
//     console.log(`${amount} has been received`);

//     prepareOrderCallback();
// }

// doPayment(200, zomatoOrderPlacement);
// doPayment(300, bilinkitOrderPlacement);

