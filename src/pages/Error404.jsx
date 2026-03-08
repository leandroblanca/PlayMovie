// Error404.jsx
import React from 'react';
import './Error404.css';
import errorImage from '../assets/error404-cine.png'; // Asegurate de tener la imagen en esta ruta

const Error404 = () => {
  return (
    <div className="error-container">
      <img src={errorImage} alt="Error 404" className="error-image" />
      <h1 className="error-title">¡El cine está vacío!</h1>
      <p className="error-subtitle">
        Parece que esta escena fue eliminada del montaje final. La página que buscas ha sido movida o no existe en nuestro guion.
      </p>
      <div className="error-buttons">
        <button className="btn red">
          <i className="fas fa-home"></i> Volver al Inicio
        </button>
        <button className="btn black">
          <i className="fas fa-search"></i> Buscar película
        </button>
      </div>
    </div>
  );
};

export default Error404;