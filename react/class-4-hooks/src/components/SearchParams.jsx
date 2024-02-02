import { useState } from "react";
function SearchParams() {
  const [location, setLocation] = useState("");
  console.log(location);
  // let location = "";
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter Location"
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SearchParams;
