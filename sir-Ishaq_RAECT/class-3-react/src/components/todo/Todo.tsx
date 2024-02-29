import AddForm from "../addForm/AddForm";
import List from "../list/List";
import { useState } from "react";
import Logout from "../logout/Logout";

function Todo() {
  const [items, setItems] = useState<string[]>([
    "Hello",
    "Welcome",
    "Good Bye",
  ]);
  const addItemHandler = (itemText: string) => {
    setItems([...items, itemText]);
  };

  return (
    <>
      <div>
        <AddForm add={addItemHandler} />
        <List data={items} />

        <Logout />
      </div>
    </>
  );
}
export default Todo;
