import React from "react"
import { Container, Row, Col, Card, Button} from "react-bootstrap";
import categorias from "../../data/categories";
import { useNavigate } from "react-router";
import categorias from "../../data/categories";
import NavBar from "../../componentes/Nav";

function Home({ peliculas }) {
  const navigate = useNavigate();

  const handleCategoriaClick = (nombre) => {
    navigate(`/categoria/${encodeURIComponent(nombre)}`);
  };

  return (
    <Container fluid className="p-0">
      {/* He comentado el carrusel porque 'ExampleCarouselImage' no está definido.
          Puedes descomentarlo cuando crees ese componente. */}
      {/* <section>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src="https://via.placeholder.com/800x400" alt="First slide" />
          </Carousel.Item>
        </Carousel>
      </section> */}
      <Container className="my-5">
        <h5>Explorar Categoría</h5>
        <div className="mb-4">
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
        <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
          {peliculas.length > 0 ? (
            peliculas.map((pelicula) => (
              <Col key={pelicula.id}>
                <Card className="h-100 bg-dark text-white border-secondary">
                  <Card.Img
                    variant="top"
                    src={pelicula.poster}
                    alt={pelicula.titulo}
                  />
                  <Card.Body>
                    <Card.Title className="fs-6">{pelicula.titulo}</Card.Title>
                    <Card.Text className="text-muted">{pelicula.año}</Card.Text>
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
    </Container>
  );
}

export default Home;