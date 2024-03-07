import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPet";

const Details = () => {
  const { id } = useParams();
  const result = useQuery(["details", id], fetchPet);
  console.log(result)
  return

  return (
    <div clasName="detail">
      <div>
        <h1>{Pet.name}</h1>
        <h2>{`${pet.animal} - ${pet.breed} - ${pet.city} - ${pet.state}`}</h2>
        <button>Adopt {pet.name}</button>
        <p>{pet.description}</p>
      </div>
    </div>
  );
};
export default Details;
