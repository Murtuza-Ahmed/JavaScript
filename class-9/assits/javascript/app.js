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

// let userInput = +prompt("Enter the NUMBER", 0);
// let randomNumber = Math.random() * 10;
// randomNumber = Math.floor(randomNumber);
// let response;
// if (userInput === randomNumber) {
//     response = "you win";
// } else {
//     response = "you lose";
// }
// let finalResponse = `Genrate the Number ${randomNumber} ${response} Your Number ${userInput}`;
// console.log(finalResponse);

// let grade = prompt("Enter GRADE");
// let response;
// switch (grade) {
//     case "F":
//     case "D":
//         response = "You'v Field";
//         break;
//     case "C":
//     case "B":
//         response = "PASSED";
//         break;
//     case "A":
//         response = "EXCELLENT";
//         break;
//     default:
//         response = "NO ENTRY";
// }
// let finalGrade = `Your MARKS ${grade} ${response}`;
// console.log(finalGrade);

// let grade = prompt("Enter GRADE");
// if (grade === "A") {
//     console.log("Your Excellent");
// } else if (grade === "B" || grade === "C") {
//     console.log("Your Passed");
// } else if (grade === "D" || grade === "E") {
//     console.log("Your Promote");
// } else if (grade === "F") {
//     console.log("Your Field");
// } else {
//     console.log("Enter Grade");
// }
// console.log(grade);

// let prize;
// let userChoice = prompt("Apna inam darj karen, 0 se 10 ke darmiyan ek number chunen:");
// userChoice = parseInt(userChoice);
// let outputMessage = "Meri Intikhab: ";
// switch (userChoice) {
//     case 0:
//         prize = "Kuch nahi, kismat phir se azmao!";
//         break;
//     case 1:
//         prize = "Choti inaam: Ek chota toffee milega.";
//         break;
//     case 2:
//         prize = "Choti inaam: Ek chocolate bar milega.";
//         break;
//     case 3:
//         prize = "Choti inaam: Ek pensil set milega.";
//         break;
//     case 4:
//         prize = "Bada inaam: Ek coloring book milega.";
//         break;
//     case 5:
//         prize = "Bada inaam: Ek board game milega.";
//         break;
//     case 6:
//         prize = "Bada inaam: Ek remote control car milega.";
//         break;
//     case 7:
//         prize = "Bada inaam: Ek bicycle milegi.";
//         break;
//     case 8:
//         prize = "Bada inaam: Ek video game console milega.";
//         break;
//     case 9:
//         prize = "Bada inaam: Ek laptop milega.";
//         break;
//     case 10:
//         prize = "Jitna bada inaam: Ek luxury vacation for two milega!";
//         break;
//     default:
//         prize = "Kuch nahi, kismat phir se azmao!";
// }
// console.log(outputMessage + prize);

// let prize = parseInt(prompt("Enter the Number 0 OR 10"));
// let outPut = "Apka INAM: ";
// let message;
// switch (prize) {
//     case 0:
//         message = "Khali, Phir Se Kosish Karen";
//         console.log("khali");
//         break;
//     case 1:
//         message = "Ek DaryMilk Cocolate Mile Ga";
//         break;
//     case 2:
//         message = "Ek Fanta Ka Bottle Mile Ga";
//         break;
//     case 3:
//         message = "Ek Cocolate Ka Dabba Mile Ga";
//         break;
//     case 4:
//         message = "Ek Senima Ticket Mile Ga";
//         break;
//     case 5:
//         message = "Apko Shadi Kylye Ek Larki Mile Gi";
//         break;
//     case 6:
//         message = "Ek Pancil Box OR Geometry Box Mile Ga";
//         break;
//     case 7:
//         message = "Ek Mheran Car Mile Ga";
//         break;
//     case 8:
//         message = "Ek Flat Mile Ga";
//         break;
//     case 9:
//         message = "Khali, Apni Qismat Phir se Azmayen";
//         break;
//     case 10:
//         message = "Apka LandCrusior Nikla He, Khawab Me";
//         break;
//     default:
//         message = "Phit Se Kosish Karen";
//         break;
// }
// let finalPrize = `${outPut} ${message}`;
// console.log(finalPrize);

// let userNumber = parseFloat(prompt("Enter the Number"));
// let dynamicNumber = Math.floor(Math.random() * 100) + 1;
// let response;
// if (userNumber > dynamicNumber) {
//     response = "Apka Number Code Ke Number Se Bara He";
// } else if (userNumber < dynamicNumber) {
//     response = "Apka Number Code Ke Number Se Chota He";
// } else {
//     response = "Apka Number Code Ke Number Ke Bara Bar He";
// }
// console.log(response);

// let userInput = parseInt(prompt("Enter the Number 1 OR 100"));
// let dynamicNumber = Math.floor(Math.random() * 100) + 1;
// let message;
// if (userInput < dynamicNumber) {
//   message = "Apka Number is Number se Chota he";
// } else if (userInput === dynamicNumber) {
//   message = "Apka Number is Number se Baara Bar He";
// } else if (userInput > dynamicNumber) {
//   message = "Apka Number is Number se Baara He";
// } else {
//   message = "Apka Number Kisi Bi Number se Match Nahi karta";
// }
// let finalInput = `UserNumber ${userInput} ${message} ComputerNumber ${dynamicNumber}`;
// console.log(finalInput);

// let idValue = false;
// let valueCheck = idValue ? "ID is OK" : "ID is not OK";
// console.log(valueCheck);

let randomNumber = Math.random();
randomNumber = Math.floor(Math.random() * 10);
console.log(randomNumber);
let userInput = prompt("Enter your 8-Ball Choice");
let message;
switch(randomNumber){
  case 0:
    message="Khali he Phir se kosish karen";
    break;
    case 1:
      
}