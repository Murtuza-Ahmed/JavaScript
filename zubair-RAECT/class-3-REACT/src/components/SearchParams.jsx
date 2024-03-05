import { useState } from "react";
import Animal from "./Animal";

const SearchParams = () => {
  const [location, updateLocation] = useState("");
  console.log(location);

  return (
    <>
      <div className="search-params">
        <form>
          <label htmlFor="location">
            Location
            <input
              type="text"
              id="location"
              placeholder="Location"
              value={location}
              onChange={(e) => updateLocation(e.target.value)}
            />
          </label>
          <Animal />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};
export default SearchParams;
