import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Boton from '../src/Boton';

test('verifica que el botón muestra el texto correcto y cambia al hacer clic', () => {
  const { getByText } = render(<Boton />);

  // Verifica que el texto inicial sea "Hacer clic aquí"
  const boton = getByText('Hacer clic aquí');
  expect(boton).toBeInTheDocument();

  // Simula el clic en el botón
  fireEvent.click(boton);

  // Verifica que el texto haya cambiado a "¡Gracias por hacer clic!"
  expect(getByText('¡Gracias por hacer clic!')).toBeInTheDocument();
});