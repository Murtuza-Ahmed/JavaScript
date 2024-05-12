import React from "react";

const Pet = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.animal}</h2>
      <h3>{props.breeds}</h3>
      <h4>{props.id}</h4>
    </div>
  );
};
export default Pet;
