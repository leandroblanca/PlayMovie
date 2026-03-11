import { Button, Modal } from "react-bootstrap";
import { Form } from "react-router";
import React from 'react'

const ModalAdmin = ({AgregarPelicula, show, handleClose, editarId, titulo, setTitulo, año, setAño, poster, setPoster, onSubmit}) => {
  return (
    <>
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
              value={año}
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
<div className="p-3">
            <Button variant="danger rounded-5 fw-bold" onClick={handleShow} className="shadow w-100">
              + Añadir Pelicula
            </Button>
          </div>
</>
   
  )
}

export default ModalAdmin;



  