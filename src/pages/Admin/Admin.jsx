import { Button, Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar"
import TablaPeliculas from "./TablaPeliculas";
import ModalAdmin from "./ModalAdmin";
import CardsUsuarios from "./CardUsuarios.jsx";
import { registroSistema } from "./ObjetosAdmin.jsx";
import peliculasIniciales from "../../data/movies.js";
import { useNavigate } from "react-router";
import { usuariosIniciales } from "../../helpers/users.js";
import "./Admin.css";

function Admin() {
  const navigate = useNavigate();
  const [usuarios, setUsuarios] = useState(() => {
    const usuariosGuardados = localStorage.getItem("usuarios");
    return usuariosGuardados ? JSON.parse(usuariosGuardados) : usuariosIniciales;
  });
  const [peliculas, setPeliculas] = useState(() => {
    const guardadas = localStorage.getItem("peliculas");
    return guardadas ? JSON.parse(guardadas) : peliculasIniciales;
  });

  const [show, setShow] = useState(false);
  const [titulo, setTitulo] = useState("");
  const [anio, setAnio] = useState("");
  const [poster, setPoster] = useState("");
  const [editarId, setEditarId] = useState(null);
  const [busqueda, setBusqueda] = useState("");
  const handleShow = () => setShow(true);

  const registrarUsuario = (nombre) => {

    const nuevoUsuario = {
      id: crypto.randomUUID(),
      nombre,
      estado: "ACTIVO",
      ultimoAcceso: "ahora"
    };

    setUsuarios([...usuarios, nuevoUsuario]);
  };

  const eliminarUsuario = (id) => {
    const nuevosUsuarios = usuarios.filter(u => u.id !== id);
    setUsuarios(nuevosUsuarios);
    localStorage.setItem("usuarios", JSON.stringify(nuevosUsuarios));
  };

  const editarUsuario = (id, nuevoNombre) => {

    const usuariosActualizados = usuarios.map(usuario =>
      usuario.id === id
        ? { ...usuario, nombre: nuevoNombre }
        : usuario
    );

    setUsuarios(usuariosActualizados);
    localStorage.setItem("usuarios", JSON.stringify(usuariosActualizados));
  };

  useEffect(() => {
    localStorage.setItem("peliculas", JSON.stringify(peliculas));
  }, [peliculas]);


  const guardarPelicula = () => {

    if (!editarId) {

      const nuevaPelicula = {
        id: crypto.randomUUID(),
        titulo,
        anio,
        poster
      };

      setPeliculas([...peliculas, nuevaPelicula]);

    } else {

      const peliculasActualizadas = peliculas.map(pelicula =>
        pelicula.id === editarId
          ? { ...pelicula, titulo, anio, poster }
          : pelicula
      );

      setPeliculas(peliculasActualizadas);
      setEditarId(null);
    }

    setTitulo("");
    setAnio("");
    setPoster("");
    setShow(false);
  };


  const eliminarPelicula = (id) => {
    const nuevasPeliculas = peliculas.filter(p => p.id !== id);
    setPeliculas(nuevasPeliculas);
  };

  const editarPelicula = (id) => {

    const pelicula = peliculas.find(p => p.id === id);

    setTitulo(pelicula.titulo);
    setAnio(pelicula.anio);
    setPoster(pelicula.poster);

    setEditarId(id);
    setShow(true);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    guardarPelicula();
  };


  const handleClose = () => {
    setShow(false);
    setEditarId(null);
    setTitulo("");
    setAnio("");
    setPoster("");
  };

  const peliculasFiltradas = peliculas.filter(p =>
    p.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  const cerrarSesion = () => {
    sessionStorage.removeItem("usuarioLogueado");
    navigate("/login");
  };

  return (
    <>
      <Button variant="danger" onClick={cerrarSesion}>
        Cerrar sesión
      </Button>

      <Container fluid className="min-vh-100">

        <Row>

          <Col xs={12} md={3} lg={2} className="p-0 bg-dark">
            <Sidebar />

            <div className="p-3">
              <Button
                variant="danger rounded-5 fw-bold"
                onClick={handleShow}
                className="shadow w-100"
              >
                + Añadir Pelicula
              </Button>
            </div>
          </Col>


          <Col md={10} className="p-4">

            <TablaPeliculas
              editarPelicula={editarPelicula}
              eliminarPelicula={eliminarPelicula}
              peliculasFiltradas={peliculasFiltradas}
            />

            <ModalAdmin
              show={show}
              handleClose={handleClose}
              editarId={editarId}
              titulo={titulo}
              setTitulo={setTitulo}
              anio={anio}
              setAnio={setAnio}
              poster={poster}
              setPoster={setPoster}
              onSubmit={onSubmit}
            />

            <CardsUsuarios
              usuarios={usuarios}
              registrarUsuario={registrarUsuario}
              eliminarUsuario={eliminarUsuario}
              editarUsuario={editarUsuario}
              registroSistema={registroSistema}
            />

          </Col>

        </Row>

      </Container>
    </>
  );
}

export default Admin;