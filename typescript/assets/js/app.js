const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
const button = document.querySelector("button");

function add(number1, number2) {
    return number1 + number2
}
button.addEventListener("click", function () {
    console.log(add(input1.value, input2.value))
})