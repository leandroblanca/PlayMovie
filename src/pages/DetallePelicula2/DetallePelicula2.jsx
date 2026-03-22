import React, { useState } from "react";
import "./DetallePelicula2.css";
import "@fontsource/poppins";
import { FaPlay, FaPlus, FaHeart, FaShareAlt, FaWhatsapp, FaFacebook, FaTwitter } from "react-icons/fa";
import Reviews from "./Reviews";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";



export default function MovieDetail() {
  const { id } = useParams();

  const datosStorage = localStorage.getItem("peliculas");
  const todasLasPelis = JSON.parse(datosStorage);

  const peli = todasLasPelis.find(item => item.id === Number(id));

  const [mostrarVideo, setMostrarVideo] = useState(false);

  const [liked, setLiked] = useState(false);

  const [mostrarOpciones, setMostrarOpciones] = useState(false);


  if (!peli) {
    return <h2>Ups! No encontramos esa película.</h2>;
  }

  return (
    <div className="movie-detail">
      
         <div className="movie-detail">
      {!mostrarVideo ? (
        <img src={peli.poster} alt={peli.titulo} className="poster-img" />
      ) : (
        <iframe
          width="100%"
          height="500"
          src={peli.video + "?autoplay=1"}
          title={peli.titulo}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
        
        <div className="movie-overlay">
          <h1>{peli.titulo}</h1>
          <p><strong>Año:</strong> {peli.anio}</p>
          <p><strong>Categoría:</strong> {peli.categorias}</p>
          <p>{peli.descripcion}</p>

          <div className="movie-buttons">
            <button className="btn-play" onClick={() => setMostrarVideo(true)}>
              <FaPlay /> Ver Ahora
            </button>
            <button className="btn-secondary">
              <Link to="/error404" className="btn-secondary-link">
                <FaPlus /> Mi Lista
              </Link>
            </button>
            <button 
              className={`btn-secondary ${liked ? "liked" : ""}`} 
              onClick={() => setLiked(!liked)}
              >
              <FaHeart /> Me Gusta
            </button>
                    
        <div className="share-container" style={{ position: "relative", display: "inline-block" }}>
          <button 
        className="btn-secondary" 
        onClick={() => setMostrarOpciones(!mostrarOpciones)}
      >
        <FaShareAlt /> Compartir
      </button>

      {mostrarOpciones && (
        <div className="share-options">
          <a 
            href={`https://wa.me/?text=Mira esta película: ${peli.titulo} ${window.location.href}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="share-icon whatsapp"
          >
             <FaWhatsapp />
             &nbsp;Whatsapp
          </a>
          <a 
            href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="share-icon facebook"
          >
              <FaFacebook />
            &nbsp;Facebook
          </a>
          <a 
            href={`https://twitter.com/intent/tweet?text=Mira esta película: ${peli.titulo}&url=${window.location.href}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="share-icon twitter"
          >
             <FaTwitter />
              &nbsp;Twitter
          </a>
        </div>
      )}
          </div>
        </div>
      </div>

        </div>
             
      {/* Layout en dos columnas debajo */}
      <div className="movie-layout">
        <div className="movie-left">
          <h2>Elenco</h2>
          <div className="elenco">
            <p>{peli.elenco ? peli.elenco.join(", ") : "Cargando elenco..."}</p>
          </div>
          <Reviews movieId="interstellar" />
        </div>

        <div className="movie-right">
          <div>
            <h2>Información de la Película</h2>
            <p className="titulo1">Director: </p> <p className="titulo2">{peli.director}</p>
            <p className="titulo1">Clasificación: </p> <p className="titulo2">PG-13</p>
            <p className="titulo1">Producción: </p> <p className="titulo2">Legendary Pictures</p>
            <p className="titulo1">Audio: </p> <p className="titulo2">Dolby Atmos</p>
          </div>
          
          <div>
            <h2>Más como esta</h2>
            <ul>
              <li>
                  <Link to="/detallepelicula/8" className="movie-link">
                    <img src="https://pics.filmaffinity.com/inception-652954101-large.jpg" alt="inception" />
                    <p className="titulo1">Inception
                      <span className="titulo2">2010 • CI-FI • ⭐ 8.8</span>
                    </p>
                </Link>
              </li>
              <li>
                <Link to="/detallepelicula/7" className="movie-link">
                <img src="https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg" alt="Interstellar" />
                <p className="titulo1">Interstellar
                  <span className="titulo2">2014 • CI-FI • ⭐ 8.0</span>
                </p>
                </Link>
              </li>
              <li>
                <Link to="/detallepelicula/9" className="movie-link">
                <img src="https://image.tmdb.org/t/p/w500/aOIuZAjPaRIE6CMzbazvcHuHXDc.jpg" alt="matrix" />
                <p className="titulo1">The Matrix
                  <span className="titulo2">1999 • CI-FI • ⭐ 7.9</span>
                </p>
                </Link>
              </li>
              
             </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
