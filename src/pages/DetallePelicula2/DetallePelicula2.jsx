import React, { useState } from "react";
import "./DetallePelicula2.css";
import "@fontsource/poppins";
import { FaPlay, FaPlus, FaShareAlt, FaWhatsapp, FaFacebook, FaTwitter } from "react-icons/fa";
import Reviews from "./Reviews";
import { useParams, Link } from "react-router-dom";
import peliculasIniciales from "../../data/movies";

export default function MovieDetail() {
  const { id } = useParams();

  const datosStorage = localStorage.getItem("peliculas");
  const pelisStorage = datosStorage ? JSON.parse(datosStorage) : [];
  const todasLasPelis = [
    ...peliculasIniciales,
    ...pelisStorage.filter(p => !peliculasIniciales.find(pi => pi.id === p.id))
  ];

  const peli = todasLasPelis.find(item => item.id === Number(id) || item.id === id);

  const [mostrarVideo, setMostrarVideo] = useState(false);
  const [mostrarOpciones, setMostrarOpciones] = useState(false);

  if (!peli) return <h2 style={{ color: "#fff", padding: "2rem" }}>Ups! No encontramos esa película.</h2>;

  return (
    <div className="movie-detail">
      <div className="movie-hero">
        {!mostrarVideo ? (
          <img src={peli.poster} alt={peli.titulo} className="poster-img" />
        ) : (
          <iframe
            className="hero-iframe"
            src={`${peli.video}?autoplay=1`}
            title={peli.titulo}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
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
              <Link to="/favoritos" className="btn-secondary-link">
                <FaPlus /> Mi Lista
              </Link>
            </button>
            <div className="share-container">
              <button className="btn-secondary" onClick={() => setMostrarOpciones(!mostrarOpciones)}>
                <FaShareAlt /> Compartir
              </button>
              {mostrarOpciones && (
                <div className="share-options">
                  <a href={`https://wa.me/?text=Mira esta película: ${peli.titulo} ${window.location.href}`} target="_blank" rel="noopener noreferrer" className="share-icon whatsapp">
                    <FaWhatsapp />&nbsp;Whatsapp
                  </a>
                  <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener noreferrer" className="share-icon facebook">
                    <FaFacebook />&nbsp;Facebook
                  </a>
                  <a href={`https://twitter.com/intent/tweet?text=Mira esta película: ${peli.titulo}&url=${window.location.href}`} target="_blank" rel="noopener noreferrer" className="share-icon twitter">
                    <FaTwitter />&nbsp;Twitter
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="movie-layout">
        <div className="movie-left">
          <h2>Elenco</h2>
          <div className="elenco">
            <p>{peli.elenco ? peli.elenco.join(", ") : "Sin información de elenco."}</p>
          </div>
          <Reviews movieId={id} />
        </div>

        <div className="movie-right">
          <div>
            <h2>Información de la Película</h2>
            <p className="titulo1">Director:</p><p className="titulo2">{peli.director || "N/A"}</p>
            <p className="titulo1">Categoría:</p><p className="titulo2">{peli.categorias}</p>
            <p className="titulo1">Año:</p><p className="titulo2">{peli.anio}</p>
          </div>
          <div>
            <h2>Más como esta</h2>
            <ul>
              {todasLasPelis
                .filter(p => p.categorias === peli.categorias && p.id !== peli.id)
                .slice(0, 3)
                .map(p => (
                  <li key={p.id}>
                    <Link to={`/detallepelicula/${p.id}`} className="movie-link">
                      <img src={p.poster} alt={p.titulo} />
                      <p className="titulo1">{p.titulo}
                        <span className="titulo2">{p.anio} • {p.categorias}</span>
                      </p>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
