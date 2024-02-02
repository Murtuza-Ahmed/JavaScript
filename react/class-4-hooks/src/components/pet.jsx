const Pet = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.animal}</h2>
      <h3>{props.breed}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non excepturi
        reiciendis aliquam id ducimus! Assumenda sint error aut officia
        laboriosam omnis culpa!
      </p>
    </div>
  );
};

export default Pet;
