// Step 1
console.log("Value of PI:", Math.PI);
console.log("Ceil:", Math.ceil(5.7));
console.log("Floor:", Math.floor(5.7));
console.log("Round:", Math.round(5.7));
console.log("Random value:", Math.random());
console.log("Random value from 0 to 10:", Math.floor(Math.random() * 11));
console.log(
    "5. Random value from 1 to 10:",
    Math.floor(Math.random() * 10) + 1
);
console.log(
    "6. Random value from 1 to 100:",
    Math.floor(Math.random() * 100) + 1
);
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("7. Generate random numbers from 1 to 100 (100 times):");
for (let i = 0; i < 100; i++) {
    console.log("   ", generateRandomNumber(1, 100));
}

const myDate = new Date("2023-11-23");
console.log(myDate);
const monthsArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const day = myDate.getDate();
console.log("Day:", day);
const year = myDate.getFullYear();
console.log("Year:", year);
const monthIndex = myDate.getMonth();
console.log("Month Index:", monthIndex);
const monthName = monthsArray[monthIndex];
console.log("Month Name:", monthName);
const adjustedMonthIndex = monthIndex + 1;
console.log("Full Date:", day + " " + monthName + " " + year);

let d = new Date();
console.log(d.getTime);
console.log(d.getFullYear);

const arr = ["Hi", "world", "hello", "Hii", "hi", "hi World", "Hi"];
let arr2 = arr.filter((element, index) => {
    const ele2 = element.substring(0, 2);
    return ele2 == "hi";
});
console.log(arr2.join());

function go(e) {
    eval(e.value);
}

let caps = "HI HOW ARE YOU?";
let fixed_caps = caps.toLowerCase();
let first_capital = fixed_caps.charAt(0).toUpperCase().concat(fixed_caps.slice(1));
console.log(first_capital);

let lowStr = "I Love JavaScript";
lowStr = lowStr.toLowerCase();
let vowelsArr = ["a", "e", "i", "o", "u"];
for (let i = 0; i < vowelsArr.length; i++) {
    lowStr = lowStr.replaceAll(vowelsArr[i], i);
}
console.log(lowStr);

var arrNum = [1, 2, 3, 4, 5];
let mappedArr = arrNum.map((x) => {
    return x * 2;
})
console.log(mappedArr);

let friendArr = ["murtuza", "umer", "umer", "raza", "murtuza", "zubair", "zubair", "hamza", "raza", "hamza"];
let filArr = friendArr.filter((value, index, array) => {
    return value, index, array.indexOf(value) === index;
})
console.log(filArr);

let arrFill = friendArr.filter((value, index) => {
    return value, index, friendArr.indexOf(value) === index;
})
console.log(arrFill)