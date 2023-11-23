// // Step 1
// console.log("1. Value of PI:", Math.PI);
// console.log("2. Ceil:", Math.ceil(5.7));
// console.log("   Floor:", Math.floor(5.7));
// console.log("   Round:", Math.round(5.7));
// console.log("3. Random value:", Math.random());
// console.log("4. Random value from 0 to 10:", Math.floor(Math.random() * 11));
// console.log(
//   "5. Random value from 1 to 10:",
//   Math.floor(Math.random() * 10) + 1
// );
// console.log(
//   "6. Random value from 1 to 100:",
//   Math.floor(Math.random() * 100) + 1
// );
// function generateRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log("7. Generate random numbers from 1 to 100 (100 times):");
// for (let i = 0; i < 100; i++) {
//   console.log("   ", generateRandomNumber(1, 100));
// }

// const myDate = new Date("2023-11-23");
// console.log(myDate);
// const monthsArray = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
// const day = myDate.getDate();
// console.log(day);
// const year = myDate.getFullYear();
// console.log("4. Year:", year);
// const monthIndex = myDate.getMonth();
// console.log("5. Month Index:", monthIndex);
// const monthName = monthsArray[monthIndex];
// console.log("6. Month Name:", monthName);
// const adjustedMonthIndex = monthIndex + 1;
// console.log("7. Full Date:", day + " " + monthName + " " + year);

let d = new Date();
console.log(d.getTime);
console.log(d.getFullYear);
