import React from 'react'
import { Col, Container, Form, Row, Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHeadset } from '@fortawesome/free-solid-svg-icons';

const Contacto = () => {
    const soporteData = [
  {
    id: 1,
    icono: faEnvelope,
    titulo: 'Soporte por Correo',
    descripcion: 'Our team usually responds within 24 hours.',
    email: 'support@playmovie.com',
  },
  {
    id: 2,
    icono: faHeadset,
    titulo: 'Centro de Ayuda',
    descripcion: 'Browse our documentation for quick answers.',
    enlace: {
      texto: 'Visitar Centro de Ayuda →',
      url: '/centro-de-ayuda',
    },
  },
];


  return (
    <Container className="my-5">
        <Row className="mb-4">
            <Col>
            <h2 className='fs-1 fw-bold'>Ponte en <span className='text-danger '>Contacto.</span></h2>
            <h5>¿Tienes alguna pregunta sobre tu suscripción o una sugerencia de película? Estamos aquí para ayudarte a obtener la mejor experiencia de streaming.</h5>
            </Col>
        </Row>
        <Row>
             <Col md={6}>
           <Form>

              <Form.Group className="mb-3" controlId="formFullName">
                <Form.Label>Nombre Completo</Form.Label>
                <Form.Control type="text" placeholder="Ingresa tu nombre completo" />
              </Form.Group>
            
            
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control type="email" placeholder="nombre@ejemplo.com" />
              </Form.Group>
            
            
              <Form.Group className="mb-3" controlId="formQueryType">
                <Form.Label>Tipo de Consulta</Form.Label>
                <Form.Select defaultValue="Selecciona una opción">
                  <option disabled>Selecciona una opción</option>
                  <option>Soporte técnico</option>
                  <option>Facturación</option>
                  <option>Recomendaciones de películas</option>
                  <option>Problemas con la cuenta</option>
                  <option>Otros</option>
                </Form.Select>
              </Form.Group>
            
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Escribe tu mensaje aquí..." />
              </Form.Group>
            <div className='d-flex justify-content-center align-items-center'>
                  <Button size="lg" variant="danger" type="submit">
                Enviar Mensaje
              </Button>
            </div>
            
            </Form>
             </Col>
             <Col md={6}>
             {soporteData.map(soporte => (
                 <Card key={soporte.id} style={{ width: '18rem' }} className="mb-3 border-0">
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
              
             </Col>
        </Row>
    </Container>
  )
}

export default Contacto;
