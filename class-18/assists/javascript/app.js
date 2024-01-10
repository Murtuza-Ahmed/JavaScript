"use strict";

let val = 5;

function adder() {
    let counter = val;
    for (let i = 0; i < val; i++) {
        counter++;
    }
    return counter;
}
val += adder();
val += adder();
val += adder();
val += adder();
console.log(val);

// let userNumber = +prompt("Enter The Number");
// let userNumber1 = +prompt("Enter The Number");
// function addNumber(a, b) {
//     if (typeof a !== "number") {
//         throw alert("Please Enter Number");
//     } if (typeof b !== "number") {
//         throw alert("Please Correct Number");
//     }
//     return a + b;
// }
// try {
//     console.log(addNumber(2, 4));

// } catch (e) {
//     alert(e)
// }

// let valUserNumber = +prompt("Enter the NUmber");
// function checkNumber(val) {
//     try {
//         if (isNaN(val)) {
//             throw new Error("Not a number");
//         } else {
//             console.log("Got a number");
//         }
//     } catch (error) {
//         console.error("Error:", error.message);
//     } finally {
//         console.log("Function completed. Value of val:", val);
//     }
// }
// checkNumber(valUserNumber);
