import "./App.css";
import { useState } from "react";
import Todo from "./components/todo/Todo";

function App() {
  const [items, setItems] = useState<string[]>([
    "hello",
    "wellcome",
    "good bay",
  ]);
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const addItemHandler = (itemText: string) => {
    setItems([...items, itemText]);
  };
  return (
    <div>
      {isAuth ? (
        <Todo addItemHandler={addItemHandler} items={items} />
      ) : (
        <div>Plaese Login</div>
      )}
    </div>
  );
}

export default App;
