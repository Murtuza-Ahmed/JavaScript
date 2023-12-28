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
window.onload = readeData();
function signUp() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  console.log(`Email: ${email}`);
  console.log(`Password: ${password}`);
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      alert("SignUp Succes");
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
      alert("signIn Succes");
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
      alert("Data Save");
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
      alert("Read Data");
      console.log(
        res.docs.map((item) => {
          return { ...item.data(), id: item.id };
        })
      );
    })
    .catch((error) => {
      alert(error);
      console.log(error);
    });
}
function deleteData() {
  db.collection("users")
    .doc("5hij3f7QqAdq15l2tt1s")
    .delete()
    .then((res) => {
      alert("Delete Data");
      console.log(res);
    })
    .catch((error) => {
      alert("Data No't Delete");
      console.log(error);
    });
}
function updateData() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  db.collection("users")
    .doc("Wjc4O1cbJ0EsOd0k24SW")
    .update({
      name: name,
      email: email,
      password: password,
    })
    .then((res) => {
      alert("Data Update");
      console.log(res);
    })
    .catch((error) => {
      alert("Data Not Update");
      console.log(error);
    });
}
