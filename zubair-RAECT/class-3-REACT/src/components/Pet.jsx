function Pet(props) {
  const { animal, name, id, images, location, breed } = props;
  let hero = "http://pets-images.dev-apis.com/pets/dog18.jpg";
  if (images.length) {
    hero = images[0];
  }

  return (
    <>
      <a href={`/detail/${id}}`} className="pet">
        <div className="image-container">
          <img src={hero} alt={name} />
        </div>
        <div className="info">
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
        </div>
      </a>
    </>
  );
}
export default Pet;
