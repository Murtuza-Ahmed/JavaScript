import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import BasicExample from "./assets/Form";
import Button from "react-bootstrap/esm/Button";
import Counter from "./assets/Counter";
import AntDesign from "./assets/AntDesign";

function App() {
  // const [auth, setAuth] = useState("");
  // const [counter, setCounter] = useState(0);
  // const [name, setName] = useState("Raza");
  // useEffect(() => {
  //   console.log("testing...");
  // }, []);

  // useEffect(() => {
  //   console.log("testing2....");
  // }, [counter, name]);

  return (
    <>
      {/* FORM CALL */}
      {/* <div className="container">
        <div className="row">
          {auth === "login" ? (
            <div className="col">
              <h1>LOGGIN FORM</h1>
              <BasicExample />
              <Button variant="link" onClick={() => setAuth("register")}>
                Regester Now
              </Button>
            </div>
          ) : (
            <div className="col">
              <h1>REGESTER NOW</h1>
              <BasicExample />
              <Button variant="link" onClick={() => setAuth("login")}>
                Loggin Now
              </Button>
            </div>
          )}
        </div>
      </div> */}
      {/* <div>
        <h1>{name}</h1>
        <button onClick={() => setName("Ahmed")}>Name Update</button> */}
      {/*  */}
      {/* {counter <= 10 && <Counter count={counter} />}
        <button onClick={() => setCounter(counter + 1)}>ADD</button>
        <button
          onClick={() => {
            counter > 0 && setCounter(counter - 1);
          }}
        >
          SUB
        </button>
      </div> */}
      <AntDesign />
    </>
  );
}

export default App;
