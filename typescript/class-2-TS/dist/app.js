"use strict";
const button = document.querySelector("button");
function log(data) {
    console.log("click" + data);
}
// log("hello")
button.addEventListener("click", log.bind(null, "hello"));
//# sourceMappingURL=app.js.map