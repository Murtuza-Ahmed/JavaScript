import { createRoot } from "react-dom/client";
import App from "./App";
const Index = () => {
  return (
    <div>
      <App />
    </div>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Index />);
