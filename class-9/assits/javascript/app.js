// let randomNumber = Math.floor(Math.random() * 6);
// console.log(randomNumber);
// let answer = "Some thing what Wrong";
// let output = prompt("Ask me any thing");

// let activity = "Dinner";
// if (activity === "Get Up") {
//     console.log("It's 8:00 AM");
// } else if (activity === "Brak fast") {
//     console.log("9:00 AM");
// } else if (activity === "My Work end") {
//     console.log("it's 12:00 Pm");
// } else if (activity === "Dinner") {
//     console.log("2:30PM");
// } else if (activity === "Day Sleep") {
//     console.log("3:00 pm time")
// } else {
//     console.log("No But Try");
// }
// console.log(activity);

// let activity = "sleep";
// switch (activity) {
//     case "get up":
//         console.log("it's 8:00 am");
//         break;
//     case "break fast":
//         console.log("it's 9:00 am");
//         break;
//     case "my paractice work":
//         console.log("it's 12:00 pm");
//         break;
//     case "dinner":
//         console.log("it's 2:30pm");
//         break;
//     case "sleep day":
//         console.log("it's 3:00 pm");
//         break;
//     default:
//         console.log("no but try");
// }
// console.log(activity);

// let randomNumber = Math.floor(Math.random() * 10);
// console.log(randomNumber);

// let randomNumber = Math.random() * 10;
// floorNumber = Math.floor(randomNumber);
// let userInput = prompt("Ask me any Thing");
// let message;
// let message1 = "So WellCome";
// switch (floorNumber) {
//     case 0:
//         message = "you loser";
//         break;
//     case 2:
//         message = "you lose";
//         break;
//     case 3:
//         message = "you loss";
//         break;
//     case 4:
//         message = "you won";
//         break;
//     case 5:
//         message = "you win";
//         break;
//     case 6:
//         message = "excellent";
//         break;
//     default:
//         message = "losser no entry";
// }
// console.log(`${message1} ${userInput} ${message} ${floorNumber}`);

// Step 1: Generate a random number between 0 and 5
// var randomNumber = Math.floor(Math.random() * 6);

// Step 2: Get user input using a prompt
// var userQuestion = prompt("Ask a question:");

// // Step 3: Create 6 responses using a switch statement
// var response;
// switch (randomNumber) {
//   case 0:
//     response = "It is certain.";
//     break;
//   case 1:
//     response = "Reply hazy, try again.";
//     break;
//   case 2:
//     response = "Don't count on it.";
//     break;
//   case 3:
//     response = "Outlook not so good.";
//     break;
//   case 4:
//     response = "Signs point to yes.";
//     break;
//   case 5:
//     response = "My sources say no.";
//     break;
//   default:
//     response = "Sorry, I can't answer that.";
//     break;
// }

// // Step 4: Create the final response
// var finalResponse = "You asked: " + userQuestion + "\nMagic 8-Ball says: " + response;

// // Step 5: Output the original question and the response to the console
// console.log(finalResponse);

let userInput = +prompt("Enter the NUMBER", 0);
let randomNumber = Math.random() * 10;
randomNumber = Math.floor(randomNumber);
let response;
if (userInput === randomNumber) {
    response = "you win";
} else {
    response = "you lose";
}
let finalResponse = `Genrate the Number ${randomNumber} ${response} Your Number ${userInput}`;
console.log(finalResponse);