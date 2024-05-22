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
    console.log("fullname", fullName)
    return function (lastName) {
        console.log("lastname", lastName)
        return fullName + " " + lastName
        // return function (otherName) {
        //     console.log("other", otherName)
        //     return fullName + " " + lastName + " " + otherName
        // }
    }
}

const userName = nameFunc("Raza");
console.log(userName("Ahmed"));
// console.log(userName("sheroz"));

// 

// function fetchData(url) {
//     let data = null;
//     fetch(url).then(response => {
//         data = response.json();
//         console.log(data); // Closure variable ko access karna
//     });
// }

// fetchData('https://api.example.com/data');
