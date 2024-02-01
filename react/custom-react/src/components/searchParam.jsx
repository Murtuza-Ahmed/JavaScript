function SearchParam() {
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          <input
            type="text"
            name="search"
            id="location"
            placeholder="Enter Loaction"
          />
        </label>
        <button>submit</button>
      </form>
    </div>
  );
}

export default SearchParam;
