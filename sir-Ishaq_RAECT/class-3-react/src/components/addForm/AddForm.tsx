import { FormEvent } from "react";
import { useRef } from "react";
import MyButton from "../myButton/MyButton";

function AddForm({ add }: { add: (a: string) => void }) {
  const inputRef = useRef<HTMLInputElement>(null);
  let inputData = "";

  const onSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    add(inputRef.current!.value);
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label htmlFor="my-input">Item Name</label>
          <input type="text" id="my-input" ref={inputRef} />
        </div>
        <div>
          <MyButton themes="ok" type="submit">
            Add
          </MyButton>
        </div>
      </form>
    </>
  );
}
export default AddForm;
