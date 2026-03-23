import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import logo from "../../../public/assets/logo.png";

function Footer() {
  return (
    <footer className="footer-netflix bg-dark text-light pt-5 pb-3">
      <Container>
       <Row className="mb-4 align-items-start">
  {/* Columna 1: logo + tagline */}
  <Col md={6} className="d-flex flex-column align-items-start">
    <div className="d-flex align-items-center gap-2">
      <img className="logoplaymovie" src={logo} alt="PlayMovie Logo" style={{ height: "50px" }} />
      <h5 className="fw-bold mb-0">PlayMovie</h5>
    </div>
    <p className="text-secondary mt-2">
      El servicio de streaming cinematográfico líder en el mundo. <br />
      Vive el cine como debe ser visto.
    </p>
  </Col>

  {/* Columna 2 */}
  <Col md={2} className="col2">
    <h6 className="text-white fw-bold">Explorar</h6>
    <ul className="list-unstyled text-secondary">
      <li>Nuevos Lanzamientos</li>
      <li>Popular</li>
      <li>Mejor Valoradas</li>
      <li>Próximamente</li>
    </ul>
  </Col>

  {/* Columna 3 */}
  <Col md={2} className="col3">
    <h6 className="text-white fw-bold">Plataforma</h6>
    <ul className="list-unstyled text-secondary">
      <li>Peliculas</li>
      <li>Series</li>
      <li>Documentales</li>
      <li>Originales</li>
    </ul>
  </Col>

  {/* Columna 4 */}
  <Col md={2} className="d-none d-md-block">
    <h6 className="text-white fw-bold">Soporte</h6>
    <ul className="list-unstyled text-secondary">
      <li>Centro de Ayuda</li>
      <li>Cuenta</li>
      <li>Privacidad</li>
      <li>Contacto</li>
    </ul>
  </Col>
  
</Row>
        {/* Redes sociales */}
        <Row className="justify-content-center mb-3">
          <Col md="auto">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mx-2 social-icon">
              <FaFacebook size={28} color="gray" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mx-2 social-icon">
              <FaInstagram size={28} color="gray" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mx-2 social-icon">
              <FaTwitter size={28} color="gray" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="mx-2 social-icon">
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
