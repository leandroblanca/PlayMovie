import React from 'react';
import './Error404.css';
import errorImage from '../../../public/assets/error404-cine.png';
import { FaHome, FaSearch } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <div className="error-container">
      <img src={errorImage} alt="Error 404" className="error-image" />

      <h1 className="error-title">¡El cine está vacío!</h1>

      <p className="error-subtitle">
        Parece que esta escena fue eliminada del montaje final.
        La página que buscas ha sido movida o no existe en nuestro guion.
      </p>

      <div className="error-buttons">
        <Button
          variant="danger"
          className="btn-custom red"
          onClick={() => navigate('/')}
        >
          <FaHome /> Volver al Inicio
        </Button>

        <Button
          variant="dark"
          className="btn-custom black"
          onClick={() => navigate('/buscar')}
        >
          <FaSearch /> Buscar Películas
        </Button>
      </div>
    </div>
  );
};

export default Error404;