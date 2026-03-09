import React from "react";
import NavBar from "../../componentes/Nav";
import "./home.css";
import Footer from "../../componentes/Footer";
import { Container, Row } from "react-bootstrap";

function Home({ peliculas }) {
    const buttonCategoria = [
        {id: 1, nombre: "Accion"},
        {id: 2, nombre: "Comedia"},
        {id: 3, nombre: "Ciencia Ficcion"},
        {id: 4, nombre: "Drama"},
        {id: 5, nombre: "Terror"},
        {id: 6, nombre: "Thriller"},
        {id: 7, nombre: "Animacion"}
    ]
  return (
    <>
      <NavBar />
      <section>
        <Carousel>
          <Carousel.Item>
            <ExampleCarouselImage text="First slide" />
            <Carousel.Caption>
              <img src="" alt="" />
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
}
