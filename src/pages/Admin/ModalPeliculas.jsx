import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import "./Admin.css";

const ModalPeliculas = ({
  show,
  handleClose,
  editarId,
  titulo,
  setTitulo,
  anio,
  setAnio,
  poster,
  setPoster,
  categorias,
  setCategorias,
  video,
  setVideo,
  descripcion,
  setDescripcion,
  onSubmit,
}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <Modal show={show} onHide={handleClose} centered>

      <Modal.Header closeButton>
        <Modal.Title>
          {editarId ? "Editar Película" : "Agregar Película"}
        </Modal.Title>
      </Modal.Header>

      <Form onSubmit={handleSubmit}>
        <Modal.Body>

          <Form.Group className="mb-3">
            <Form.Label>Título</Form.Label>
            <Form.Control
              type="text"
              placeholder="Título"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Año</Form.Label>
            <Form.Control
              type="text"
              placeholder="Año"
              value={anio}
              onChange={(e) => setAnio(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Poster</Form.Label>
            <Form.Control
              type="text"
              placeholder="URL del poster"
              value={poster}
              onChange={(e) => setPoster(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Categoría</Form.Label>
            <Form.Control
              type="text"
              placeholder="Categoría"
              value={categorias}
              onChange={(e) => setCategorias(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Video</Form.Label>
            <Form.Control
              type="text"
              placeholder="URL del video"
              value={video}
              onChange={(e) => setVideo(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Descripción de la película"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              required
            />
          </Form.Group>

        </Modal.Body>

        <Modal.Footer>

          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>

          <Button variant="danger" type="submit">
            {editarId ? "Guardar Cambios" : "Agregar"}
          </Button>

        </Modal.Footer>

      </Form>

    </Modal>
  );
};

export default ModalPeliculas;