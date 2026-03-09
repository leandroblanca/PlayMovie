import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import { useNavigate } from "react-router";

function Home({ peliculas }) {
  const navigate = useNavigate()
  const [categoria, setCategoria] = useState([])

  useEffect(() => {
    if (peliculas.length > 0) {
      const categoriasUnicas = [...new Set(peliculas.map(p => p.gender))]
      setCategoria(categoriasUnicas)
    }
  }, [peliculas])

  function handleCategoriaClick(categoria) {
    navigate (`/categoria/${encodeURIComponent(categoria)}`)
  }

  
  return (
    <Container fluid className="p-0">
      {/* He comentado el carrusel porque 'ExampleCarouselImage' no está definido.
          Puedes descomentarlo cuando crees ese componente. */}
      {/* <section>
        <Carousel>
          <Carousel
          .Item>
            <img className="d-block w-100" src="https://via.placeholder.com/800x400" alt="First slide" />
          </Carousel.Item>
        </Carousel>
      </section> */}
      <Container className="my-5">
        <h5>Explorar Categoría</h5>
        <div className="mb-4">
          <div className="d-flex flex-wrap gap-2">
            {categoria.length > 0 ? (
              categoria.map((cat) => 
              <Button 
              key={cat}
              variant="secondary"
              onClick={() => handleCategoriaClick(cat)}
              className="mb-2"
              >
                {cat}
              </Button>
            )
          ) : (
            <>
            <ButtonGroup aria-label="Basic example">
            <Button variant="secondary" onClick={() => handleCategoriaClick("Accion")}>Accion</Button>
            <Button variant="secondary" onClick={() => handleCategoriaClick("Comedia")}>Comedia</Button>
            <Button variant="secondary" onClick={() => handleCategoriaClick("Ciencia Ficcion")}>Ciencia Ficcion</Button>
            <Button variant="secondary" onClick={() => handleCategoriaClick("Drama")}>Drama</Button>
            <Button variant="secondary" onClick={() => handleCategoriaClick("Terror")}>Terror</Button>
            <Button variant="secondary" onClick={() => handleCategoriaClick("Thriller")}>Thriller</Button>
            <Button variant="secondary" onClick={() => handleCategoriaClick("Animacion")}>Animacion</Button>
          </ButtonGroup>

            </>
          )}
          </div>
        </div>
        <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
          {peliculas.length > 0 ? (
            peliculas.map((pelicula) => (
            <Col key={pelicula.id}>
                <Card className="h-100 bg-dark text-white border-secondary">
                    <Card.Img variant="top" src={pelicula.poster} alt={pelicula.titulo}/>
                    <Card.Body>
                        <Card.Title className="fs-6">
                            {pelicula.titulo}
                        </Card.Title>
                        <Card.Text className="text-muted">
                            {pelicula.año} {pelicula.gender}
                        </Card.Text>
                    </Card.Body> 
                </Card>
            </Col> 
            ))
          ) : (
            <p className="text-center text-white col-12">No hay películas disponibles.</p>
          )}
        </Row>
      </Container>
    </Container>
  );
}

export default Home;