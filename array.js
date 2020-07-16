var friendsAge = [26, 31, 24, 22, 44];

var tanuAge = friendsAge[3];
console.log(tanuAge);

console.log(friendsAge);
// set a value by index of an array
friendsAge[4] = 14;
console.log(friendsAge);

// find array element position
var position = friendsAge.indexOf(24);
console.log(position);
var position = friendsAge.indexOf(224);
console.log(position);

// find how many elements in an array
console.log(friendsAge.length);

// add new element to the end of an array
console.log(friendsAge);
friendsAge.push(50);
friendsAge.push(70);
console.log(friendsAge);

// remove element from the end of an array
friendsAge.pop();
console.log(friendsAge);

// add element at the beginning
friendsAge.unshift(99);
console.log(friendsAge);

// remove element from the beginning
friendsAge.shift();
console.log(friendsAge);

// slice() method
// returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
var friendsName = ['aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff'];
var part = friendsName.slice(2, 5);
console.log(part);
console.log(friendsName);