
// function getLog() {
//   var myString = '';
//   for (var param of arguments) {
//     myString += param + '-';

//   }
//   console.log(myString);
// }

// getLog(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12);
// function sum(a, b) {
//   return a + b;

// }
// var result = sum(20, 18);
// function triple(x) {
//   return x * 3;

// }
// var result1 = triple(10)
// function showMessage() {
//   function fucntionInFunction() {
//     console.log("hi");
//   }
//   fucntionInFunction();
// }
// showMessage();

// function declarationFucntion() {
//   console.log("hi");

// }
// var expressionFunction = function () { }
// var myString = 'Ha Thien Quan    Thien';
// var language = 'Java,Php,Python';
// console.log(myString.length);
// console.log(myString.search('Thien'));
// console.log(myString.indexOf('Quan'));
// console.log(myString.slice(0, 3));
// console.log(myString.replace('Ha', 'ha'));
// console.log(myString.replace(/Thien/g, 'Thien1'));
// console.log(myString.trim());//delete space head and tail
// console.log(language.split(','));//split into array
// console.log(myString.charAt(2));//get emelement at position 2
// var coursesStr = 'HTML & CSS, JavaScript, ReactJS';

// function strToArray(str) {
//   console.log(coursesStr.split(','));
// }

// // Expected results
// console.log(strToArray(coursesStr))

// // Output: ['HTML & CSS', 'JavaScript', 'ReactJS']
// var result = 20 / '2';
// console.log(result);//Nan respresent for illegal number but still type number
// console.log(result.toFixed());//fixed number but change type to string
// function isNumber(value) {
//   if (typeof value === 'number') return true;
//   else return false;
// }
// // check if value is a number and NaN is returned false
// function isNumber(value) {
//   return Number.isFinite(value);
// }
// var languages = [
//   'Ruby',
//   'PHP',
//   'JavaScript',
// ]
// var languages2 = [
//   'Python', 'C++', 'C#'
// ]
// //array can have all type of data
// console.log(languages);
// //check if object is an array
// console.log(Array.isArray(languages));
// //convert to string and make the ',' become anything you want
// console.log(languages.join(' '));
// //delete the last element from the array and return it
// //if there is no element in the array return undefined
// console.log(languages.pop());
// //add to the last element of array and return the length of the array
// console.log(languages.push('C++', 'C#'));
// //delete the first element from the array and return it
// //if there is no element in the array return undefined
// console.log(languages.shift());
// console.log(languages);
// //add to the first element of array and return the length of the array
// console.log(languages.unshift('PHP', 'Ruby'));
// //delete elements of array and return new array contain the emelement have been removed from array
// console.log(languages.splice(0, 1, 'Python'));//(start,number of elements, element you want to add at the place)
// //add array2 to array1 from last element of array1
// console.log(language.concat(languages2));
// console.log(languages);
// //cut element from array
// console.log(languages.slice(0, 1));//(from,end) slice(0) use to copy array
// function getLastElement(array) {
//   return array.at(2);
// }
// var phone = "phone number"
// //object
// var myInfor = {
//   name: 'John',
//   age: 20,
//   [phone]: '0969297532',
//   getName: function () {
//     return this.name;
//   },
// }
// console.log(myInfor);
// //add new key to object
// myInfor.email = 'john@example.com';
// myInfor['dob'] = '4/10/2002';
// console.log(myInfor);
// //get key from object
// console.log(myInfor.age);
// keydob = 'dob'
// console.log(myInfor[keydob]);
// //delte key from object
// delete myInfor.age
// console.log(myInfor);
// console.log(myInfor.getName());
// //if the key contain function, we call method
// var student = {
//   name: 'Josh',
//   age: '20',
//   address: '123  main  Street ',
// }
// //object constructor
// function User(firstName, lastName, email, password) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.email = email;
//   this.password = password;
//   this.getName = function () {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }
// //expressionFunction
// var User = function (firstName, lastName, email, password) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.email = email;
//   this.password = password;
//   this.getName = function () {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }
// var admin = new User('Quan', 'Ha', 1, 1);
// admin.avartar = 'Avartar';
// console.log(admin);
// console.log(admin.constructor);
// console.log(admin.getName());
// var Animal = function (name, leg, speed) {
//   this.name = name;
//   this.leg = leg;
//   this.speed = speed;
// }
// Animal.prototype.age = 15;
// var date = new Date(); //object, can use method
// var datee = Date();//String, can't use method
// var year = date.getFullYear();
// console.log(year);
// console.log(`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`);

// //viet tieng viet day, met qua :))))
// // lam` tron` tren
// Math.ceil(3.1);//4
// //lam` tron` duoi
// Math.floor(3.1);//3
// //tạo random nhỏ hơn 1
// Math.random();
// //=> tạo số random nhỏ hơn 10
// var random = Math.floor(Math.random() * 4);
// console.log(random);
// var lottery = ['100', '200', '300', '400']
// console.log(lottery[random]);
// //max = số lớn nhât trong dãy
// console.log(Math.max(1, 2, 3, 4))
// //toán tử ba ngôi
// var result = 3 > 2 ? true : false;
// console.log(result);
// function getTotal(arr) {

//   var sum = 0;
//   for (var i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;

// }
// console.log(getTotal([1, 2, 3]));
// var myInfor = {
//   name: 'John',
//   age: 20,
// }
// for (var key in myInfor) {
//   console.log(key + ' ' + myInfor[key]);
// }
// //vòng for in có thể tách được object, array hay string
// //filter dùng để lọc dữ liệu ,trả về kiểu mảng
// //find dùng tương tự
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var filter = arr.filter(item => item >= 5);
// console.log(filter);
// let arr1 = [{ name: 'a', value: 1 }, { name: 'c', value: 2 }];
// var filter1 = arr1.filter(item => item.name === 'a');
// console.log(filter1);
// //map dùng để thao tác với dữ liệu một cách thoải mái, bằng cách map tự tạo ra một array mới
// var mapArr = arr.map(item => {
//   item = item * 2;
//   item = item - 1;
//   return item;
// })
// console.log(arr)
// console.log(mapArr);
// //reduce hoạt động giống như một vòng lặp, chưa hiểu lắm nhưng lấy vd tạm
// var reduceArr = arr.reduce(function (a, b) {
//   console.log(a + b);
//   return a + b;
// }, 10);
// console.log(reduceArr);
// làm việc với json
// var callback = (error, data) => {
//   if (error) {
//     console.log(error);
//   }
//   if (data) {
//     console.log(data);
//   }
// }
// function getTodos(callback) {
//   var request = new XMLHttpRequest();

//   request.onreadystatechange = function () {
//     if (request.readyState === 4 && request.status === 200) {
//       const data = JSON.parse(request.responseText);
//       callback(undefined, data);

//     } else if (request.readyState === 4 && request.status !== 200) {
//       callback("something went wrong", undefined);
//     }
//   };
//   request.open('GET', "data.json", true);
//   request.send();
// }

// làm việc với promises
// function getTodos() {
//   return new Promise((resolve, reject) => {
//     var request = new XMLHttpRequest();

//     request.onreadystatechange = function () {
//       if (request.readyState === 4 && request.status === 200) {
//         const data = JSON.parse(request.responseText);
//         resolve(data);
//       } else if (request.readyState === 4 && request.status !== 200) {
//         reject("something went wrong");
//       }
//     };
//     request.open('GET', "data.json", true);
//     request.send();
//   });
// }
// getTodos().then(data => {
//   console.log(data);
// }).catch(err => {
//   console.log(err);
// })
//lấy nhiều dữ liệu prommises
// function getTodos(id) {
//   return new Promise((resolve, reject) => {
//     var request = new XMLHttpRequest();

//     request.onreadystatechange = function () {
//       if (request.readyState === 4 && request.status === 200) {
//         const data = JSON.parse(request.responseText);
//         resolve(data);
//       } else if (request.readyState === 4 && request.status !== 200) {
//         reject("something went wrong");
//       }
//     };
//     request.open('GET', `https://jsonplaceholder.typicode.com/photos/${id}`, true);
//     request.send();
//   });
// }
// getTodos(1).then(data => {
//   console.log(data);
//   return getTodos(2);
// }).then(data2 => {
//   console.log(data2);
//   return getTodos(3);
// }).then(data3 => {
//   console.log(data3);
// })
//   .catch(err => {
//     console.log(err);
//   })
// async await Promise throw
// const getNewTodos = async (id) => {
//   let response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
//   if (response && response.status !== 200) {
//     throw new Error("something went wrong: " + response.status);
//   }
//   let data = response.json();
//   return data;
// }

// getNewTodos('asdfasdf').then(data => {
//   console.log(data);
// }).catch(err => {
//   console.log(err.message);
// });
//try catch
// const getNewTodos = async (id) => {
//   try {
//     let response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
//     if (response && response.status !== 200) {
//       throw new Error("something went wrong: " + response.status);
//     }
//     let data = response.json();
//     return data;
//   }
//   catch (err) {
//     console.log(err.message);
//   }
// }

// getNewTodos(1).then(data => {
//   console.log(data);
// });
//đơn giản hóa code
// let arr = [1, 2, 3, 4, 5];
// let arr1 = [-1, 0, ...arr, 6, 7];
// console.log(arr1);
// let status1 = {
//   name1: 'Quan',
//   age: '18'
// }
// let { name1, age } = status1;
// console.log(name1, age);
// let arr2 = ['quan', 'ha '];
// let [fname, lname] = arr2;
// console.log(fname, lname);
// let arr3 = [{ name: 'quan', age: 18 }, { name: 'tung', age: 17 }];
// let arr4 = [...arr3];
// console.log(arr4);
// let [name01,name02]=arr3;
// console.log(name01,name02);
//==================================================================================end of the js =======================================================================================