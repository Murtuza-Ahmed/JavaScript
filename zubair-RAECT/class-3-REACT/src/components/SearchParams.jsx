import { useState, useEffect } from "react";
import Pet from "./Pet";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, updateLocation] = useState("");
  const [animal, updateAnimal] = useState("");
  const [breed, updateBreed] = useState("");
  const breeds = [];
  const [pets, setPets] = useState([]);

  console.log(location);
  console.log(animal);
  console.log(pets);
  console.log(breeds);

  useEffect(() => {
    requestPet();
  }, []);

  async function requestPet() {
    const petData = await fetch(
      "https://pets-v2.dev-apis.com/pets?animal=dog&location=us"
    );
    const convertJson = await petData.json();
    setPets(convertJson.pets);
  }

  return (
    <>
      <div className="search-params">
        <form>
          {/* LOCATION */}
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

          {/* ANIMAL */}
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

          {/* BREED */}
          <label htmlFor="breed">
            Breed
            <select
              id="breed"
              value={breed}
              disabled={!breeds.length}
              onChange={(e) => updateBreed(e.target.value)}
              onBlur={(e) => updateBreed(e.target.value)}
            >
              {breeds.map((breed) => (
                <option value="breed" key={breed}>
                  {breed}
                </option>
              ))}
            </select>
          </label>
          <button>Submit</button>
        </form>
      </div>
      {pets.map((pet) => (
        <Pet name={pet.name} animal={pet.animal} breed={pet.breed} />
      ))}
    </>
  );
};
export default SearchParams;
