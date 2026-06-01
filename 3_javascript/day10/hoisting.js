// Whenever javascript runs, there create execution context.
// 1. Memory Allocation
// 2. Execution Phased.

var a = 10;
var b = 20;

function addNumber(num1, num2) {
    var sum = num1 + num2;
    return sum;
}

var sumRes1 = addNumber(2, 3);
var sumRes2 = addNumber(4, 5);
console.log(sumRes1, sumRes2);