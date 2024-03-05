import React from "react";
import { createRoot } from "react-dom/client";
import Pet from "./Pet";

const App = () => {
  return (
    <>
      <div>
        <h1>Adopt Me!</h1>
      </div>
      <Pet name="Luna" animal="Dog" breed="Haveenes" />
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
