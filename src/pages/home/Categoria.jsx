import { useNavigate, useParams } from "react-router";
import peliculas from "../../data/movies";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import "./categoria.css";
import { useState } from "react";
import ModalPelicula from "./ModalHome";

function CategoriaPage() {
  const { gender } = useParams();
  const navigate = useNavigate();
  const generoDecodificado = decodeURIComponent(gender);

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
  return (
    <Container className="my-4">
      <div className="mb-4">
        <Button variant="outline-secondary" onClick={handleVolver}>
          Volver al inicio
        </Button>
      </div>
