import { useNavigate, useParams } from "react-router";
import peliculas from "../../data/movies";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import "./categoria.css";
import { useState } from "react";
import ModalPelicula from "./ModalHome";
import { FaHeart, FaRegHeart } from "react-icons/fa";

function CategoriaPage() {
  const { gender } = useParams();
  const navigate = useNavigate();
  const generoDecodificado = decodeURIComponent(gender);
  const {esFavorito, agregarFavorito, eliminarFavorito} = useFavorito();

  const peliculasFiltradas = peliculas.filter(
    (peli) => peli.categorias === generoDecodificado,
  );
  const handleVolver = () => navigate("/home");
  const [selectMovie, setSelectMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);
  
    const handleShowModal = (pelicula) => {
    setSelectMovie(pelicula);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectMovie(null);
  };
  const toggleFavorito = (e, pelicula) => {
    e.stopPropagation();
    e.preventDefault();
    if (esFavorito(pelicula.id)) {
      eliminarFavorito(pelicula.id);
    } else {
      agregarFavorito(pelicula);
    }
  };
  return (
    <Container className="my-4">
      <div className="mb-4">
        <Button variant="outline-secondary" onClick={handleVolver}>
          Volver al inicio
        </Button>
      </div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-white">Peliculas de {generoDecodificado}</h2>
        <span className="text-muted">
          {peliculasFiltradas.length} {""}
          {peliculasFiltradas === 1
            ? "Peliculas encontrada"
            : "Peliculas encontradas"}
        </span>
      </div>
      {peliculasFiltradas.length === 0 ? (
        <div className="text-center text-white">
          <p className="mb-3"> No hay peliculas en esta categoria </p>
          <Button variant="secondary" onClick={handleVolver}>
            Ver otras categorias
          </Button>
        </div>
      ) : (
        <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
          {peliculasFiltradas.map((pelicula) => (
            <Col key={pelicula.id}>
              <Card className="h-100 bg-dark text-white border-secondary">
                <Card.Img
                  src={pelicula.poster}
                  alt={pelicula.titulo}
                  className="img-Categoria"
                />
                <Card.Body>
                  <Card.Title className="fs-6">{pelicula.titulo}</Card.Title>
                  <Button
                  variant="link"
                  className="p-0 text-danger btn-fav-home"
                  onClick={(e) => toggleFavorito(e, pelicula)}
                  >
                    {esFavorito(pelicula.id) ? <FaHeart /> : <FaRegHeart />}
                  </Button>
                  <Card.Text className="text-muted">{pelicula.anio}</Card.Text>
                  <span className="badge bg-secondary">
                    {pelicula.categorias}
                  </span>
                  <Button
                    className="bg-dark mt-3"
                    onClick={() => handleShowModal(pelicula)}
                  >
                    Ver mas
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
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
export default CategoriaPage;



