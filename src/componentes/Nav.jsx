import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-3">
      <Container fluid>
        {/* Logo */}
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <span style={{ color: "red", fontWeight: "bold", marginRight: "8px" }}>
            🎬
          </span>
          <span style={{ color: "white", fontWeight: "bold" }}>PlayMovie</span>
        </Navbar.Brand>

        {/* Toggle para pantallas chicas */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          {/* Links principales alineados a la derecha */}
          <Nav className="ms-auto">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#peliculas">Películas</Nav.Link>
            <Nav.Link href="#series">Series</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;