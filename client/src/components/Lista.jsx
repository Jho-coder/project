function Lista({ lapizza }) {
  return (
    <div className="element">
      <h2>{lapizza.nombre}</h2>
      <h2>{lapizza.precio}</h2>
      <p>{lapizza.descripcion}</p>
      <img src={"image/" + lapizza.image} alt="" />
    </div>
  );
}

export default Lista;
