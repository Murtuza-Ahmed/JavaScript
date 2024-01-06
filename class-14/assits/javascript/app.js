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
  let userAge = +prompt("Enter the Age");
  let userEmail = prompt("Enter the Email");
  userInput(userName, userAge, userEmail);
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
