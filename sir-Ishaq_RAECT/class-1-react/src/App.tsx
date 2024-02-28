import "./App.css";
import List from "./components/list/List";

function App() {
  const text = "Wellcome to my react App.";
  return (
    <div>
      <List data={text} />
      <List data={"Hello"} />
    </div>
  );
}

export default App;
