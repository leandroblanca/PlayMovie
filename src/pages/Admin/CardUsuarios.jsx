import { Card, Col, Container, Row, ListGroup, Badge } from "react-bootstrap"
import React from 'react'


const CardUsuarios = ({usuarios, registroSistema}) => {
  return (
    <Container>
     <Row className="my-5 g-4"> 
    <Col xs={12} lg={8}>
    <Card className="usuarios-card h-100 border-0 shadow-sm rounded-4">

<Card.Body>

<div className="d-flex justify-content-between align-items-center mb-3">
<h5 className="fw-bold">Gestión de Usuarios</h5>
<span className="text-danger">Ver Todos los Usuarios</span>
</div>

<ListGroup variant="flush">

{usuarios.map((usuario) => (

<ListGroup.Item
key={usuario.id}
className="d-flex justify-content-between align-items-center usuario-item"
>

<div className="d-flex align-items-center gap-3">

<div className="avatar"></div>

<div>
<div className="fw-bold">{usuario.nombre}</div>
<div className="text-muted small">Usuarios Activos</div>
</div>

</div>

<div className="text-end">

<div className="text-muted small">
Último acceso: {usuario.ultimoAcceso}
</div>

<Badge bg={usuario.estado === "ACTIVO" ? "danger" : "secondary"}>
{usuario.estado}
</Badge>

</div>

</ListGroup.Item>

))}

</ListGroup>

</Card.Body>

</Card>
    </Col>
    <Col xs={12} lg={4}>
   <Card className="registro-card h-100 border-0 shadow-sm rounded-4">

<Card.Body>

<h5 className="fw-bold mb-4">Registro del Sistema</h5>

{registroSistema?.map((registro)=> (

<div
key={registro.id}
className="registro-item d-flex justify-content-start align-items-start flex-column"
>

<div className="d-flex align-items-center gap-2">
  

  <div
  className="registro-icon"
  style={{ background: registro.color }}
></div>


<div>

<div className="fw-bold">
{registro.titulo}
</div>

<div className="text-muted small">
{registro.categoria}
</div>

</div>

</div>

<div className="text-muted small ms-3">
{registro.hora}
</div>


</div>

))}

</Card.Body>

</Card> 
    </Col>
  </Row>

 </Container>
   
  )
}

export default CardUsuarios;

 
