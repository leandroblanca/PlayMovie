import { Button, Modal, Table, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import "./Admin.css";


function Admin() {
   const [show, setShow] = useState(false);
   const [peliculas, setPeliculas] = useState([]);
   const [titulo, setTitulo] = useState("");
   const [año, setAño] = useState("");
   const [poster, setPoster] = useState("");
   const [editarId, setEditarId] = useState(null);

   useEffect(() => {
    const peliculas = JSON.parse(localStorage.getItem("peliculas")) || [];
    setPeliculas(peliculas);
   }, []);
   useEffect(() => {
    localStorage.setItem("peliculas", JSON.stringify(peliculas));
  }, [peliculas]);

  const AgregarPelicula = () => {
    if(!editarId) {
      const nuevaPelicula = {
        id: crypto.randomUUID(),
        titulo,
        año,
        poster,
      };
      setPeliculas([...peliculas, nuevaPelicula]);
    } else {
       const peliculasActualizadas = peliculas.map((pelicula) =>
      pelicula.id === editarId
        ? { ...pelicula, titulo, año, poster }
        : pelicula
    );

    setPeliculas(peliculasActualizadas);
    setEditarId(null);
  }

  setTitulo("");
  setAño("");
  setPoster("");
  setShow(false);
  }
  const eliminarPelicula = (id) => {
    const nuevasPeliculas = peliculas.filter((pelicula => pelicula.id !== id));
    setPeliculas(nuevasPeliculas);
  }
  const editarPelicula = (id) => {
    const pelicula = peliculas.find((pelicula => pelicula.id === id));
    setTitulo(pelicula.titulo);
    setAño(pelicula.año);
    setPoster(pelicula.poster);
    setEditarId(id);
    setShow(true);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    AgregarPelicula();
  }

  const handleClose = () => {
    setShow(false);
    setEditarId(null);
    setTitulo("");
    setAño("");
    setPoster("");
  };
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Agregar pelicula
      </Button>

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
              onChange={(e) => setAño(e.target.value)}
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

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Año</th>
            <th>Poster</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {peliculas.map(pelicula => (
            <tr key={pelicula.id}>
              <td>{pelicula.id ? pelicula.id.slice(0, 8) : ''}</td>
              <td>{pelicula.titulo}</td>
              <td>{pelicula.año}</td>
              <td><img src={pelicula.poster} alt={pelicula.titulo} style={{width: '50px'}} /></td>
              <td>
                <Button variant="warning" size="sm" className="me-2" onClick={() => editarPelicula(pelicula.id)}>Editar</Button>
                <Button variant="danger" size="sm" onClick={() => eliminarPelicula(pelicula.id)}>Eliminar</Button>
              </td>
           </tr>
          )
          )}

        </tbody>
      </Table>
    </>
  );
}

export default Admin;