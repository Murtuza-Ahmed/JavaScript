function SearchParams() {
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          <input type="text" id="location" placeholder="Enter Location" />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SearchParams;
