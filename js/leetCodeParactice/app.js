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
        count += 1
        return count
    }
}
const counterFunction = counter();
console.log(counterFunction());