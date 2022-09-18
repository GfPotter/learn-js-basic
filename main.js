
function getLog() {
  var myString = '';
  for (var param of arguments) {
    myString += param + '-';

  }
  console.log(myString);
}

getLog(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12);
function sum(a, b) {
  return a + b;

}
var result = sum(20, 18);
function triple(x) {
  return x * 3;

}
var result1 = triple(10)
function showMessage() {
  function fucntionInFunction() {
    console.log("hi");
  }
  fucntionInFunction();
}
showMessage();

function declarationFucntion() {
  console.log("hi");

}
var expressionFunction = function () { }
var myString = 'Ha Thien Quan    Thien';
var language = 'Java,Php,Python';
console.log(myString.length);
console.log(myString.search('Thien'));
console.log(myString.indexOf('Quan'));
console.log(myString.slice(0, 3));
console.log(myString.replace('Ha', 'ha'));
console.log(myString.replace(/Thien/g, 'Thien1'));
console.log(myString.trim());//delete space head and tail
console.log(language.split(','));//split into array
console.log(myString.charAt(2));//get emelement at position 2
var coursesStr = 'HTML & CSS, JavaScript, ReactJS';

function strToArray(str) {
  console.log(coursesStr.split(','));
}

// Expected results
console.log(strToArray(coursesStr))

// Output: ['HTML & CSS', 'JavaScript', 'ReactJS']
var result = 20 / '2';
console.log(result);//Nan respresent for illegal number but still type number
console.log(result.toFixed());//fixed number but change type to string
function isNumber(value) {
  if (typeof value === 'number') return true;
  else return false;
}
// check if value is a number and NaN is returned false
function isNumber(value) {
  return Number.isFinite(value);
}
var languages = [
  'Ruby',
  'PHP',
  'JavaScript',
]
var languages2 = [
  'Python', 'C++', 'C#'
]
//array can have all type of data
console.log(languages);
//check if object is an array
console.log(Array.isArray(languages));
//convert to string and make the ',' become anything you want 
console.log(languages.join(' '));
//delete the last element from the array and return it
//if there is no element in the array return undefined
console.log(languages.pop());
//add to the last element of array and return the length of the array
console.log(languages.push('C++', 'C#'));
//delete the first element from the array and return it
//if there is no element in the array return undefined
console.log(languages.shift());
console.log(languages);
//add to the first element of array and return the length of the array
console.log(languages.unshift('PHP', 'Ruby'));
//delete elements of array and return new array contain the emelement have been removed from array
console.log(languages.splice(0, 1, 'Python'));//(start,number of elements, element you want to add at the place)
//add array2 to array1 from last element of array1
console.log(language.concat(languages2));
console.log(languages);
//cut element from array
console.log(languages.slice(0, 1));//(from,end) slice(0) use to copy array
function getLastElement(array) {
  return array.at(2);
}
var phone = "phone number"
//object
var myInfor = {
  name: 'John',
  age: 20,
  [phone]: '0969297532',
  getName: function () {
    return this.name;
  },
}
console.log(myInfor);
//add new key to object
myInfor.email = 'john@example.com';
myInfor['dob'] = '4/10/2002';
console.log(myInfor);
//get key from object
console.log(myInfor.age);
keydob = 'dob'
console.log(myInfor[keydob]);
//delte key from object
delete myInfor.age
console.log(myInfor);
console.log(myInfor.getName());
//if the key contain function, we call method
var student = {
  name: 'Josh',
  age: '20',
  address: '123  main  Street ',
}
//object constructor
function User(firstName, lastName, email, password) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.password = password;
  this.getName = function () {
    return `${this.firstName} ${this.lastName}`;
  }
}
//expressionFunction
var User = function (firstName, lastName, email, password) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.password = password;
  this.getName = function () {
    return `${this.firstName} ${this.lastName}`;
  }
}
var admin = new User('Quan', 'Ha', 1, 1);
admin.avartar = 'Avartar';
console.log(admin);
console.log(admin.constructor);
console.log(admin.getName());
var Animal = function (name, leg, speed) {
  this.name = name;
  this.leg = leg;
  this.speed = speed;
}
Animal.prototype.age=15; 
var date = new Date(); //object, can use method
var datee = Date();//String, can't use method
var year = date.getFullYear();
console.log(year);
console.log(`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`);

//viet tieng viet day, met qua :))))
// lam` tron` tren
Math.ceil(3.1);//4
//lam` tron` duoi
Math.floor(3.1);//3
//tạo random nhỏ hơn 1
Math.random();
//=> tạo số random nhỏ hơn 10
var random = Math.floor(Math.random()*4);
console.log(random);
var lottery =['100', '200', '300', '400']
console.log(lottery[random]);
//max = số lớn nhât trong dãy
console.log(Math.max(1,2,3,4))