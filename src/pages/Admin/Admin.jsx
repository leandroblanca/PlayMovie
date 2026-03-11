import { Button, Modal, Table, Form, Container, Row, Card, Col, ListGroup, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faUsers, faDollarSign, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { dashboardStats, usuariosIniciales, registroSistema } from "./ObjetosAdmin.jsx";
import { useEffect, useState } from "react";
import { BsEye, BsPencil, BsTrash } from "react-icons/bs";
import "./Admin.css";
import Sidebar from "./Sidebar";
import TablaPeliculas from "./TablaPeliculas";
import ModalAdmin from "./ModalAdmin";
import Buscador from "./Buscador.jsx";
import CardsAdmin from "./CardsAdmin.jsx";
import CardsUsuarios from "./CardUsuarios.jsx";

function Admin() {
  const [usuarios, setUsuarios] = useState([]);
   const [show, setShow] = useState(false);
   const [peliculas, setPeliculas] = useState(() => {
     const guardadas = localStorage.getItem("peliculas");
     return guardadas ? JSON.parse(guardadas) : [];
   });
   const [titulo, setTitulo] = useState("");
   const [anio, setAnio] = useState("");
   const [poster, setPoster] = useState("");
   const [editarId, setEditarId] = useState(null);
   const [busqueda, setBusqueda] = useState("");
    const handleShow = () => setShow(true);
 
  

useEffect(() => {

  const data = localStorage.getItem("usuarios");

  if(data){
    setUsuarios(JSON.parse(data));
  } else {
    setUsuarios(usuariosIniciales);
  }

}, []);
useEffect(()=>{
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
},[usuarios])

const registrarUsuario = (nombre) => {

  const nuevoUsuario = {
    id: Date.now(),
    nombre,
    estado: "ACTIVO",
    ultimoAcceso: "ahora"
  };

  setUsuarios(prev => [nuevoUsuario, ...prev]);

};
  useEffect(() => {
   
    if (peliculas.length === 0) {
      const popularPeliculas = () => {
          setPeliculas(peliculas);
      };
      popularPeliculas();
    }
  }, []); 


   useEffect(() => {
    localStorage.setItem("peliculas", JSON.stringify(peliculas));
  }, [peliculas]);
  


  const AgregarPelicula = () => {
    if(!editarId) {
      const nuevaPelicula = {
        id: crypto.randomUUID(),
        titulo,
        anio,
        poster,
      };
      setPeliculas([...peliculas, nuevaPelicula]);
    } else {
       const peliculasActualizadas = peliculas.map((pelicula) =>
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
  }
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

  const peliculasFiltradas = peliculas.filter((pelicula) =>
    pelicula.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <>
     <Buscador
        busqueda={busqueda}
        setBusqueda={setBusqueda}
      />
    <CardsAdmin
      dashboardStats={dashboardStats}
      />
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
     

    </>
  );
}

export default Admin;