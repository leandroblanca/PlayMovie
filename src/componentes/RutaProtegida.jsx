import React from 'react';
import { Navigate } from 'react-router-dom';

const RutaProtegida = ({ children }) => {
  const usuarioLogueado = JSON.parse(sessionStorage.getItem('usuarioLogueado'));

  if (!usuarioLogueado) {
    // Si no hay usuario logueado, redirige a la página de login
    return <Navigate to="/login" />;
  }

  return children;
};

export default RutaProtegida;