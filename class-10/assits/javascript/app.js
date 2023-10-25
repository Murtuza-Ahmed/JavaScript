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

let i = 10;
let randomNumber = Math.floor(Math.random() * i) + 1;
console.log(randomNumber);
let answer = true;
while (answer) {
    let userInput = parseFloat(prompt("Gases the Number"));
    if (userInput === randomNumber) {
        console.log("Excllent");
        answer = false;
    } else {
        console.log("Try Again");
        answer = false;
    }
}