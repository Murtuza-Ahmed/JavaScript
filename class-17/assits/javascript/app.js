// function checkEmail() {
//   const emailInput = document.getElementById("emailInput");
//   const email = emailInput.value.trim();
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (emailRegex.test(email)) {
//     displayResult("Valid Email", "green");
//   } else {
//     displayResult("Invalid Email", "red");
//   }
// }

// function displayResult(message, color) {
//   const outputDiv = document.querySelector(".output");
//   outputDiv.textContent = message;
//   outputDiv.style.color = color;
// }

function checkEmail() {
  let emailInput = document.getElementById("emailInput");
  let email = emailInput.value;
  const emailRegex = /[a-zA-Z0-9.-_]+@+[a-zA-Z0-9.-_]+.+[a-zA-Z0-9.-_]/;
  if (emailRegex) {
  }
}
