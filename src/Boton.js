import React, { useState } from 'react';

const Boton = () => {
  const [texto, setTexto] = useState('Hacer clic aquí');

  const manejarClick = () => {
    setTexto('¡Gracias por hacer clic!');
  };

  return (
    <boton onClick={manejarClick}>
      {texto}
    </boton>
  );
};

export default Boton;