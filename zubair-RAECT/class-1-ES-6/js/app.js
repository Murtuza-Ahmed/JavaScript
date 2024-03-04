function checkScopeVar(love) {
    if (love) {
        var fullName = "Sheroz"
        var lastName = "Sheikh"
        console.log("My Name is" + fullName + " " + lastName)
    }
    console.log("My Name is" + lastName + " " + fullName)
}
checkScopeVar(true);

function checkScopeLet(love) {
    if (love) {
        let fullName = "Raza"
        const lastName = "Ahmed"
        console.log("My name is" + fullName + " " + lastName)
    }
    // console.log("My name is" + fullName + " " + lastName)
}
checkScopeLet(true);

/**
 * TEMPLATE LETERALS 
 */

// =============EC5================
let fName = "abc";
let lNAme = "def";
console.log("My name is" + fName + " " + lNAme);

// =============EC6=================
let fulName = "abc";
let lasNAme = "def";
console.log(`My name is ${fulName} ${lasNAme}`);

/**
 * RESTPARAMETER
 */

// ============EC5==========
// function sum(a, b) {
//     console.log(a, b);
// }
// sum(1, 2, 3, 4, 5);

// ================EC6=================
function fun(a, b, ...c) {
    console.log(`${a} ${b}`);
    console.log(c);
    console.log(c[2]);
    console.log(c.length);
    console.log(c.indexOf("hockey"))
}
fun("circket", "football", "basketball", "hockey", "racegame");

/**
 * SPREAD PARAMETER
 */

function sum(a, b, c) {
    console.log(a + b + c);
}
// sum(1, 2, 3);

let arrVal = [1, 2, 3];
console.log(...arrVal);
// sum(...arrVal);
// sum.apply(null, arrVal);

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];
arr1 = arr1.concat(arr2);
arr1 = [...arr1, ...arr2, ...arr3];
console.log(arr1);

/**
 * DEFAULT PARAMETER
 */
// =============EC5===========
function mult(a, b) {
    b = (typeof b !== "undefined") ? b : 2
    console.log(b)
    console.log(a * b);
}
mult(8);

// ============EC6================
function add(a = 4, b = 4) {
    console.log(a + b);
}
add(4, 10);