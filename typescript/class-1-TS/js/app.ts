// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;
// const button = document.querySelector("button")!;

// function add(number1: number, number2: number) {
//     return number1 + number2
// }
// button.addEventListener("click", function () {
//     console.log(add(+input1.value, +input2.value))
// })

/**
 * number 5, 5.5, -7
 * string "Apple"
 * boolen true / false
 */

// let person: string;
// person = "Sheikh";

// let names: string[] = [];
// names.push("Sheroz");

// let number: number[] = [];
// number.push(5);


// type personal = {
//     name: string;
//     age: number;
//     hobbies: string[];
//     email: string;
// };

// const personal: personal = {
//     name: "Sheroz",
//     age: 26,
//     hobbies: ["football", "travlling", "programming"],
//     email: ""
// }
// personal.email = "programmer@gmail.com";



// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     email: string;
// } = {
//     name: "Sheroz",
//     age: 26,
//     hobbies: ["football", "travlling", "programming"],
//     email: ""
// }
// person.email = "programmer@gmail.com";


/**
 * TUPLE YE FIXED LENGTH KA ARRAY HOTA HE
 */

const statusCode: [number, string] = [404, "Not Found"];
const roles: [number, string] = [0, "Admin"];
roles[1] = "sheroz";
roles[0] = 4;

