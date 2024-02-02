import { useState } from "react";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const BREEDS = [];
function SearchParams() {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  console.log(location);
  console.log(animal);
  console.log(breed);
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
            {/* <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="rabbit">Rabbit</option> */}
            {ANIMALS.map((item, index) => (
              <option value={item}>{item}</option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          <select
            name="breed"
            id="breed"
            disabled={!BREEDS.length}
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          >
            {BREEDS.map((item, index) => {
              return <option value={item}>{item}</option>;
            })}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SearchParams;
