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

function age() {
    let userAge = parseInt(prompt("Enter The AGE"));
    const age = 18;
    let result;
    let matchAge =
    userAge <= age
    ? (result = "Sorry Under Age 18")
    : (result = "Hello Have A Nice Day");
    console.log(result);
}