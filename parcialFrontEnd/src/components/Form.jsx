import { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [nombre, setNombre] = useState('');
  const [animal, setAnimal] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (nombre.trim().length < 3 || nombre.startsWith(' ') || animal.length < 6) {
      onSubmit('Por favor chequea que la información sea correcta');
    } else {
      onSubmit(null, nombre, animal);
      setNombre('');
      setAnimal('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" value={nombre} onChange={(event) => setNombre(event.target.value)} />
      </label>
      <br />
      <label>
        Animal favorito:
        <input type="text" value={animal} onChange={(event) => setAnimal(event.target.value)} />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;