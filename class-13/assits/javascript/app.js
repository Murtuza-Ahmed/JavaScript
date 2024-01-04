// var descriptiveWords = ["beautiful", "excellent", "super"];
// function randomNameDescription() {
//   let name = prompt("Please enter a name:");
//   return name;
// }
// function getRandomDescription() {
//   let randomIndex = Math.floor(Math.random() * descriptiveWords.length);
//   return descriptiveWords[randomIndex];
// }
// function describeRandomName() {
//   let name = randomNameDescription();
//   let description = getRandomDescription();
//   console.log("The name you entered: " + name);
//   console.log("Random description: " + description);
// }
// describeRandomName();

// let sayHi = () => console.log("hi");
// sayHi();

// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// let userFriends = prompt("Enter The Name");
// let friendHere = userFriends.toLowerCase();
// console.log(friendHere);
// let nameArray = ["Hamza", "Umer", "Zubair", "Murtuza"];
// let notFound = true;
// while (notFound && nameArray.length > 0) {
//   if (nameArray[0] === friendHere) {
//     console.log("Found her!");
//     notFound = false;
//   } else {
//     nameArray.shift();
//   }
// }

// let maxNumber = 10;
// let genrateNumber = Math.floor(Math.random() * maxNumber + 1);
// let isCorrect = false;
// while (!isCorrect) {
//   let userNumber = +prompt(`Enter The Number! ${maxNumber}`);
//   if (userNumber === genrateNumber) {
//     isCorrect = true;
//     console.log("Congrulation! Your Guess is Correct!");
//   } else if (userNumber > genrateNumber) {
//     console.log("To High! Try Again");
//   } else {
//   }
// }

// let tableNumber = +prompt("Enter Table Number");
// let message;
// for (let i = 1; i <= 10; i++) {
//   // console.log(tableNumber, "x", i, "=", tableNumber * i);
//   message = `${tableNumber} x ${i} = ${tableNumber * i}`;
//   console.log(message);
// }

// window.onload = table();
function table() {
  let table = +prompt("Enter Number");
  let tableResults = "";
  for (let i = 1; i <= 10; i++) {
    let tableResult = `${table} x ${i} = ${table * i}`;
    console.log(tableResult);
    tableResults += tableResult + "\n";
    document.getElementById("table").innerText = tableResults;
  }
}

// let number = 100;
// for (number; number > 1; number--) {
//   console.log(number);
// }

let array = [
  50, 55, 69, 87, 89, 90, 45, 90, 95, 97, 85, 75, 77, 56, 86, 69, 60, 60, 69,
  60, 40, 45, 49, 50, 30, 39, 41, 44, 50, 55, 69, 87, 89, 90, 45, 90, 95, 97,
  85, 75, 77, 56, 86, 69, 60, 60, 69, 60, 40, 45, 49, 50, 30, 39, 41, 44,
];
let arrNumber = 0;
let message = {};
// for (arrNumber; arrNumber < array.length; arrNumber++) {
//   if (array[arrNumber] > 90) {
//     console.log("Excellent");
//   } else if (array[arrNumber] > 80) {
//     console.log("Super");
//   } else if (array[arrNumber] > 70) {
//     console.log("Good");
//   } else if (array[arrNumber] > 60) {
//     console.log("Promotte");
//   } else if (array[arrNumber] < 40) {
//     console.log("Feild");
//   } else {
//     console.log("Try Number");
//   }
// }

// for (arrNumber; arrNumber < array.length; arrNumber++) {
//   switch (true) {
//     case array[arrNumber] < 90:
//       message = "Superb";
//       break;
//     case array[arrNumber] < 80:
//       message = "Very Excellent";
//       break;
//     case arrNumber[arrNumber] < 70:
//       message = "Very Good";
//       break;
//     case array[arrNumber]:
//       message = "Better";
//       break;
//     case array[arrNumber] < 60:
//       message = "Promotte";
//       break;
//     case array[arrNumber] < 50:
//       message = "Feild";
//       break;
//     default:
//       message = "Try Again";
//   }
//   let finalResult = `${message} student ${arrNumber}`;
//   console.log(finalResult);
// }

// let myWork = [];
// for (let i = 1; i <= 10; i++) {
//   let statusbar = i % 2 === 0 ? true : false;
//   let lesson = {
//     name: "lesson" + i,
//     statusbar: statusbar,
//   };
//   myWork.push(lesson);
// }
// console.log(myWork);

// for (let i = 0; i <= 5; i++) {
//   console.log("I VALUE", i);
//   for (let e = 0; e <= 5; e++) {
//     console.log("E VALUE", e);
//   }
// }

// let blankArray = [];
// for (let i = 0; 1 < 5; i++) {
//   blankArray.push([]);
//   for (let e = 0; e < 10; e++) {
//     blankArray[i].push(e);
//   }
// }
// console.log(blankArray);

// let arrOfArrays = [];
// for (let i = 0; i < 3; i++) {
//   arrOfArrays.push([]);
//   for (let j = 0; j < 7; j++) {
//     arrOfArrays[i].push(j);
//   }
// }
// console.log(arrOfArrays);

// let number = 0;
// while (number < 5) {
//   console.log("hello", number);
//   number++;
// }

// let userFriends = prompt("Enter The Name");
// let friendHere = userFriends.toLowerCase();
// console.log(friendHere);
// let nameArray = ["Hamza", "Umer", "Zubair", "Murtuza"];
// let notFound = true;
// while (notFound && nameArray.length > 0) {
//   if (nameArray[0] === "Zubair") {
//     console.log("Found her!");
//     notFound = false;
//   } else {
//     nameArray.shift();
//   }
// }
// console.log(nameArray);

// let num = 1;
// let mun = 2;
// let temp;
// let fiboArray = [];
// while (fiboArray.length < 25) {
//   fiboArray.push(num);
//   temp = num + mun;
//   num = mun;
//   mun = temp;
// }
// console.log(temp);
// console.log(fiboArray);
