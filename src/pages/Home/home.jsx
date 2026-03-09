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
          <Container className="mt-5 ">
           <h5>Explorar Categoria</h5>
                    <div className="col-3">
                     {(buttonCategoria.map((categoria) => (
                     <button
                     key={categoria.id}
                     className=""
                     onClick={() => (`Filtrar por: ${buttonCategoria.nombre}`)}>
                     {buttonCategoria}
                     </button> 
                     )))}
                    </div>
                    <Row>
                        {peliculas.length > 0 ? (
                            peliculas.map((peliculas) => (
                            p
                            )) 
                        ) : (
                        <p className="text-center"> No hay peliculas disponibles. </p>

                        )}
                    </Row>
      </Container>
    </>
  );
}
