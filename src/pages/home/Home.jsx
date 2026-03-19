import './Home.css';
import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  // Traemos las pelis que guardaste en el localStorage en App.jsx
  const peliculas = JSON.parse(localStorage.getItem("peliculas")) || [];

  return (
    <div className="container mt-4">
      <div className="row">
        {/* El .map empieza aquí. 'peli' nace aquí adentro */}
        {peliculas.map((peli) => {
          return (
            <div className="col-md-4 mb-4" key={peli.id}>
              <div className="card h-100">
                <img src={peli.poster} className="card-img-top" alt={peli.titulo} />
                <div className="card-body">
                  <h5 className="card-title">{peli.titulo}</h5>
                  <p className="card-text text-truncate">{peli.descripcion}</p>
                  
                  {/* El Link DEBE estar dentro del map para reconocer a 'peli' */}
                  <Link to={`/detallepelicula/${peli.id}`} className="btn btn-primary">
                    Ver Detalle
                  </Link>
                </div>
              </div>
            </div>
          );
        })} 
        {/* El .map termina aquí. Fuera de aquí, 'peli' ya no existe */}
      </div>
    </div>
  );
};

export default Home;