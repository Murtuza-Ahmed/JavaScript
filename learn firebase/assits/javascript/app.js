const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDlk5pFHaqftV0eVGelT9TTxKengKsAtA8",
  authDomain: "learn-firebase-7e342.firebaseapp.com",
  projectId: "learn-firebase-7e342",
  storageBucket: "learn-firebase-7e342.appspot.com",
  messagingSenderId: "162995412127",
  appId: "1:162995412127:web:fe6c4a847df7ff099b96aa",
  measurementId: "G-1W2JK7HBXT",
});

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const db = firebaseApp.firestore();
function signUp() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  console.log(`Email: ${email}`);
  console.log(`Password: ${password}`);
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      alert(res);
      console.log(res);
    })
    .catch((error) => {
      alert(error);
      console.log(error);
    });
}
function signIn() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  console.log(`Email: ${email}`);
  console.log(`Password: ${password}`);
  auth
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      alert(res);
      console.log(res);
    })
    .catch((error) => {
      alert(error);
      console.log(error);
    });
}
function createData() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Password: ${password}`);
  db.collection("users")
    .add({
      fullname: name,
      email: email,
      password: password,
    })
    .then((res) => {
      alert(res);
      console.log(res);
    })
    .catch((error) => {
      alert(error);
      console.log(error);
    });
}
function readeData() {
  db.collection("users")
    .get()
    .then((res) => {
      alert(res);
      console.log(res);
    })
    .catch((error) => {
      alert(error);
      console.log(error);
    });
}
