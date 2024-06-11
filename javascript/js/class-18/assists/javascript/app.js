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

// let userNumber = parseInt(prompt("Enter The Number"));
function checkNumber(val) {
    try {
        if (isNaN(val)) {
            throw console.log("Not a Number");
        } else {
            throw console.log("Got a Number");
        }
    }
    catch (error) {
        console.log(`Erroe Mrssage: ${error}`);
    } finally {
        console.log("Function Compelte:", val);
    }
}
checkNumber(2);

// let message = "Hello Storge!";
// localStorage.setItem("value", message);
// let stg = localStorage.getItem("value");
// console.log(stg);
// console.log(localStorage.getItem("string"));
// console.log(window.localStorage.key(1));

function save() {
    let userNameSave = prompt("Enter The Name");
    try {
        if (typeof userNameSave !== "string") {
            throw alert("Please Enter Your Name");
        }
    } catch (error) {
        throw alert("message:", error);
    }
    let userNameSmall = userNameSave.toLowerCase();
    let key = Math.floor(Math.random() * 100) + 1;
    localStorage.setItem(key, userNameSmall);
}