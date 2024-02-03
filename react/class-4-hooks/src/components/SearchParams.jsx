import { useState, useEffect } from "react";
const Animals = ["bird", "cat", "dog", "rabbit", "reptile"];
const Breeds = [];
console.log(Breeds);
function SearchParams() {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  // CONSOLE.LOG
  console.log(location);
  console.log(animal);
  console.log(breed);
  console.log(pets);
  // USE EFFECT (API CALL)
  useEffect(() => {
    requestPets();
  }, []);
  async function requestPets() {
    const response = await fetch(
      "https://pets-v2.dev-apis.com/pets?animal=&us/&breed"
    );
    const data = await response.json();
    let actualData = data.pets;
    setPets(actualData);
  }
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
            {Animals.map((item) => (
              <option value={item}>{item}</option>
            ))}
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
            {Breeds.map((item) => {
              return <option value={item}>{item}</option>;
            })}
          </select>
        </label>
        <button>Submit</button>
      </form>
      {/* <div>
        {pets.map((item) => {
          console.log("Pets! Item", item);
          return (
            <div>
              <h1>{item.name}</h1>
              <h1>{item.animal}</h1>
              <h1>{item.state}</h1>
              <h1>{item.images}</h1>
            </div>
          );
        })}
      </div> */}
    </div>
  );
}

export default SearchParams;
