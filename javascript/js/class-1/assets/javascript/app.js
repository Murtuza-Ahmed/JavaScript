// alert("Hello Murtuza");
// let consoleName = "Hello Ahmed";
// console.log(consoleName);
// var number = 0;
// console.log(number);

// const arr = [1, 2, 3];
// arr.last();

console.log(Array.prototype)

Array.prototype.last = function () {
    if (this.length === 0) {
        return -1
    } else {
        return this[this.length - 1]
    }
}
const arr = [1, 2, 3];
arr.last()
console.log(arr.last())




var createCounter = function (n) {

    return function () {
        n + 1
    }
}

const counter = createCounter(10)
console.log(counter()) // 10
console.log(counter()) // 11
console.log(counter()) // 12