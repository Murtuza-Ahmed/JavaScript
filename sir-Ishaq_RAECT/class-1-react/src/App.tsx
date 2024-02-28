import "./App.css";
import List from "./components/list/List";

function App() {
  // const text = "Wellcome to my React App.";
  const text = ["hello", "wellcome", "good bay"];
  return (
    <div>
      {/* <List data={"Hello"} /> */}
      {/* <List data={text} /> */}
      {/* <List data={"Continue..."} /> */}
      <List data={text} />
    </div>
  );
}

export default App;
