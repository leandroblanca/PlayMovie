import { Button, Modal, Table, Form, Container, Row, Card, Col, ListGroup, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faUsers, faDollarSign, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { BsEye, BsPencil, BsTrash } from "react-icons/bs";
import "./Admin.css";
import Sidebar from "./Sidebar";
import TablaPeliculas from "./TablaPeliculas";
import ModalAdmin from "./ModalAdmin";

function Admin() {
  const [usuarios, setUsuarios] = useState(usuarios);
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
  setAnio("");0
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

  return (
    <>
     <Buscador
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        peliculas={peliculas}
        setPeliculas={setPeliculas}
      />
    <CardsAdmin
      dashboardStats={dashboardStats}
      />
      <TablaPeliculas
        editarPelicula={editarPelicula}
        eliminarPelicula={eliminarPelicula}
        peliculasFiltradas={peliculasFiltradas}
      />
      <ModalAdmin
        AgregarPelicula={AgregarPelicula}
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
        usuarios={usuariosIniciales}
        registrarUsuario={registrarUsuario}
        registroSistema={registroSistema}
        />
     

    </>
  );
}

export default Admin;