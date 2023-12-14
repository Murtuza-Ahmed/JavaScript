// const myWork = [];
// for (let i = 1; i <= 10; i++) {
//   const lessonName = `Lesson ${i}`;
//   const isRunningThisYear = i % 2 === 0 ? true : false;
//   const tempLesson = {
//     name: lessonName,
//     status: isRunningThisYear,
//   };
//   myWork.push(tempLesson);
// }
// console.log(myWork);

// let arrOfArrays = [];
// for (let i = 0; i < 2; i++) {
//   arrOfArrays.push([]);
//   for (let j = 0; j < 3; j++) {
//     arrOfArrays[i].push(j);
//   }
// }
// // console.log(arrOfArrays);
// console.table(arrOfArrays);

// let bool = true;
// console.log(bool);
// if (!bool) {
//   console.log("Open the Umbrella");
// } else {
//   console.log("Close the Umbrella");
// }

// let userAge = +prompt("Enter Your Age");
// let age = 18;
// let message;
// // console.log(userAge <= age);
// if (userAge <= age) {
//   message = "Under Age 18 Not Allowed";
// } else {
//   message = "18+ you Allowed";
// }
// console.log(`${message} Your Age ${userAge}`);

// let userAge = +prompt("Enter The Age");
// let message;
// if (userAge >= 30) {
//   message = "Apni Shete Ka Khyala karen Alcohol na Piye";
// } else if (userAge >= 25) {
//   message = "Apki Umer Nai He Alcohol Pine Ki";
// } else if (userAge >= 20) {
//   message = "Apni Zindagi ka Kahyal Karen";
// } else {
//   message = "Ap Abi Bache Hn";
// }
// console.log(message);

// function age() {
//   let userAge = parseInt(prompt("Enter The AGE"));
//   const age = 18;
//   let result;
//   userAge <= age
//     ? (result = "Sorry Under Age 18")
//     : (result = "Hello Have A Nice Day");
//   console.log(result);
// }

// function game() {
//   let userGameAge = +prompt("Enter The AGE");
//   let age = 17;
//   let cost;
//   let message;
//   if (userGameAge <= age) {
//     cost = 0;
//     message = "Sorry Under AGE 18";
//   } else if (userGameAge <= 18 || userGameAge <= 20) {
//     cost = 2;
//     message = "Metal Sulg Enjoye Your Game";
//   } else if (userGameAge <= 22 || userGameAge <= 24) {
//     cost = 4;
//     message = "PUBG Enjoye Your Game";
//   } else if (userGameAge <= 26 || userGameAge <= 28) {
//     cost = 6;
//     message = "Free Fire Enjoye Your Game";
//   } else {
//     cost = 8;
//     message = "GTA Enjoye Your Game";
//   }
//   let finalMessage = `${message} Your Age ${userGameAge} cost:${cost}`;
//   console.log(finalMessage);
// }

// let rondomNumber = Math.floor(Math.random() * 8);
// let userInput = prompt("Enter Your Number");
// let message;
// switch (rondomNumber) {
//   case 0 && userInput:
//     message = "phir se kosish karen";
//     break;
//   case 1 && userInput:
//     message = "mheran car";
//     break;
//   case 2 && userInput:
//     message = "cultas car";
//     break;
//   case 3 && userInput:
//     message = "carolla car";
//     break;
//   case 4 && userInput:
//     message = "civic car";
//     break;
//   case 5 && userInput:
//     message = "dubble dor";
//     break;
//   case 6 && userInput:
//     message = "land crusior";
//     break;
//   case 7 && userInput:
//     message = "BMW car";
//     break;
//   default:
//     message = "khali card";
//     break;
// }
// let finalMessage = `${message} MyNumber ${rondomNumber} YourInput ${userInput}`;
// console.log(finalMessage);

// let prize = Math.floor(Math.random() * 10);
// let userInput = +prompt("Enter The Number");
// let result;
// switch (prize) {
//   case 0:
//     result = "Khali Jaan";
//     break;
//   case 1:
//   case 2:
//     result = "BMW car";
//     break;
//   case 3:
//   case 4:
//     result = "civic car";
//     break;
//   case 5:
//   case 6:
//     result = "corolla car";
//     break;
//   case 7:
//   case 8:
//     result = "dubble dor";
//     break;
//   case 9:
//   case 10:
//     result = "land crusior";
//     break;
//   default:
//     result = "under age 18";
//     break;
// }
// let finalRequest = `${result} prize: ${prize} Input ${userInput}`;
// console.log(finalRequest);

// let number = Math.random() * 6;
// floorNumber = Math.floor(number);
// // console.log(floorNumber);
// let userInput = +prompt("Enter The Number");
// let responsive;
// if (floorNumber <= 0) {
//   responsive = "Khali Number";
// } else if (floorNumber <= 1 && floorNumber <= 2) {
//   responsive = "FX car";
// } else if (floorNumber <= 3 && floorNumber <= 4) {
//   responsive = "civic car";
// } else if (floorNumber <= 5) {
//   responsive = "carolla car";
// } else if (floorNumber <= 6) {
//   responsive = "mheran car";
// } else {
//   responsive = "under age 18";
// }
// let finalRequest = `${responsive} MyNumber:${floorNumber} YourNumber:${userInput}`;
// console.log(finalRequest);

let dynamicNumber = Math.floor(Math.random() * 10) + 1;
let userInput = +prompt("Enter The Number");
let message;
dynamicNumber >= userInput
  ? (message = "Apka Number Chotta He")
  : (message = "Apka Number Bara He");
let finalRequest = `GenrateNumber:${dynamicNumber} Input:${userInput} ${message}`;
console.log(finalRequest);
