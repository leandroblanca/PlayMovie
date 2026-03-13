import React from "react";
import "./DetallePelicula.css";
import { FaPlay, FaPlus, FaHeart, FaShareAlt } from "react-icons/fa";
import Reviews from "./Reviews"

export default function MovieDetail() {
  return (
    <div className="movie-detail">
      {/* Fondo con posición relativa */}
      <div className="movie-background">
        <img
          src="/src/assets/interstellar.jpg"
          alt="Interstellar Background"
        />

        {/* Overlay dentro del fondo */}
        <div className="movie-overlay">
          <h1 className="movie-title">INTERSTELLAR</h1>
          <p className="movie-info">2014 • 2h 49m • Ciencia Ficción, Drama • ⭐ 8.7</p>
          <p className="movie-description">
            Cuando la Tierra se vuelve inhabitable en el futuro, un granjero y ex piloto de la NASA,
            Joseph Cooper, tiene la tarea de pilotar una nave espacial junto con un equipo de investigadores
            para encontrar un nuevo planeta para los humanos...
          </p>

          <div className="movie-buttons">
            <button className="btn-play"><FaPlay /> Ver Ahora</button>
            <button className="btn-secondary"><FaPlus /> Mi Lista</button>
            <button className="btn-secondary"><FaHeart /> Me Gusta</button>
            <button className="btn-secondary"><FaShareAlt /> Compartir</button>
          </div>
        </div>
      </div>

      {/* Layout en dos columnas debajo */}
      <div className="movie-layout">
        <div className="movie-left">
          <h2>Elenco</h2>
          <div className="elenco">
            <div><img src="/src/assets/actor1.jpg" alt="Matthew McConaughey" /><p className="titulo1">Matthew McConaughey</p><p className="titulo2">Cooper</p></div>
            <div><img src="/src/assets/actor2.jpg" alt="Anne Hathaway" /><p className="titulo1">Anne Hathaway</p><p className="titulo2">Brand</p></div>
            <div><img src="/src/assets/actor3.jpg" alt="Jessica Chastain" /><p className="titulo1">Jessica Chastain</p><p className="titulo2">Murph</p></div>
            <div><img src="/src/assets/actor4.jpg" alt="Michael Caine" /><p className="titulo1">Michael Caine</p><p className="titulo2">Profesor Brand</p></div>
          </div>
          <Reviews movieId="interstellar" />
        </div>

        <div className="movie-right">
          <div>
            <h2>Información de la Película</h2>
            <p className="titulo1">Director: </p> <p className="titulo2">Christopher Nolan</p>
            <p className="titulo1">Clasificación: </p> <p className="titulo2">PG-13</p>
            <p className="titulo1">Producción: </p> <p className="titulo2">Legendary Pictures</p>
            <p className="titulo1">Audio: </p> <p className="titulo2">Dolby Atmos</p>
          </div>
          
          <div>
            <h2>Más como esta</h2>
            <ul>
              <li><img src="/src/assets/inception.png" alt="inception" /><p className="titulo1">Inception<p className="titulo2">2010 • CI-FI • ⭐ 8.8</p></p></li>
              <li><img src="/src/assets/martian.png" alt="martian" /><p className="titulo1">The Martian <p className="titulo2">2015 • CI-FI • ⭐ 8.0</p></p></li>
              <li><img src="/src/assets/arrival.png" alt="arrival" /><p className="titulo1">Arrival <p className="titulo2">2016 • CI-FI • ⭐ 7.9</p></p></li>
             </ul>
          </div>
        </div>
      </div>
    </div>
  );
}