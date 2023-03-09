const Card = ({ nombre, animal, error }) => (
    <div>
      {error ? (
        <p>{error}</p>
      ) : (
        <>
          <p>Nombre: {nombre}</p>
          <p>Animal favorita: {animal}</p>
        </>
      )}
    </div>
  );
  
  export default Card;