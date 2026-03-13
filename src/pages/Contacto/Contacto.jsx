import React, { useState } from "react";
import { Col, Container, Form, Row, Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faEnvelope,
  faHeadset,
  faShareNodes,
  faVideo,
  faMedal,
} from "@fortawesome/free-solid-svg-icons";
import "./Contacto.css";
import "@fontsource/poppins";

const Contacto = () => {
  const soporteData = [
    {
      id: 1,
      icono: faEnvelope,
      titulo: "Soporte por Correo",
      descripcion:
        "Nuestro equipo responde usualmente dentro de las 24 horas.",
      email: "support@playmovie.com",
    },
    {
      id: 2,
      icono: faHeadset,
      titulo: "Centro de Ayuda",
      descripcion:
        "Explora nuestra documentación para respuestas rápidas.",
      enlace: {
        texto: "Visitar Centro de Ayuda →",
        url: "/centro-de-ayuda",
      },
    },
  ];

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [consulta, setConsulta] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const nombreRegex = /^[A-Za-z\s]{3,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let errorMsg = "";

    if (!nombre || !email || !consulta || !mensaje) {
      errorMsg = "Todos los campos son obligatorios";
    } else if (!nombreRegex.test(nombre)) {
      errorMsg = "El nombre solo puede tener letras";
    } else if (!emailRegex.test(email)) {
      errorMsg = "Email inválido";
    } else if (mensaje.length < 10) {
      errorMsg = "El mensaje debe tener al menos 10 caracteres";
    }

    if (errorMsg) {
      setError(errorMsg);
      return;
    }

    setError("");
    alert("Mensaje enviado correctamente");

    setConsulta("");
    setMensaje("");
    setNombre("");
    setEmail("");
  };

  return (
    <Container className="my-5" data-bs-theme="dark">
      <Row className="mb-4 text-center text-md-start">
        <Col>
          <h2 className="fs-1 fw-bold">
            Ponte en <span className="text-danger">Contacto.</span>
          </h2>
          <h5>
            ¿Tienes alguna pregunta sobre tu suscripción o una sugerencia de
            película?
            <br />
            Estamos aquí para ayudarte a obtener la mejor experiencia de
            streaming.
          </h5>
        </Col>
      </Row>

      <Row className="mt-4">
        {/* FORMULARIO */}
        <Col xs={12} md={6} className="mb-4">
          <div className="form-contacto p-4 p-md-5 rounded-5">
            <Form onSubmit={handleSubmit} className="d-flex flex-column">
              <Row>
                <Col xs={12} md={6}>
                  <Form.Group className="mb-4">
                    <Form.Label>Nombre Completo</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ingresa tu nombre completo"
                      required
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                    />
                  </Form.Group>
                </Col>

                <Col xs={12} md={6}>
                  <Form.Group className="mb-4">
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="nombre@ejemplo.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-4">
                <Form.Label>Tipo de Consulta</Form.Label>
                <Form.Select
                  required
                  value={consulta}
                  onChange={(e) => setConsulta(e.target.value)}
                >
                  <option value="" disabled>
                    Selecciona una opción
                  </option>
                  <option>Soporte técnico</option>
                  <option>Facturación</option>
                  <option>Recomendaciones de películas</option>
                  <option>Problemas con la cuenta</option>
                  <option>Otros</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Escribe tu mensaje aquí..."
                  required
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                />
              </Form.Group>

              <div className="d-flex flex-column align-items-center gap-3">
                {error && <p className="text-danger text-center">{error}</p>}

                <Button size="lg" variant="danger" type="submit">
                  Enviar Mensaje
                </Button>
              </div>
            </Form>
          </div>
        </Col>

        {/* SOPORTE */}
        <Col
          xs={12}
          md={6}
          className="d-flex flex-column align-items-center align-items-md-start"
        >
          <div>
            {soporteData.map((soporte) => (
              <Card
                key={soporte.id}
                className="mb-3 border-0 bg-transparent"
                style={{ maxWidth: "24rem" }}
              >
                <Card.Body>
                  <FontAwesomeIcon
                    icon={soporte.icono}
                    className="mb-3 fs-1 text-danger"
                  />
                  <Card.Title>{soporte.titulo}</Card.Title>

                  <Card.Text>
                    {soporte.descripcion}
                    <br />

                    {soporte.enlace ? (
                      <a
                        className="text-danger text-decoration-none fw-bold"
                        href={soporte.enlace.url}
                      >
                        {soporte.enlace.texto}
                      </a>
                    ) : (
                      <a
                        className="text-danger text-decoration-none fw-bold"
                        href={`mailto:${soporte.email}`}
                      >
                        {soporte.email}
                      </a>
                    )}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>

          {/* FOLLOW US */}
          <div className="mt-4 text-center text-md-start">
            <p className="text-secondary small fw-bold">Follow Us</p>

            <div className="d-flex gap-3 flex-wrap justify-content-center justify-content-md-start">
              <div className="follow-us d-flex justify-content-center align-items-center rounded-circle text-light">
                <FontAwesomeIcon icon={faMedal} />
              </div>

              <div className="follow-us d-flex justify-content-center align-items-center rounded-circle text-light">
                <FontAwesomeIcon icon={faShareNodes} />
              </div>

              <div className="follow-us d-flex justify-content-center align-items-center rounded-circle text-light">
                <FontAwesomeIcon icon={faCamera} />
              </div>

              <div className="follow-us d-flex justify-content-center align-items-center rounded-circle text-light">
                <FontAwesomeIcon icon={faVideo} />
              </div>
            </div>
          </div>

          {/* MAPA */}
          <div className="mt-4 mapa w-100">
            <iframe
              className="rounded-5 w-100"
              src="https://www.google.com/maps?q=Rolling+Code+School+Tucuman&output=embed"
              height="250"
              style={{ border: 0 }}
              loading="lazy"
              title="mapa"
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contacto;