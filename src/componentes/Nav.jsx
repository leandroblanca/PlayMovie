import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
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
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/pelicula">Detalle Pelicula</Nav.Link>
            <Nav.Link as={Link} to="/series">Series</Nav.Link>
            <Nav.Link as={Link} to="/aboutus">AboutUs</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;