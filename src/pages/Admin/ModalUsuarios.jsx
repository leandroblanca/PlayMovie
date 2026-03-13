import { Button, Modal, Form } from "react-bootstrap";
import "./Admin.css";
import React from "react";

const ModalUsuarios = ({
  show,
  handleClose,
  editarId,
  nombre,
  setNombre,
  email,
  setEmail,
  rol,
  setRol,
  estado,
  setEstado,
  onSubmit
}) => {
  return (
    <div className="mt-4">

      <Modal show={show} onHide={handleClose}>
        
        <Modal.Header closeButton>
          <Modal.Title>
            {editarId ? "Editar Usuario" : "Agregar Usuario"}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>

          <Form onSubmit={onSubmit}>

            {/* Nombre */}
            <Form.Control
              className="mb-3"
              type="text"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />

            {/* Email */}
            <Form.Control
              className="mb-3"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            {/* Rol */}
            <Form.Select
              className="mb-3"
              value={rol}
              onChange={(e) => setRol(e.target.value)}
            >
              <option value="">Seleccionar rol</option>
              <option value="Admin">Admin</option>
              <option value="Usuario">Usuario</option>
            </Form.Select>

            {/* Estado */}
            <Form.Select
              className="mb-3"
              // Convertimos el booleano a string para que el select lo reconozca
              value={estado ? "true" : "false"}
              onChange={(e) => setEstado(e.target.value === "true")}
            >
              <option value="true">Activo</option>
              <option value="false">Inactivo</option>
            </Form.Select>

            <Button variant="danger" type="submit">
              {editarId ? "Guardar Cambios" : "Agregar Usuario"}
            </Button>

          </Form>

        </Modal.Body>

      </Modal>

    </div>
  );
};

export default ModalUsuarios;