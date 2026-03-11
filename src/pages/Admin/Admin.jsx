import { Button, Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import Sidebar from "../../componentes/Sidebar";
import TablaPeliculas from "./TablaPeliculas";
import ModalAdmin from "./ModalAdmin";
import CardsUsuarios from "./CardUsuarios.jsx";
import { usuariosIniciales, registroSistema } from "./ObjetosAdmin.jsx";
import { useNavigate } from "react-router";
import "./Admin.css";

function Admin() {

  const navigate = useNavigate();
  const [usuarios, setUsuarios] = useState([]);
  const [peliculas, setPeliculas] = useState(() => {
    const guardadas = localStorage.getItem("peliculas");
    return guardadas ? JSON.parse(guardadas) : [];
  });

  const [show, setShow] = useState(false);
  const [titulo, setTitulo] = useState("");
  const [anio, setAnio] = useState("");
  const [poster, setPoster] = useState("");
  const [editarId, setEditarId] = useState(null);
  const [busqueda, setBusqueda] = useState("");
  const handleShow = () => setShow(true);

  useEffect(() => {
    const data = localStorage.getItem("usuarios");

    if (data) {
      setUsuarios(JSON.parse(data));
    } else {
      setUsuarios(usuariosIniciales);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  }, [usuarios]);

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
  };

  const editarUsuario = (id, nuevoNombre) => {

    const usuariosActualizados = usuarios.map(usuario =>
      usuario.id === id
        ? { ...usuario, nombre: nuevoNombre }
        : usuario
    );

    setUsuarios(usuariosActualizados);
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
    const nuevasPeliculas = peliculas.filter((pelicula => pelicula.id !== id));
    setPeliculas(nuevasPeliculas);
  }
  const editarPelicula = (id) => {
    const pelicula = peliculas.find((pelicula => pelicula.id === id));
    setTitulo(pelicula.titulo);
    setAnio(pelicula.anio);
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
    setAnio("");
    setPoster("");
  };
 

  const navigate = useNavigate();

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
           <Sidebar/>
          <div className="p-3">
            <Button variant="danger rounded-5 fw-bold" onClick={handleShow} className="shadow w-100">
              + Añadir Pelicula
            </Button>
          </div>
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
      <Sidebar />
      <CardsUsuarios
        usuarios={usuarios}
        registrarUsuario={registrarUsuario}
        registroSistema={registroSistema}
        />
     
</Col>
</Row>
    </Container>
    </>
  );
}

export default Admin;