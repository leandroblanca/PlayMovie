import { Button, Modal, Table, Form } from "react-bootstrap";
import { useState } from "react";
import "./Admin.css";


function Admin() {
   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Agregar pelicula
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Pelicula</Modal.Title>
        </Modal.Header>

        <Modal.Body >
          <Form>
            <Form.Control className="mb-3"
              type="text"
              placeholder="Buscar película..."
            />

            <Form.Control className="mb-3"
              type="text"
              placeholder="Título"
            />

            <Form.Control className="mb-3"
              type="text"
              placeholder="Año"
            />

            <Form.Control className="mb-3"
              type="text"
              placeholder="URL del poster"
            />

          </Form>
            <Button variant="danger"type="submit">Agregar</Button>
        </Modal.Body>

     
      </Modal>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Título</th>
            <th>Año</th>
            <th>Poster</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody></tbody>
      </Table>
    </>
  );
}

export default Admin;