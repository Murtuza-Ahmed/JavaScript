import { useState } from "react";

const SearchParams = () => {
  const [location, updateLocation] = useState("RAZA");
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
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};
export default SearchParams;
