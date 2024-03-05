import { useState } from "react";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, updateLocation] = useState("");
  const [animal, updateAnimal] = useState("");
  console.log(location);
  console.log(animal);

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
          <label htmlFor="animal">
            Animal
            <select
              id="animal"
              value={animal}
              onChange={(e) => {
                updateAnimal(e.target.value);
              }}
              onBlur={(e) => {
                updateAnimal(e.target.value);
              }}
            >
              {ANIMALS.map((animal) => (
                <option key={animal} value={animal}>
                  {animal}
                </option>
              ))}
            </select>
          </label>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};
export default SearchParams;
