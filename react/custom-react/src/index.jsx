import React from "react";
import { createRoot } from "react-dom/client";
const Pet = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.animal}</h1>
      <h1>{props.breed}</h1>
    </div>
  );
};
const App = () => {
  return (
    <div>
      <h1>ScoobyDoo</h1>
      <pet name="luna" animal="dog" breed="havaneese" />
      <pet name="jacky" animal="dog" breed="german" />
      <pet name="scooby" animal="dog" breed="buldog" />
    </div>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
