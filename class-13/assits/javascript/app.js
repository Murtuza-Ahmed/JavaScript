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
