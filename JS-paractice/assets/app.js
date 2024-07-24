let string = "hello world take help care";
let string1 = "javascript";


function strReverce() {
    let strRevec = string.split(" ");
    let arrRevec = strRevec.reverse();
    let arrJoin = arrRevec.join();
    console.log(arrJoin)
}

strReverce();

function strReverce1(str) {
    let strRev = str.split("");
    let arrRev = strRev.reverse();
    let joinRev = arrRev.join(" ");
    console.log(joinRev)
}

strReverce1(string1)