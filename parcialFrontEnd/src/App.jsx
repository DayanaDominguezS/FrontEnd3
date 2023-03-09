import './App.css'
import { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Card from './components/Card';

const App = () => {
  const [error, setError] = useState(null);
  const [nombre, setNombre] = useState('');
  const [animal, setAnimal] = useState('');

  const [submited, setSubmited] = useState(false);


  const handleSubmit = (error, nombre, animal) => {
    setError(error);
    setNombre(nombre);
    setAnimal(animal);
    setSubmited(true)
  };

  return (
    <div>
      <Header title="Mi animal favorito" />
      <hr />
      <Form onSubmit={handleSubmit} />
      <hr />
      {submited==true ? <Card nombre={nombre} animal={animal} error={error} /> : undefined}
    </div>
  );
};

export default App;