var num = 5;
var num2 = -5;
var num3 = 5.543;

var absoluteNumber = Math.abs(num);
console.log('absolute number: ', absoluteNumber);
var absoluteNumber2 = Math.abs(num2);
console.log('absolute number: ', absoluteNumber2);

var result = Math.round(num3);
console.log('round: ', result);
console.log('round: ', Math.round(5.433));

var result2 = Math.ceil(num3);
console.log('ceil: ', result2);
console.log('ceil: ', Math.ceil(5.033));

var result3 = Math.floor(num3);
console.log('floor: ', result3);
console.log('floor: ', Math.floor(5.933));

var result4 = Math.random();
console.log('random number: ', result4);

var num5 = Math.random() * 100;
var result5 = Math.round(num5);
console.log('random number: ', result5);


