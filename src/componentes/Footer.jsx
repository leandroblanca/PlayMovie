import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import logo from "../assets/logo.png"; // tu logo

function Footer() {
  return (
    <footer className="footer-netflix bg-dark text-light pt-5 pb-3">
      <Container>
        {/* Logo y tagline */}
        <Row className="mb-4">
          <Col md={12} className="text-center">
            <img
              src={logo}
              alt="PlayMovie Logo"
              style={{ height: "50px", marginBottom: "10px" }}
            />
            <h5 className="fw-bold">PlayMovie</h5>
            <p className="text-secondary">
              El servicio de streaming cinematográfico líder en el mundo. <br />
              Vive el cine como debe ser visto.
            </p>
          </Col>
        </Row>

        {/* Columnas de navegación */}
        <Row className="mb-4 text-center">
          <Col md={4}>
            <h6 className="fw-bold">General</h6>
            <ul className="list-unstyled text-secondary">
              <li>Inicio</li>
              <li>Contacto</li>
              <li>Administración</li>
              <li>Mi Cuenta</li>
            </ul>
          </Col>
          <Col md={4}>
            <h6 className="fw-bold">Legal</h6>
            <ul className="list-unstyled text-secondary">
              <li>Términos de Servicio</li>
              <li>Política de Privacidad</li>
              <li>Información Corporativa</li>
              <li>Avisos Legales</li>
            </ul>
          </Col>
          <Col md={4}>
            <h6 className="fw-bold">Ayuda</h6>
            <ul className="list-unstyled text-secondary">
              <li>Centro de Ayuda</li>
              <li>Preguntas Frecuentes</li>
              <li>Formas de ver</li>
              <li>Preferencias de Cookies</li>
            </ul>
          </Col>
        </Row>

        {/* Redes sociales */}
        <Row className="justify-content-center mb-3">
          <Col md="auto">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mx-2">
              <FaFacebook size={28} color="gray" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mx-2">
              <FaInstagram size={28} color="gray" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mx-2">
              <FaTwitter size={28} color="gray" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="mx-2">
              <FaYoutube size={28} color="gray" />
            </a>
          </Col>
        </Row>

        {/* Copyright */}
        <Row>
          <Col md={12} className="text-center">
            <p className="text-secondary mb-0">
              © 2026 PlayMovie Inc. Todos los derechos reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;