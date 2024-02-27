/**
 * TYPE CASTING
 */
// const elem = <HTMLInputElement>document.getElementById("input")!;
// elem.value;

/**
 * GENERIC
 * TYPE GENERIC <>
 * ADDITIONAL INFORMATION OR ISSE PASS GENERIC KE THROU KARTE HN
 */
const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("done");
    }, 2000);
});
promise.then(data => {
    data.split("");
})

/**
 * HELPER FUNCTION
 * GENERICE <>
 */
function merge<T extends object, U extends object>(objA: T, objB: U) {
    return { ...objA, ...objB }
}

const merged = merge({ name: "sheroz" }, { age: 26 });
console.log(merged.name);

/**
 * DECORATORS
 * DECORATORS SIMPLE EK FUNCTION HE OR YE CLASS KE SATH USE HOGA 
 * CLASS KE SATH DECORATORS USE KARNE KYLYE EK SPECIFIC SIGN HOTA HE (@)
 * (@) USKE BAD DECORATORS KA NAME
 */

function Logger(data: string) {
    return function (_: Function) {
        console.log("loggin...." + data);
    }
}
@Logger("data")
class Persone {
    name = "sheikh";
    constructor() {
        console.log("called")
    }
}
const sheroz = new Persone();