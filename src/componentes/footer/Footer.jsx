import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import logo from "../../../public/assets/logo.png";

function Footer() {
  const location = useLocation();
  const excludesPaths = ["/login", "/registro"];
  if (excludesPaths.includes(location.pathname)) {
    return null;
  }

  return (
    <footer className="footer-netflix bg-dark text-light pt-5 pb-3">
      <Container>
       <Row className="mb-4 align-items-start">
 
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

  
  <Col md={2} className="col2">
    <h6 className="text-white fw-bold">Explorar</h6>
    <ul className="list-unstyled text-secondary">
      <li><Link to="/error404" className="footer-link">Nuevos Lanzamientos</Link></li>
      <li><Link to="/error404" className="footer-link">Popular</Link></li>
      <li><Link to="/error404" className="footer-link">Mejor Valoradas</Link></li>
      <li><Link to="/error404" className="footer-link">Próximamente</Link></li>
    </ul>
  </Col>


  <Col md={2} className="col3">
    <h6 className="text-white fw-bold">Plataforma</h6>
    <ul className="list-unstyled text-secondary">
      <li><Link to="/" className="footer-link">Peliculas</Link></li>
      <li><Link to="/error404" className="footer-link">Series</Link></li>
      <li><Link to="/error404" className="footer-link">Documentales</Link></li>
      <li><Link to="/error404" className="footer-link">Originales</Link></li>
    </ul>
  </Col>


  <Col md={2} className="d-none d-md-block">
    <h6 className="text-white fw-bold">Soporte</h6>
    <ul className="list-unstyled text-secondary">
      <li><Link to="/ayuda" className="footer-link">Centro de Ayuda</Link></li>
      <li><Link to="/usuario" className="footer-link">Cuenta</Link></li>
      <li><Link to="/error404" className="footer-link">Privacidad</Link></li>
      <li><Link to="/contacto" className="footer-link">Contacto</Link></li>
    </ul>
  </Col>
  
</Row>
    
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
