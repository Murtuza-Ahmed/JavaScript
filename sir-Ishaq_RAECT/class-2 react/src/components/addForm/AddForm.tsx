function AddForm() {
  return (
    <>
      <form action="listform">
        <div>
          <label htmlFor="my-input">Item Name</label>
          <input type="text" id="my-input" />
        </div>
        <div>
            <button type="submit">Add</button>
        </div>
      </form>
    </>
  );
}
export default AddForm;
