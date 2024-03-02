import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import BasicExample from "./assets/Form";

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
            <BasicExample />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
