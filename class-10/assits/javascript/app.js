// let i = 0;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// let a = 10;
// while (a >= 0) {
//     console.log(a);
//     a--;
// }

// let i = 10;
// let randomNumber = Math.floor(Math.random() * i) + 1;
// console.log(randomNumber);
// let answer = true;
// while (answer) {
//     let userInput = parseFloat(prompt("Gases the Number"));
//     if (userInput === randomNumber) {
//         console.log("poor");
//         answer = false;
//     } else {
//         console.log("Try Again");
//         answer = false;
//     }
// }

// let i = 0;
// let step = 5;
// do {
//     console.log("hello" + i);
//     i += step;
// } while (i < 100);

// function getFullDate(...parameters) {
//     let getting, lengthArgs = parameters.length;
//     if (lengthArgs >= 2 || lengthArgs <= 7) {
//         getting = new Date(...parameters);
//         return getting.getTime();
//     } else if (lengthArgs === 1) {
//         let num = Number(parameters)
//         getting = new Date(num);
//         return getting.toString();
//     } else {
//         const CD = new Date();
//         let fullDate = `${CD.getFullYear()}-${CD.getMonth()}-${CD.getDate()}`;
//         return fullDate
//     }
// }
// console.log(getFullDate(2023, 6, 20, 10));
// console.log(getFullDate(372648725323));
// console.log(getFullDate());

let grade = prompt("Enter The Grade");
let lowGrade = grade.toLowerCase();
let message;
switch (lowGrade) {
  case "a":
    message = "Superb";
    break;
  case "b":
  case "c":
    message = "Your Passed";
    break;
  case "d":
  case "e":
    message = "Promotte";
    break;
  case "f":
    message = "Your Field";
    break;
  default:
    message = "Correct The Grade";
}
let finalResult = message;
console.log(finalResult);
