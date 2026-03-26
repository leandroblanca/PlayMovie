import React, { useState } from "react"
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import categorias from "../../data/categories";
import { useNavigate, useLocation } from "react-router-dom";
import ModalPelicula from "./ModalHome";
import { useFavoritos } from '../../data/favorito';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import peliculasIniciales from "../../data/movies";
import './Home.css';

function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const { esFavorito, agregarFavorito, eliminarFavorito } = useFavoritos();
  const [selectMovie, setSelectMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const peliculas = JSON.parse(localStorage.getItem("peliculas")) || peliculasIniciales;
  const searchQuery = new URLSearchParams(location.search).get("search");
  const peliculasFiltradas = searchQuery
    ? peliculas.filter((p) => p.titulo.toLowerCase().includes(searchQuery.toLowerCase()))
    : peliculas;
  const peliculasDestacadas = peliculas.slice(0, 5);

  const handleCategoriaClick = (nombre) => navigate(`/categoria/${encodeURIComponent(nombre)}`);

  const handleShowModal = (pelicula) => { setSelectMovie(pelicula); setShowModal(true); };
  const handleCloseModal = () => { setShowModal(false); setSelectMovie(null); };

  const toggleFavoritos = (e, pelicula) => {
    e.stopPropagation();
    e.preventDefault();
    esFavorito(pelicula.id) ? eliminarFavorito(pelicula.id) : agregarFavorito(pelicula);
  };

  return (
    <Container fluid className="p-0">
      {!searchQuery && (
        <section className="carousel-video">
          <Carousel indicators={true} interval={null} controls={true}>
            {peliculasDestacadas.map((pelicula) => (
              <Carousel.Item key={pelicula.id}>
                <div className="video-container">
                  <iframe
                    src={`${pelicula.video}?autoplay=0&mute=0&controls=1&showinfo=0&rel=0`}
                    title={pelicula.titulo}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <Carousel.Caption className="carousel-caption-custom">
                  <h3>{pelicula.titulo}</h3>
                  <p>{pelicula.descripcion}</p>
                  <Button variant="danger" size="sm" onClick={() => handleShowModal(pelicula)}>
                    Ver mas
                  </Button>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </section>
      )}

      <Container fluid className="my-5">
        <h5 className="mt-5 p-4">{searchQuery ? `Resultados para: "${searchQuery}"` : "Explorar Categoría"}</h5>
        {!searchQuery && (
          <div className="mb-3 d-flex flex-row flex-wrap gap-3 mt-3">
            {categorias.map((categoria) => (
              <Button
                key={categoria.id}
                variant="outline-danger"
                className="me-2 mb-2"
                onClick={() => handleCategoriaClick(categoria.categorias)}
              >
                {categoria.categorias}
              </Button>
            ))}
          </div>
        )}
        <Row xs={1} sm={2} md={3} lg={4} xl={5} className="ml-0 mr-0 g-3">
          {peliculasFiltradas.length > 0 ? (
            peliculasFiltradas.map((pelicula) => (
              <Col key={pelicula.id}>
                <Card className="bg-dark text-white border-secondary text-center d-flex flex-column" style={{ width: "100%" }}>
                  <Card.Img
                    variant="top"
                    src={pelicula.poster}
                    alt={pelicula.titulo}
                    style={{ height: "220px", objectFit: "cover", objectPosition: "center top", flexShrink: 0 }}
                  />
                  <div style={{ padding: "0.75rem", display: "flex", flexDirection: "column", boxSizing: "border-box" }}>
                    <div style={{ height: "60px", overflow: "hidden", marginBottom: "0.75rem" }}>
                      <p style={{ fontWeight: "bold", fontSize: "0.95rem", margin: "0 0 4px 0", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{pelicula.titulo}</p>
                      <Button
                        variant="link"
                        className="p-0 text-danger btn-fav-home"
                        onClick={(e) => toggleFavoritos(e, pelicula)}
                      >
                        {esFavorito(pelicula.id) ? <FaHeart /> : <FaRegHeart />}
                      </Button>
                      <p style={{ fontSize: "0.85rem", color: "#aaa", margin: 0 }}>{pelicula.anio}</p>
                    </div>
                    <div>
                      <Button variant="danger" className="w-100" onClick={() => handleShowModal(pelicula)}>
                        Ver mas
                      </Button>
                    </div>
                  </div>
                </Card>
              </Col>
            ))
          ) : (
            <div className="text-center text-white col-12 py-5">
              <h3>No se encontraron películas 😔</h3>
              <p>Intenta con otro título.</p>
              {searchQuery && (
                <Button variant="outline-light" onClick={() => navigate("/")}>Ver todas</Button>
              )}
            </div>
          )}
        </Row>
      </Container>
      <ModalPelicula
        show={showModal}
        handleClose={handleCloseModal}
        pelicula={selectMovie}
        esFavorito={esFavorito}
        agregarFavorito={agregarFavorito}
        eliminarFavorito={eliminarFavorito}
      />
    </Container>
  );
}

export default Home;
