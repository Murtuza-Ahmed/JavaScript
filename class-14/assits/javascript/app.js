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
let userName = prompt("Enter the Name");
let userAge = +prompt("Enter the Age");
let userEmail = prompt("Enter the Email");
userInput(userName, userAge, userEmail);
console.log(userArray);
