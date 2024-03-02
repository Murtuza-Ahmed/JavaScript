import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import BasicExample from "./assets/Form";
import Button from "react-bootstrap/esm/Button";

function App() {
  const [auth, setAuth] = useState("");
  return (
    <>
      {/* FORM CALL */}
      <div className="container">
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
      </div>
    </>
  );
}

export default App;
