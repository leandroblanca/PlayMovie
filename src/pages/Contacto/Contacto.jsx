import React from 'react'
import { Col, Container, Form, Row, Button } from 'react-bootstrap';

const Contacto = () => {
  return (
    <Container className="my-5">
        <Row className="mb-4">
            <Col>
            <h2>Ponte en Contacto.</h2>
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
            
              <Button variant="danger" type="submit">
                Enviar Mensaje
              </Button>
            </Form>
             </Col>
             <Col md={6}>
                
             </Col>
        </Row>
    </Container>
  )
}

export default Contacto;
