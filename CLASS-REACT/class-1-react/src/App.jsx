import React from "react";
import { StrictMode } from "react";
// import { render } from "react-dom";
import { createRoot } from "react-dom/client";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      {/* <Pet name="Luna" animal="Dog" breeds="Havanese" /> */}
      <SearchParams />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
//   document.getElementById("root")
// );
