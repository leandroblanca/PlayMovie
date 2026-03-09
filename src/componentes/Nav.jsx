import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Nav.css";
import logo from "../assets/logo.png"; 

function NavBar() {
  return (
    <Navbar variant="dark" expand="lg" className="px-3 navbar-netflix">
      <Container fluid>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/home" className="d-flex align-items-center">
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
            <Nav.Link as={Link} to="/home">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;