import React, { useState } from "react"
import { Container, Row, Col, Card, Button, Carousel} from "react-bootstrap";
import categorias from "../../data/categories";
import { useNavigate } from "react-router";
import './home.css';
import ModalPelicula from "./ModalHome"

function Home({ peliculas }) {
  const navigate = useNavigate();
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



