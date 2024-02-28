import "./App.css";
import List from "./components/list/List";

function App() {
  const text = "Wellcome to my React App.";
  return (
    <div>
      <List data={"Hello"} />
      <List data={text} />
      <List data={"Continue..."} />
    </div>
  );
}

export default App;
