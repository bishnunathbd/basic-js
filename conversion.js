var num1 = 25;
var num2 = '15.5';

var num3 = 25.5;

var num4 = 0.1;
var num5 = 0.2;

console.log(typeof num2);
// convert string to float
// num2 = parseFloat(num2); 
// num2 = parseInt(num2); 
num2 = +num2;
console.log(typeof num2);
console.log(num2);

console.log(num3);
console.log(typeof num3);
// convert number to string
num3 = '' + num3;
console.log(num3);
console.log('num3 variable type: ',typeof num3);

var total = num4 + num5;
console.log(total);
console.log(typeof total);
// converts a number into a string, rounding to a specified number of decimals
total = total.toFixed(3);
console.log(total);
console.log(typeof total);