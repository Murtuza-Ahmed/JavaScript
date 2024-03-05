import { useState } from "react";
const Breed = () => {
  const [breed, updateBreed] = useState("");
  const breeds = [];

  return (
    <>
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
    </>
  );
};
export default Breed;
