import { useState } from "react";
import Breed from "./Breed";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const Animal = () => {
  const [animal, updateAnimal] = useState("");
  console.log(animal);

  return (
    <>
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

      <Breed />
    </>
  );
};
export default Animal;
