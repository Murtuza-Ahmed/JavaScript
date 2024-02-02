import { useState } from "react";
function SearchParams() {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  console.log(location);
  console.log(animal);
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
        <label htmlFor="animal">
          <select
            name="animal"
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
          >
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="rabbit">Rabbit</option>
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SearchParams;
