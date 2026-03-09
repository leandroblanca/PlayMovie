import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Nav.css";
import logo from "../../src/assets/logo.png"; 

function NavBar() {
  return (
    <Navbar variant="dark" expand="lg" className="px-3 navbar-netflix">
      <Container fluid>
        {/* Logo */}
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img
            src={logo}
            alt="PlayMovie Logo"
            style={{
              height: "50px",
              marginRight: "8px",
              borderRadius: "6px",
            }}
          />
          <span style={{ color: "white", fontWeight: "bold" }}>PlayMovie</span>
        </Navbar.Brand>

        {/* Toggle para pantallas chicas */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          {/* Links principales alineados a la derecha */}
          <Nav className="ms-auto" style={{ color: "white", fontWeight: "bold" }}>
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