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
import Sidebar from "../../componentes/Sidebar";
import { useNavigate } from "react-router";


const dashboardStats = [
  {
    id: 1,
    icon: faFilm,
    tendencia: "up",
    porcentaje: "+12%",
    titulo: "Total de Películas",
    valor: 1240
  },
  {
    id: 2,
    icon: faUsers,
    tendencia: "up",
    porcentaje: "+5%",
    titulo: "Usuarios Activos",
    valor: 85241
  },
  {
    id: 3,
    icon: faDollarSign,
    tendencia: "down",
    porcentaje: "-2%",
    titulo: "Ingresos Totales",
    valor: 12450
  },
  {
    id: 4,
    icon: faUserPlus,
    tendencia: "up",
    porcentaje: "+18%",
    titulo: "Nuevos Registros",
    valor: 124
  }
];

const usuariosIniciales = [
  {
    id: 1,
    nombre: "Alex Johnson",
    estado: "ACTIVO",
    ultimoAcceso: "hace 2h"
  },
  {
    id: 2,
    nombre: "Sarah Miller",
    estado: "ACTIVO",
    ultimoAcceso: "hace 5h"
  },
  {
    id: 3,
    nombre: "Michael Brown",
    estado: "INACTIVO",
    ultimoAcceso: "hace 1 día"
  }
];
const registroSistema = [
  {
    id: 1,
    titulo: "Copia de Seguridad Completada",
    categoria: "Usuarios Activos",
    hora: "10:45 AM",
    color: "#198754"
  },
  {
    id: 2,
    titulo: "Alerta de Seguridad",
    categoria: "Usuarios Activos",
    hora: "08:22 AM",
   color: "#dc3545"

  },
  {
    id: 3,
    titulo: "Película Publicada",
    categoria: "Usuarios Activos",
    hora: "Ayer",
    color: "#0d6efd"
  }
];

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