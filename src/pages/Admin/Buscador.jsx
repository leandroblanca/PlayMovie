import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap';

const Buscador = ({ busqueda, setBusqueda }) => {
  return (
    <Container fluid className="min-vh-100">
      <Row>
      
        <Col xs={12} md={9} lg={10} className="p-4">
        
           <div className="mb-4">
        <Form className="d-flex gap-2 col-12 col-md-6">
          <Form.Control
            type="text"
            placeholder="Ej: Batman, Avatar..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </Form>
   
      </div>

</Col>
      </Row>
    </Container>
  )
}

export default Buscador;
