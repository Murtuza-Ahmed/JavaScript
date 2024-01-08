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
    p.style.display === "block";
  } else {
    p.style.display === "none"
  }
}