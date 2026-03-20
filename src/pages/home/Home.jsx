import React, { useState } from "react"
import { Container, Row, Col, Card, Button, Carousel} from "react-bootstrap";
import categorias from "../../data/categories";
import { useNavigate } from "react-router";
import './home.css';
import ModalPelicula from "./ModalHome"
import { useFavoritos } from '../../data/favorito';
import { FaHeart, FaRegHeart } from "react-icons/fa";

function Home({ peliculas }) {
  const navigate = useNavigate();
  const {esFavorito, agregarFavorito, eliminarFavorito} = useFavoritos();
  const [selectMovie, setSelectMovie] = useState(null)
  const [showModal, setShowModal] = useState(false)


  const handleCategoriaClick = (nombre) => {
    navigate(`/categoria/${encodeURIComponent(nombre)}`);
  };
  const handleShowModal = (pelicula) => {
    setSelectMovie(pelicula)
    setShowModal(true);
  }
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectMovie(null);
  }
  const toggleFavoritos = (e, pelicula) => {
    e.stopPropagation();
    e.preventDefault();
    if (esFavorito(pelicula.id)) {
      eliminarFavorito(pelicula.id)
    } else {
      agregarFavorito(pelicula)
    }
  }
  const peliculasDestacadas = peliculas.slice(0, 5);

  return (
    <Container fluid className="p-0">
       <section className="carousel-video">
        <Carousel indicators={true} interval={null} controls={true}>
          {peliculasDestacadas.map((pelicula) => (
            <Carousel.Item key={pelicula.id}>
              <div className="video-container">
                <iframe
                src={`${pelicula.video}?autoplay=0&mute=0&controls=1&showinfo=0&rel=0`}
                title={pelicula.title}
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
      <Container fluid className="my-5">
        <h5 className="mt-5 p-4">Explorar Categoría</h5>
        <div className="mb-3 d-flex flex-row flex-wrap gap-3 mt-3 ">
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
        <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-3">
          {peliculas.length > 0 ? (
            peliculas.map((pelicula) => (
              <Col key={pelicula.id}>
                <Card className="card-home h-100 bg-dark text-white border-secondary">
                  <Card.Img
                    variant="top"
                    src={pelicula.poster}
                    alt={pelicula.titulo}
                  />
                  <Card.Body>
                    <Card.Title className="fs-6">{pelicula.titulo}</Card.Title>
                    <Button
                    variant="link"
                    className="p-0 text-danger btn-fav-home"
                    onClick={(e) => toggleFavoritos(e, pelicula)}
                    >
                      {esFavorito(pelicula.id) ? <FaHeart /> : <FaRegHeart />}
                    </Button>
                    <Card.Text className="text-muted">{pelicula.anio}</Card.Text>
                    <Button className="bg-dark" onClick={() =>handleShowModal(pelicula)}>
                      Ver mas
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p className="text-center text-white col-12">
              No hay películas disponibles.
            </p>
          )}
        </Row>
      </Container>
      <ModalPelicula
       show={showModal}
       handleClose={handleCloseModal}
       pelicula={selectMovie}
       esFavorito={esFavorito}
       agregarFavorito={agregarFavorito}
       eliminarFavorito={eliminarFavorito}/>
    </Container>
  );
}

export default Home;
