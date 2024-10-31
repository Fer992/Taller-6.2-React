import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('muestra el componente Boton y cambia el texto del botón al hacer clic', () => {
    render(<App />);
    
    const titulo = screen.getByText('Aplicación de prueba de botón');
    expect(titulo).toBeInTheDocument();
    
    const boton = screen.getByText('Hacer clic aquí');
    expect(boton).toBeInTheDocument();
    
    fireEvent.click(boton);
    
    const botonActualizado = screen.getByText('¡Gracias por hacer clic!');
    expect(botonActualizado).toBeInTheDocument();
  });
});