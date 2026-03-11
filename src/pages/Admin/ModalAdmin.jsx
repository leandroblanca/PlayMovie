import { Button, Modal, Form } from "react-bootstrap";
import "./Admin.css";
import React from 'react'

const ModalAdmin = ({show, handleClose, editarId, titulo, setTitulo, anio, setAnio, poster, setPoster, onSubmit}) => {
  return (
    <div className="mt-4">
       
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editarId ? "Editar Película" : "Agregar Película"}</Modal.Title>
        </Modal.Header>

        <Modal.Body >
          <Form onSubmit={onSubmit}>
            <Form.Control className="mb-3"
              type="text"
              placeholder="Título"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              required
            />

            <Form.Control className="mb-3"
              type="text"
              placeholder="Año"
              value={anio}
              onChange={(e) => setAnio(e.target.value)}
              required
            />

            <Form.Control className="mb-3"
              type="text"
              placeholder="URL del poster"
              value={poster}
              onChange={(e) => setPoster(e.target.value)}
              required
            />

            <Button variant="danger" type="submit">
              {editarId ? "Guardar Cambios" : "Agregar"}
            </Button>
          </Form>
        </Modal.Body>

     
      </Modal>

    </div>
  )
}

export default ModalAdmin;
  