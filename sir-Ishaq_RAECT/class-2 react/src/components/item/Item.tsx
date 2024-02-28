import MyButton from "../myButton/MyButton";

function Item({ data }: { data: string }) {
  const onDeleteHandler = () => {
    console.log("delete");
  };
  return (
    <>
      {data}
      <MyButton type="button" click={onDeleteHandler} themes="cancel">
        Delete
      </MyButton>
    </>
  );
}
export default Item;
