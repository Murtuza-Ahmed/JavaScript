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