"use strict";
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
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("done");
    }, 2000);
});
promise.then(data => {
    data.split("");
});
/**
 * HELPER FUNCTION
 * GENERICE <>
 */
function merge(objA, objB) {
    return Object.assign(Object.assign({}, objA), objB);
}
const merged = merge({ name: "sheroz" }, { age: 26 });
console.log(merged.name);
//# sourceMappingURL=app.js.map