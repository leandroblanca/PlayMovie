import React, { useState } from 'react'
import { Col, Container, Form, Row, Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faEnvelope, faHeadset, faShareNodes, faVideo, faMedal} from "@fortawesome/free-solid-svg-icons";
import "./Contacto.css";

const Contacto = () => {
    const soporteData = [
  {
    id: 1,
    icono: faEnvelope,
    titulo: 'Soporte por Correo',
    descripcion: 'Nuestro equipo responde usualmente dentro de las 24 horas.',
    email: 'support@playmovie.com',
  },
  {
    id: 2,
    icono: faHeadset,
    titulo: 'Centro de Ayuda',
    descripcion: 'Explora nuestra documentación para respuestas rápidas.',
    enlace: {
      texto: 'Visitar Centro de Ayuda →',
      url: '/centro-de-ayuda',
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
  } 
  else if (!nombreRegex.test(nombre)) {
    errorMsg = "El nombre solo puede tener letras";
  } 
  else if (!emailRegex.test(email)) {
    errorMsg = "Email inválido";
  } 
  else if (mensaje.length < 10) {
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
        <Row className="mb-4">
            <Col>
            <h2 className='fs-1 fw-bold'>Ponte en <span className='text-danger '>Contacto.</span></h2>
            <h5>¿Tienes alguna pregunta sobre tu suscripción o una sugerencia de película? <br /> Estamos aquí para ayudarte a obtener la mejor experiencia de streaming.</h5>
            </Col>
        </Row>
        <Row className='mt-5 h-100'>
             <Col md={6} className='mt-5 h-100'>
             <div className='form-contacto p-5 rounded-5'>
           <Form onSubmit={handleSubmit} className='vh-100 d-flex justify-content-center mt-0 flex-column'>
            <Row>
              <Col>
               <Form.Group className="mb-5 w-100" controlId="formFullName">
                <Form.Label>Nombre Completo</Form.Label>
                <Form.Control type="text" placeholder="Ingresa tu nombre completo" required minLength={8} maxLength={250} value={nombre}
  onChange={(e) => setNombre(e.target.value)} />
              </Form.Group>
              </Col>
              <Col>
               <Form.Group className="mb-5 w-100" controlId="formEmail">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control type="email" placeholder="nombre@ejemplo.com" minLength={8} maxLength={250} required value={email}
  onChange={(e) => setEmail(e.target.value)}/>
              </Form.Group>
              </Col>
            </Row>         
            
              <Form.Group className="mb-5" controlId="formQueryType">
                <Form.Label>Tipo de Consulta</Form.Label>
                <Form.Select required minLength={8} maxLength={250} value={consulta}
  onChange={(e) => setConsulta(e.target.value)} defaultValue="Selecciona una opción">
                  <option disabled>Selecciona una opción</option>
                  <option>Soporte técnico</option>
                  <option>Facturación</option>
                  <option>Recomendaciones de películas</option>
                  <option>Problemas con la cuenta</option>
                  <option>Otros</option>
                </Form.Select>
              </Form.Group>
            
              <Form.Group  className="mb-5" controlId="formMessage">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Escribe tu mensaje aquí..." required minLength={8} maxLength={250} value={mensaje}
  onChange={(e) => setMensaje(e.target.value)}/>
              </Form.Group>
            <div className='d-flex justify-content-center align-items-center'>
              {error && <p className="text-danger">{error}</p>}
                  <Button size="lg" variant="danger" type="submit">
                Enviar Mensaje
              </Button>
            </div>
            
            </Form>
            </div>
             </Col>
             <Col md={6} className='mt-5 d-flex flex-column align-items-start mx-auto h-100'>
             <div>
             {soporteData.map(soporte => (
                 <Card key={soporte.id} className="mb-3 border-0" style={{ maxWidth: '24rem' }}>
                <Card.Body>
                    <FontAwesomeIcon icon={soporte.icono} className="mb-3 fs-1 text-danger" />
                  <Card.Title>{soporte.titulo}</Card.Title>
                  <Card.Text>
                    {soporte.descripcion} <br />
                    {soporte.enlace ? (
                      <a className='text-danger text-decoration-none fw-bold' href={soporte.enlace.url}>{soporte.enlace.texto}</a>
                    ) : (
                      <a className='text-danger text-decoration-none fw-bold' href={`mailto:${soporte.email}`}>{soporte.email}</a>
                    )}
                  </Card.Text>
                </Card.Body>
              </Card>

             ))}
             </div>
              <div className="mt-4">
              <p className="text-secondary small fw-bold">Follow Us</p>
            
              <div className=" d-flex gap-3">
                
                <div className=" follow-us d-flex justify-content-center align-items-center rounded-circle  text-light"
                     style={{width:"45px", height:"45px"}}>
                  <FontAwesomeIcon icon={faMedal} />
                </div>
            
                <div className=" follow-us d-flex justify-content-center align-items-center rounded-circle text-light"
                     style={{width:"45px", height:"45px"}}>
                  <FontAwesomeIcon icon={faShareNodes} />
                </div>
            
                <div className=" follow-us d-flex justify-content-center align-items-center rounded-circle  text-light"
                     style={{width:"45px", height:"45px"}}>
                  <FontAwesomeIcon icon={faCamera} />
                </div>
            
                <div className="follow-us d-flex justify-content-center align-items-center rounded-circle text-light"
                     style={{width:"45px", height:"45px"}}>
                  <FontAwesomeIcon icon={faVideo} />
                </div>
            
              </div>
            </div>

             <div className='mt-4 mapa w-100 '>
              <iframe className='rounded-5'
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.987654321!2d-65.2154321!3d-26.8181234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941358c2d1234567%3A0xabcdef1234567890!2sRolling%20Code%20School%2C%20General%20Paz%20576%2C%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n%2C%20Argentina!5e0!3m2!1ses-419!2sar!4v1700000000000!5m2!1ses-419!2sar"
               width="100%"
               height="300"
               style={{ border: 0 }}
               allowFullScreen
               loading="lazy"
               referrerPolicy="no-referrer-when-downgrade">
             </iframe>

             </div>
             
          
             </Col>
        </Row>
    </Container>
  )
};

export default Contacto;
