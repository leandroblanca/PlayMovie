import React, { useState } from "react";
import { Col, Container, Form, Row, Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

import {
  faCamera,
  faEnvelope,
  faHeadset,
  faShareNodes,
  faVideo,
  faMedal,
} from "@fortawesome/free-solid-svg-icons";
import "../Contacto/Contacto.css";

const Contacto = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [consulta, setConsulta] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviando, setEnviando] = useState(false);

  const soporteData = [
    {
      id: 1,
      icono: faEnvelope,
      titulo: "Soporte por Correo",
      descripcion: "Nuestro equipo responde usualmente dentro de las 24 horas.",
      email: "support@playmovie.com",
    },
    {
      id: 2,
      icono: faHeadset,
      titulo: "Centro de Ayuda",
      descripcion: "Explora nuestra documentación para respuestas rápidas.",
      enlace: { texto: "Visitar Centro de Ayuda →", url: "/centro-de-ayuda" },
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nombre.trim() || !email.trim() || !consulta || !mensaje.trim()) {
      toast.warning("Todos los campos son obligatorios");
      return;
    }
    if (nombre.length < 3 || nombre.length > 40) {
      toast.error("El nombre debe tener entre 3 y 40 caracteres");
      return;
    }
    if (!nombreRegex.test(nombre)) {
      toast.error("El nombre solo puede contener letras");
      return;
    }
    if (!emailRegex.test(email)) {
      toast.error("Email inválido");
      return;
    }
    if (mensaje.length < 10 || mensaje.length > 300) {
      toast.error("El mensaje debe tener entre 10 y 300 caracteres");
      return;
    }

    setEnviando(true);

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      name: nombre,
      email: email,
      title: consulta,
      message: mensaje,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        
        toast.success("¡Mensaje enviado con éxito! Revisaremos tu consulta pronto.");
        setNombre("");
        setEmail("");
        setConsulta("");
        setMensaje("");
      })
      .catch((err) => {
        toast.error("Hubo un problema al enviar el correo.");
      })
      .finally(() => {
        setEnviando(false);
      });
  };

  return (
    <Container className="py-4 py-md-5" data-bs-theme="dark">

      <ToastContainer theme="dark" position="bottom-right" />

      <Row className="mt-4 contacto-row">
        <Col>
          <h2 className="display-4 fw-bold text-light">
            Ponte en <span className="text-danger">Contacto.</span>
          </h2>
          <p className="lead text-secondary">Estamos aquí para ayudarte a obtener la mejor experiencia de streaming.</p>
        </Col>
      </Row>

      <Row className="g-5 mt-2">
        <Col xs={12} lg={7}>
          <div className="form-contacto p-3 p-sm-4 p-md-5 rounded-5 shadow h-100">
            <Form onSubmit={handleSubmit} className="d-flex flex-column">
              <Row>
                <Col xs={12} sm={6}>
                  <Form.Group className="mb-4">
                    <Form.Label>Nombre Completo</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ej: Juan Pérez"
                      value={nombre}
                      onChange={(e) => {
                        const val = e.target.value;
                        if (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/.test(val)) {
                          setNombre(val);
                        }
                      }}
                      minLength={3}
                      maxLength={25}
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} sm={6}>
                  <Form.Group className="mb-4">
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="nombre@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      maxLength={25}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-4">
                <Form.Label>Tipo de Consulta</Form.Label>
                <Form.Select
                  value={consulta}
                  onChange={(e) => setConsulta(e.target.value)}
                >
                  <option value="" disabled>Selecciona una opción</option>
                  <option>Soporte técnico</option>
                  <option>Facturación</option>
                  <option>Recomendaciones</option>
                  <option>Otros</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="¿En qué podemos ayudarte?"
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  minLength={10}
                  maxLength={80}
                />
              </Form.Group>

                <Button 
                  size="lg" 
                  variant="danger" 
                  type="submit" 
                  className=" py-3 fw-bold text-center w-100 d-flex justify-content-center align-items-center"
                  disabled={enviando}
                >
                  {enviando ? "Enviando..." : "Enviar Mensaje"}
                </Button>
             
            </Form>
          </div>
        </Col>

        <Col xs={12} lg={5} className="d-flex flex-column">
          <div>
            {soporteData.map((soporte) => (
              <Card key={soporte.id} className="mb-3 border-0 bg-transparent">
                <Card.Body>
                  <FontAwesomeIcon icon={soporte.icono} className="mb-3 fs-1 text-danger" />
                  <Card.Title>{soporte.titulo}</Card.Title>
                  <Card.Text className="text-secondary">
                    {soporte.descripcion} <br />
                    <a className="text-danger text-decoration-none fw-bold" href={soporte.enlace ? soporte.enlace.url : `mailto:${soporte.email}`}>
                      {soporte.enlace ? soporte.enlace.texto : soporte.email}
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>

          <div className="mt-auto pt-4 w-100">
            <p className="text-secondary small fw-bold text-uppercase">Follow Us</p>
            <div className="d-flex gap-3">
              {[faMedal, faShareNodes, faCamera, faVideo].map((icon, idx) => (
                <div key={idx} className="follow-us d-flex justify-content-center align-items-center rounded-circle text-light shadow-sm">
                  <FontAwesomeIcon icon={icon} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 mapa w-100">
            <iframe
              className="rounded-5 w-100 shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093643!2d144.95373531531615!3d-37.816279742021234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sau!4v1620223035343!5m2!1sen!2sau"
              height="250"
              style={{ border: 0, filter: 'grayscale(1) invert(1) opacity(0.7)' }}
              allowFullScreen=""
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