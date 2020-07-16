var student = {id: 212, phone: 8765, name: 'Shaquib'};
var student2 = {id: 333, phone: 3468, name: 'Samia'};

console.log(student);
console.log(student2);

// access property
var phoneNo = student.phone;
phoneNo = student2['phone'];
var phonePropName = 'phone';
phoneNo = student[phonePropName];
// console.log(phoneNo);

//update phone
student.phone = 1111;
student['phone'] = 2222;
student[phonePropName] = 3333;

// add new property
student.gender = 'Male';
student['age'] = 22;
console.log(student);