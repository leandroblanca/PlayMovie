import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import Swal from "sweetalert2";
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

   
    if (!titulo.trim() || !anio.trim() || !poster.trim() || !categorias.trim() || !video.trim() || !descripcion.trim()) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Todos los campos son obligatorios",
        confirmButtonColor: "#dc3545",
      });
      return;
    }

  
    const urlRegex = /^(https?:\/\/)[^\s$.?#].[^\s]*$/;

    if (!urlRegex.test(poster)) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "El poster debe ser una URL válida (ej: https://...)",
        confirmButtonColor: "#dc3545",
      });
      return;
    }

    if (!urlRegex.test(video)) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "El video debe ser una URL válida (ej: https://...)",
        confirmButtonColor: "#dc3545",
      });
      return;
    }

    const anioNum = parseInt(anio);
    const currentYear = new Date().getFullYear();
    if (isNaN(anioNum) || anioNum < 1895 || anioNum > currentYear + 5) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: `El año debe ser un número válido entre 1895 y ${currentYear + 5}`,
        confirmButtonColor: "#dc3545",
      });
      return;
    }

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
              maxLength={100}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Año</Form.Label>
            <Form.Control
              type="number"
              placeholder="Año"
              value={anio}
              onChange={(e) => setAnio(e.target.value)}
              required
              min="1895"
              max={new Date().getFullYear() + 5}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Poster</Form.Label>
            <Form.Control
              type="url"
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
              maxLength={50}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Video</Form.Label>
            <Form.Control
              type="url"
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
              minLength={10}
              maxLength={500}
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