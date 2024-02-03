import { useState, useEffect } from "react";
import Pet from "./Pet";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const BREEDS = ["havennes","buldog"];
function SearchParams() {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  useEffect(() => {
    requestPets();
  }, []);
  async function requestPets() {
    const rest = await fetch(
      "https://pets-v2.dev-apis.com/pets?animal=&us/&breed"
    );
    const json = await rest.json();
    setPets(json.pets);
  }
  // {
  //   pets.map((pet) => {
  //     <pet
  //       name={pet.name}
  //       animal={pet.animal}
  //       breed={pet.breed}
  //       key={pet.id}
  //     />;
  //   });
  // }
  console.log(location);
  console.log(animal);
  console.log(breed);
  console.log(pets);
  console.log(BREEDS);
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
