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

let userFriends = prompt("Enter The Name");
let friendHere = userFriends.toLowerCase()
console.log(friendHere);
let nameArray = ["Hamza", "Umer", "Zubair", "Murtuza"];
let notFound = true;
while (notFound && nameArray.length > 0) {
  if (nameArray[0] === friendHere) {
    console.log("Found her!");
    notFound = false;
  } else {
    nameArray.shift();
  }
}
