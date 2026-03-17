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
