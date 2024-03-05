import { useState } from "react";
import Breed from "./Breed";
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
          <Breed />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};
export default SearchParams;
