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

// START

const inputField = document.getElementById("palindrom");
const palindromCheck = document.getElementById("btn-palindrom");
const updateValue = document.getElementById("bool");


function checkPalindrom(palindromValue, checkField) {
    if (checkField === palindromValue) {
        const node = document.createElement("p");
        const textNode = document.createTextNode("palindrom word");
        node.appendChild(textNode);
        updateValue.appendChild(node);
        inputField.value = ""
    } else {
        const node = document.createElement("p");
        const textNode = document.createTextNode("palindrom no't");
        node.appendChild(textNode);
        updateValue.appendChild(node);
        inputField.value = ""
    }
}

palindromCheck.addEventListener("click", function () {
    const acceptField = inputField.value;
    if (acceptField) {
        const valueSplit = acceptField.split("");
        const valueReverse = valueSplit.reverse();
        const valueJoin = valueReverse.join("")
        checkPalindrom(valueJoin, acceptField);
    } else {
        alert("filed is empty")
    }
})

/**
 * FIND LARGEST NUMBER
 */
// START
const arrNumber = [1, 2, 3, 4, 5];

const buttonCheckNumber = document.getElementById("check-number-1");

buttonCheckNumber.addEventListener("click", function () {
    if (arrNumber.length === 0) {
        return null
    }
    const largeNumber = Math.max(...arrNumber);
    console.log('large-number', largeNumber);
});
// START
const arrNum = [22, 45, 89, 40, 12, 85, 35, 3, 78];

const buttonCheckNumber2 = document.getElementById("check-number-2");

function findLargeNumber(arrNum) {
    return Math.max(...arrNum)
}

buttonCheckNumber2.addEventListener("click", function () {
    const callFunc = findLargeNumber(arrNum);
    console.log(callFunc)
});

// START
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

// START
const arrayOfNumber = [30, 80, 67, 2, 28, 57, 940, 29, 86, 93, 58, 2, 1039, 589, 34, 96, 192845, 98425];

const buttonCheckNumber4 = document.getElementById("check-number-4");

function checkArrayNumber(arrNum) {
    if (arrNum.length === 0) {
        return null;
    };
    let largest = arrNum[0];
    setTimeout(() => console.log('largetArray', largest), 1000);
    for (let i = 1; i < arrNum.length; i++) {
        if (arrNum[i] > largest) {
            largest = arrNum[i]
        };
    };
    return largest;
};

buttonCheckNumber4.addEventListener("click", function () {
    checkArrayNumber(arrayOfNumber);
});


/**
 * CHECK VOVEL WORD JS PARACTICE
 */

// START

const inputVovel = document.getElementById("vovel");
const buttonCheckVovel = document.getElementById("check-vovel");
const vovelArr = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function checkVovelFunc(accVal) {
    if (vovelArr.length === 0) {
        return null;
    };
};

buttonCheckVovel.addEventListener("click", function () {
    const acceptVal = inputVovel.value;
    checkVovelFunc(acceptVal);
});