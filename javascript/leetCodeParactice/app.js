// CLOSURES FUNCTION

const fullName = "Ahmed";

function profile() {
    function writeName() {
        function sayName() {
            console.log(fullName)
        }
        return sayName
    }
    return writeName
}
// 

function outerFunction(outer) {
    return function innerFunction(inner) {
        console.log("OUTER", outer)
        console.log("INNER", inner)
    }
}

const newFunction = outerFunction("Bahar");
newFunction("ander");
// 

function counter() {
    let count = 0
    return function () {
        count++
        return count
    }
}
const counterFunction = counter();
console.log(counterFunction());
console.log(counterFunction());

// 

function add(a) {
    return function (b) {
        return a + b
    }
}

const addition = add(5);
console.log(addition(10));

// 

function nameFunc(fullName) {
    return function (lastName) {
        return function (otherName) {
            return function (num) {
                return fullName + " " + lastName + " " + otherName + " " + num
            }
        }
    }
}

const userName = nameFunc("Raza");
const userLastName = userName("Ahmed");
const totalUserName = userLastName("Sheroz");
const number = totalUserName(5);
console.log(number);
console.log(number);

//

// function fetchData(url) {
//     let data = null;
//     fetch(url).then(response => {
//         data = response.json();
//         console.log(data); // Closure variable ko access karna
//     });
// }

// fetchData('https://api.example.com/data');


//  ARRAY   PROTOTYPE

Array.prototype.last = function () {
    if (this.length === 0) {
        return -1
    } else {
        return this[this.length - 1]
    }
}

const arr = [1, 2, 3, 4];
console.log(arr.last());






//  ASYNCHRONOUS FUNCTION

async function sleep(milis) {
    return new Promise((resolve) => setTimeout(resolve, milis))
}

let t = Date.now();
sleep(100).then(() => console.log(Date.now() - t));


// NEW PROMISE FUNCTION
async function call(milli, should = true) {
    // return new Promise((resolve, reject) => should ? setTimeout(reject, milli) : setTimeout(resolve, milli));
    return new Promise((resolve, reject) => {
        if (should) {
            setTimeout(reject, milli)
        } else {
            setTimeout(resolve, milli)
        }
    })
}
let date = Date.now();
call(50, false).then(() => console.log("PromiseResolve", Date.now() - date)).catch(() => console.log("PromiseReject", Date.now() - date));


// SET TIME OUT FUNCTION BUTTON
let timeOut;
function timeFunc() {
    timeOut = setTimeout(delayFunc, 3000);
}

function delayFunc() {
    alert("MILLISECOND" + " " + "hello")
}