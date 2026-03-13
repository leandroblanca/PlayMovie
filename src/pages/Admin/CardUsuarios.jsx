import { Card, Col, Container, Row, ListGroup, Badge, Button } from "react-bootstrap";
import React from "react";
import { FaPen, FaTrash } from "react-icons/fa";


const CardUsuarios = ({ usuarios, registroSistema , editarUsuario, eliminarUsuario, guardarUsuario }) => {
  return (
    <Container>
      <Row className="my-5 g-4">

       
        <Col xs={12} lg={8}>
          <Card className="usuarios-card h-100 border-0 shadow-sm rounded-4">
            <Card.Body>

              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="fw-bold">Gestión de Usuarios</h5>
                <span className="text-danger">Ver todos los usuarios</span>
              </div>

              <ListGroup variant="flush">

                {usuarios?.map((usuario) => (
                  <ListGroup.Item
                    key={usuario.id}
                    className="d-flex justify-content-between align-items-center usuario-item"
                  >
                    <div className="d-flex align-items-center gap-3">

                      {/* Avatar */}
                      <div
                        className="avatar rounded-circle bg-danger text-white d-flex justify-content-center align-items-center"
                        style={{ width: "40px", height: "40px", fontWeight: "bold" }}
                      >
                        {usuario.nombre?.charAt(0)}
                      </div>

                      <div>
                        <div className="fw-bold">{usuario.nombre}</div>
                        <div className="text-muted small">{usuario.email}</div>
                        <div className="text-muted small">{usuario.rol}</div>
                      </div>

                    </div>

                    <div className="text-end">

                      <div className="text-muted small">
                        Último acceso: {usuario.ultimoAcceso}
                      </div>

                      <Badge bg={!usuario.estado ? "danger" : "secondary"}>
                        {usuario.estado ? "Activo" : "Inactivo"}
                      </Badge>
                      <div className="d-flex gap-2">

                       <button className="btn  btn-sm" onClick={() => {
                         const nuevoNombre = prompt("Ingrese el nuevo nombre:", usuario.nombre);
                         if (nuevoNombre) editarUsuario(usuario.id, nuevoNombre);
                       }}>
                         <FaPen />
                       </button>
                       
                       <button className="btn  btn-sm" onClick={() => eliminarUsuario(usuario.id)}>
                         <FaTrash />
                       </button>
                       
                       </div>
                       
                       
                    </div>

                  </ListGroup.Item>
                ))}
                

              </ListGroup>
              

            </Card.Body>
            
          </Card>
        </Col>

        {/* CARD REGISTRO DEL SISTEMA */}
        <Col xs={12} lg={4}>
          <Card className="registro-card h-100 border-0 shadow-sm rounded-4">
            <Card.Body>

              <h5 className="fw-bold mb-4">Registro del Sistema</h5>

              {registroSistema?.map((registro) => (
                <div
                  key={registro.id}
                  className="registro-item d-flex flex-column mb-3"
                >
                  <div className="d-flex align-items-center gap-2">

                    <div
                      className="registro-icon rounded-circle"
                      style={{
                        background: registro.color,
                        width: "12px",
                        height: "12px"
                      }}
                    ></div>

                    <div>
                      <div className="fw-bold">{registro.titulo}</div>
                      <div className="text-muted small">{registro.categoria}</div>
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
  );
};

export default CardUsuarios;