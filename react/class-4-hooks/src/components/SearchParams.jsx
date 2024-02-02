import { useState } from "react";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const Breeds = [];

function SearchParams() {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("dog");
  const [breed, setBreed] = useState("");
  // let location = ""
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
            placeholder="Enter location"
          />
        </label>

        <label htmlFor="animal">
          <select
            name="animal"
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
          >
            {ANIMALS.map((item, ind) => {
              return <option value={item}>{item}</option>;
            })}
          </select>
        </label>

        <label htmlFor="breed">
          <select
            name="breed"
            id="breed"
            disabled={!Breeds.length}
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          >
            {Breeds.map((item, ind) => {
              return <option value={item}>{item}</option>;
            })}
          </select>
        </label>

        <button>submit</button>
      </form>
    </div>
  );
}

export default SearchParams;
