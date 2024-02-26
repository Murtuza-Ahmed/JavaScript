function customFunction() {
  alert("This is Custom alert!");
}

function reveal(m) {
  console.log(m);
}

// function hello() {
//   let user = prompt("What's Your Name");
//   console.log(`Hello ${user}!`);
// }
// hello();

let sayHello = function () {
  let inFunction = "I'm in a Sheroz";
  console.log(`Hello ${inFunction}`);
};
sayHello();
sayHello();

function taster(e, j) {
  // return i + " " + i;
  console.log(e, j);
}
let e = 2;
let j = 5;
taster(e + j);

let userArray = [];
function userInput(name, age, email) {
  let finnal = `name: ${name}  Age: ${age}  Email: ${email}`;
  userArray.push({ finnal });
  // console.log(finnal);
}
function userInputCall() {
  let userName = prompt("Enter the Name");
  let userNameLower = userName.toLowerCase();
  let userAge = +prompt("Enter the Age");
  let userEmail = prompt("Enter the Email");
  userInput(userNameLower, userAge, userEmail);
}
console.log(userArray);

function paractice(para, para1) {
  return para + para1;
}
let a = 10;
let b = 5;
let result = paractice(a, b);
console.log(result);
let i = 20;
let s = 10;
let result1 = paractice(i, s);
console.log(result1);

let descriptive = [
  "exellent",
  "super",
  "poor",
  "good",
  "bad",
  "prompte",
  "creative",
  "beutifull",
  "inovative",
];
function user() {
  let userName = prompt("Enter the Name");
  let rondomArray = Math.floor(Math.random() * descriptive.length);
  let finalRondom = descriptive[rondomArray];
  let finalAnswer = `Name: ${userName} Descrriptive: ${finalRondom}`;
  console.log(finalAnswer);
  // console.log(y);
}

// var num = 10;
// var num1 = 20;
// var operator = "+";
// function arrowFunction(value = 1, value1 = 1, operation) {
//   if (operation === "-") {
//     return value - value1;
//   } else if (operation === "+") {
//     return value + value1;
//   } else {
//     return value + value1;
//   }
// }
// console.log("Result with operator +:", arrowFunction(num, num1, operator));
// operator = "-";
// console.log("Result with operator -:", arrowFunction(num, num1, operator));

// Misal array
var numbers = [1, 2, 3, 4, 5];

// forEach istemal kar ke har element ko print karna
numbers.forEach(function (number, index) {
  console.log("Index " + index + " par element: " + number);
});

const arrayFriend = ["Hamza", "Umer", "Zubair", "Murtuza", "Raza"];
arrayFriend.forEach((e) => console.log(e));

let arr = ["My Name Is"];
let arr1 = [...(arr + "Sheroz")];
let arr2 = [...arr, "Sheroz"];
console.log(arr);
console.log(arr1);
console.log(arr2);

function addFourNumber(a, b, c, d) {
  // return a + b, c + d;
  console.log(a + b, c + d);
}
let arrNum = [10, 20];
let numArr = [5, 5];
addFourNumber(...arrNum, ...numArr);

function friend(a, ...b) {
  console.log(a, b);
}
friend("umer", "hamza", "raza", "sheroz");

let syHi = (a, b, ...c) => console.log(a, b, c);
syHi("Hello", "Murtuza", "my Name", "is sheroz", "and", "you");

// CALCULATOR CONDITION
// let contaningNumber = +prompt("Enter the Number");
// let contaningNumber1 = +prompt("Enter the NUmber");
// let operator = prompt("Enter the + | - | * | %");
// let arrowFunction = (value, value1, operation1) => {
//   if (operation1 === "-") {
//     return value - value1;
//     // console.log(value - value1);
//   } else if (operation1 === "+") {
//     return value + value1;
//     // console.log(value + value1);
//   } else if (operation1 === "*") {
//     return value * value1;
//     // console.log(value * value1);
//   } else if (operation1 === "%") {
//     return value % value1;
//   } else {
//     console.log("Please Check");
//   }
// };
// let finnal = arrowFunction(contaningNumber, contaningNumber1, operator);
// console.log(finnal);
// arrowFunction(contaningNumber, contaningNumber1, operator);

let calculatorArray = [];
for (let i = 1; i <= 10; i++) {
  let value = i * 5;
  let value1 = i * i;
  let arrFun = (value, value1) => {
    return value + value1;
  };
  let storeReturn = arrFun(value, value1);
  calculatorArray.push(storeReturn);
}
console.log(calculatorArray);

let resultArray = [];
for (let i = 1; i < 10; i++) {
  let result = (i, 2 * i);
  resultArray.push(result);
}
console.log(resultArray);

// IIFE immediately invoked function expression
(function () {
  alert("Hello!");
})();
(() => {
  alert("Hello! RAZA");
})();

// Recursive functions
function recursiveFunction(e) {
  console.log(e);
  if (e <= 10) {
    recursiveFunction(++e);
  }
}
recursiveFunction(10);

// Nested functions
function doOuterFunctionStuff(nr) {
  console.log("Outer function");
  doInnerFunctionStuff(nr);
  function doInnerFunctionStuff(x) {
    console.log(x + 7);
    console.log("I can access outer variables:", nr);
  }
}
doOuterFunctionStuff(2);
