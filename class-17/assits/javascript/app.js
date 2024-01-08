function checkEmail() {
  const emailInput = document.getElementById("emailInput");
  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(email)) {
    displayResult("Valid Email", "green");
  } else {
    displayResult("Invalid Email", "red");
  }
}

function displayResult(message, color) {
  const outputDiv = document.querySelector(".output");
  outputDiv.textContent = message;
  outputDiv.style.color = color;
}

function revel(i) {
  console.log(i)
};

function message(z) {
  // return z.innerText;
  console.log(z.innerText);
  console.dir(z)
}

const exampleObject = {
  name: 'John',
  age: 25,
  address: {
    city: 'New York',
    zip: '10001'
  },
  sayHello: function () {
    console.log('Hello!');
  },
  sayFellow: function () {
    console.log("fellow")
  },
  address: {
    city: "karachi",
    code: 456
  }
};
// Using console.dir() to inspect the object
console.dir(exampleObject);
console.log(exampleObject);

function getMagic() {
  let p = document.getElementById("getText");
  if (p.style.display === "none") {
    p.style.display = "block";
  } else {
    p.style.display = "none"
  }
}

function rainFall() {
  let divs = document.getElementsByTagName("div");
  for (let i = 0; i < divs.length; i++) {
    divs[i].style.background = divs[i].id;
  }
  console.log(divs)
}

function magic() {
  let cssStyle = document.getElementById("shape").classList.add("aqua");
  console.log(cssStyle);
}

function changeAtr() {
  let el = document.getElementById("new");
  el.setAttribute("style", "background-color:red; border-radius:50%;");
  el.setAttribute("id", "circle");
  el.setAttribute("class", "squre");
  console.dir(changeAtr);
  console.log(changeAtr);
}

let friendListName = ["hamza", "umer", "zubair", "murtuza", "raza", "ahmed", "shahid", "pasha", "asgar", "ehsan"];
let messageSelect = document.querySelector("#message");

function build() {
  let html = "<h1>My Friends Table</h1> <table>";
  friendListName.forEach((item, index) => {
    html += `<tr class="box" data-row="${index + 1}" data-name="${item}" onclick="getData(this)">
            <td>${item}</td>`;
    html += `<td>${index + 1}</td></tr>`;
  });
  html += "</table>";
  console.log(html);
  document.getElementById("output").innerHTML = html;
}

build();

function getData(el) {
  let temp = el.getAttribute("data-row");
  let tempName = el.getAttribute("data-name");
  messageSelect.innerHTML = `${tempName} is ROW: ${temp}`;
}