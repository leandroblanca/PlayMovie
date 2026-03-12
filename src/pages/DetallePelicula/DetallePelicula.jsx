import React from "react";
import "./DetallePelicula.css";
import { FaPlay, FaPlus, FaHeart, FaShareAlt } from "react-icons/fa";

export default function MovieDetail() {
  return (
    <div className="movie-detail">
      {/* Fondo */}
      <div className="movie-background">
        <img
          src="https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg" 
          alt="Interstellar Background"
        />
      </div>

      {/* Contenido */}
      <div className="movie-content">
        <h1 className="movie-title">INTERSTELLAR</h1>
        <p className="movie-info">2014 • 2h 49m • Ciencia Ficción, Drama • ⭐ 8.7</p>
        <p className="movie-description">
          Cuando la Tierra se vuelve inhabitable en el futuro, un granjero y ex piloto de la NASA,
          Joseph Cooper, tiene la tarea de pilotar una nave espacial junto con un equipo de investigadores
          para encontrar un nuevo planeta para los humanos...
        </p>

        {/* Botones */}
        <div className="movie-buttons">
          <button className="btn-play"><FaPlay /> Ver Ahora</button>
          <button className="btn-secondary"><FaPlus /> Mi Lista</button>
          <button className="btn-secondary"><FaHeart /> Me Gusta</button>
          <button className="btn-secondary"><FaShareAlt /> Compartir</button>
        </div>

        {/* Elenco */}
        <div className="movie-section">
          <h2>Elenco</h2>
          <ul>
            <li>Matthew McConaughey como Cooper</li>
            <li>Anne Hathaway como Brand</li>
            <li>Jessica Chastain como Murph</li>
            <li>Michael Caine como Profesor Brand</li>
          </ul>
        </div>

        {/* Información */}
        <div className="movie-section">
          <h2>Información de la Película</h2>
          <p>Director: Christopher Nolan</p>
          <p>Clasificación: PG-13</p>
          <p>Producción: Legendary Pictures</p>
          <p>Audio: Dolby Atmos</p>
        </div>

        {/* Más como esta */}
        <div className="movie-section">
          <h2>Más como esta</h2>
          <ul>
            <li>Inception (2010 • CI-FI • ⭐ 8.8)</li>
            <li>The Martian (2015 • CI-FI • ⭐ 8.0)</li>
            <li>Arrival (2016 • CI-FI • ⭐ 7.9)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}