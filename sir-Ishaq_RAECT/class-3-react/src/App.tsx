import "./App.css";
import List from "./components/list/List";
import AddForm from "./components/addForm/AddForm";
import { useState } from "react";

function App() {
  // const text = "Wellcome to my React App.";
  // const text = ["hello", "wellcome", "good bay"];
  const [items, setItems] = useState<string[]>([
    "hello",
    "wellcome",
    "good bay",
  ]);

  const addItemHandler = (itemText: string) => {
    setItems([...items, itemText]);
  };
  return (
    <div>
      {/* <List data={"Hello"} /> */}
      {/* <List data={text} /> */}
      {/* <List data={"Continue..."} /> */}
      <AddForm add={addItemHandler} />
      <List data={items} />
    </div>
  );
}

export default App;
