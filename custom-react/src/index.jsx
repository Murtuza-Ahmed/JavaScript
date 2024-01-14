import React from "react";
import { createRoot } from "react-dom/client";
// const App = () => {
//     return React.createElement(
//         "div",
//         {},
//         React.createElement("h1", {}, "Adopt Me!")
//     );
// };
const App = () => {
  return (
    <div>
      <h1>ScoobyDoo</h1>
    </div>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
