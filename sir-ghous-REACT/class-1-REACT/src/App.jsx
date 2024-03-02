import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import BasicExample from "./assets/Form";
import Button from "react-bootstrap/esm/Button";

function App() {
  // const [name, setName] = useState("Sheroz");
  // const [value, setValue] = useState("");
  // console.log(value);
  return (
    <>
      {/* <h1>{name}</h1>
      <button onClick={() => setName("Sheikh")}>Update</button> */}
      {/* <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <h1>{value}</h1>
      <button onClick={() => setValue("")}>Reset</button> */}

      {/* FORM CALL */}
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>LOGGIN FORM</h1>
            <BasicExample />
            <Button variant="link">Regester Now</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
