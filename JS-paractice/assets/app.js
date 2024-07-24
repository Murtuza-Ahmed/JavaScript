/**
 * REVERCE STRING PARACTICE
 */

let string = "hello world take help care";
let string1 = "javascript";


function strReverce() {
    let strRevec = string.split(" ");
    let arrRevec = strRevec.reverse();
    let arrJoin = arrRevec.join();
    // console.log(arrJoin)
}

strReverce();

function strReverce1(str) {
    let strRev = str.split("");
    let arrRev = strRev.reverse();
    let joinRev = arrRev.join(" ");
    // console.log(joinRev)
}

strReverce1(string1)

/**
 * PALINDROM PARACTICE
 */
const buttonCheckPalindrom = document.getElementById("check");

buttonCheckPalindrom.addEventListener("click", () => {
    const userInput = prompt('Enter the Palindrom-Game');
    const acceptInput = userInput;
    const str = acceptInput.split("");
    const strReverse = str.reverse();
    const strJoin = strReverse.join("");
    acceptInput === strJoin ? alert('welldone') : alert("no't Palindrom");
});

/**
 * FIND LARGEST NUMBER
 */

const arrNumber = [1, 2, 3, 4, 5];

const buttonCheckNumber = document.getElementById("check-number-1");

buttonCheckNumber.addEventListener("click", function () {
    const largeNumber = Math.max(...arrNumber);
    console.log('large-number', largeNumber);
});

const arrNum = [22, 45, 89, 40, 12, 85, 35, 3, 78];

const buttonCheckNumber2 = document.getElementById("check-number-2");

function findLargeNumber(arrNum) {
    return Math.max(...arrNum)
}

buttonCheckNumber2.addEventListener("click", function () {
    const callFunc = findLargeNumber(arrNum);
    console.log(callFunc)
});


const arrNum1 = [22, 45, 89, 40, 12, 85, 35, 3, 78, 23, 45, 88, 49, 11, 19, 36, 35, 73];

const buttonCheckNumber3 = document.getElementById("check-number-3");

function arrNumFunc(arr) {
    if (arr.length === 0) {
        return null
    }

    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
        }
    }
    console.log(largest)
}

buttonCheckNumber3.addEventListener("click", function () {
    arrNumFunc(arrNum1)
})
