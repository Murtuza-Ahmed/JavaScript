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

// let grade = prompt("Enter The Grade");
// let lowGrade = grade.toLowerCase();
// let message;
// switch (lowGrade) {
//   case "a":
//     message = "Superb";
//     break;
//   case "b":
//   case "c":
//     message = "Your Passed";
//     break;
//   case "d":
//   case "e":
//     message = "Promotte";
//     break;
//   case "f":
//     message = "Your Field";
//     break;
//   default:
//     message = "Correct The Grade";
// }
// let finalResult = message;
// console.log(finalResult);

// let studentGrade = prompt("Apna Grade Batayen");
// let lowGrade = studentGrade.toLowerCase();
// let response;
// if (lowGrade === "a") {
//   response = "Excellent";
// } else if (lowGrade === "b" || lowGrade === "c") {
//   response = "Your Passed";
// } else if (lowGrade === "d" || lowGrade === "e") {
//   response = "Promotte";
// } else if (lowGrade === "f") {
//   response = "Your Field";
// } else {
//   response = "Correct The GRADE";
// }
// console.log(response);

// Define a dynamic number (you can change this value as needed)
// const dynamicNumber = 50;
// const userInput = prompt("Enter a number:");
// const userNumber = parseFloat(userInput);
// if (isNaN(userNumber)) {
//   console.log(Boolean(isNaN(userNumber)));
//   console.log("Invalid input. Please enter a valid number.");
// } else if (userNumber > dynamicNumber) {
//   console.log("The entered number is greater than the dynamic number.");
// } else if (userNumber < dynamicNumber) {
//   console.log("The entered number is less than the dynamic number.");
// } else {
//   console.log("The entered number is equal to the dynamic number.");
// }

// const dynamicNumber = 50;
// let userNumber = parseInt(prompt("ENTER THE NUMBER"));
// let message;
// if (isNaN(userNumber)) {
//   message = "Please Coreect The Valid Number";
// } else if (userNumber < dynamicNumber) {
//   message = "Apka Number Less Then He";
// } else if (userNumber > dynamicNumber) {
//   message = "Apka Number Greather Then He";
// } else {
//   message = "Apka Number BaraBar He";
// }
// console.log(message);

// let userFriend = prompt("Enter The Friend");
// let lowUserFriend = userFriend.toLowerCase();
// let response;
// switch (lowUserFriend) {
//   case "hamza":
//     response = true;
//     break;
//   case "umer":
//     response = true;
//     break;
//   case "zubair":
//     response = true;
//     break;
//   case "raza":
//     response = true;
//     break;
//   default:
//     response = false;
// }
// if (response) {
//   console.log("Your Friend");
// } else {
//   console.log("I Don't Know");
// }

// Step 1: Create an array for Rock, Paper, and Scissors
const choices = ["Rock", "Paper", "Scissors"];

// Step 2: Generate random selections for the player and computer
const playerIndex = Math.floor(Math.random() * 3); // 0, 1, or 2
const computerIndex = Math.floor(Math.random() * 3);

// Step 3: Create a variable to hold the response message
let resultMessage = "";

// Step 4: Handle player and computer selections
if (playerIndex === computerIndex) {
  resultMessage = "It's a tie!";
} else {
  // Step 5: Apply game logic
  if (
    (playerIndex === 0 && computerIndex === 2) ||
    (playerIndex === 1 && computerIndex === 0) ||
    (playerIndex === 2 && computerIndex === 1)
  ) {
    resultMessage = "You win!";
  } else {
    resultMessage = "Computer wins!";
  }
}

// Step 6: Create an output message
const playerChoice = choices[playerIndex];
const computerChoice = choices[computerIndex];
const outputMessage = `Player chose ${playerChoice}, Computer chose ${computerChoice}. ${resultMessage}`;

// Output the result to the console
console.log(outputMessage);

// const choices = ["Rock", "Paper", "Scissors"];
// let playerIndex = Math.floor(Math.random() * 3);
// let computerIndex = Math.floor(Math.random() * 3);
// let message = "";
// if (playerIndex === computerIndex) {
//   message = "Game it's Tie";
// } else if (
//   (playerIndex === 0 && computerIndex === 2) ||
//   (playerIndex === 1 && computerIndex === 0) ||
//   (playerIndex === 2 && computerIndex === 1)
// ) {
//   message = "You Win*";
// } else {
//   message = "Computer is Win!";
// }
// let playerChoice = choices[playerIndex];
// let computerChoice = choices[computerIndex];
// let outputMessage = `player Chose ${playerIndex}, Computer Chose ${computerIndex}. ${message}`;
// console.log(outputMessage);
