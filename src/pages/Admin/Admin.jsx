import { Button, Modal, Table, Form, Container, Row, Card, Col, ListGroup, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faUsers, faDollarSign, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { BsEye, BsPencil, BsTrash } from "react-icons/bs";
import "./Admin.css";
import Sidebar from "../../componentes/Sidebar";


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
  const [usuarios, setUsuarios] = useState(usuariosIniciales);
   const [show, setShow] = useState(false);
   const [peliculas, setPeliculas] = useState(() => {
     const guardadas = localStorage.getItem("peliculas");
     return guardadas ? JSON.parse(guardadas) : [];
   });
   const [titulo, setTitulo] = useState("");
   const [año, setAño] = useState("");
   const [poster, setPoster] = useState("");
   const [editarId, setEditarId] = useState(null);
   const [busqueda, setBusqueda] = useState("");
   const [busquedaApi, setBusquedaApi] = useState("");
   const [resultadosApi, setResultadosApi] = useState([]);
   const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=9678a642782cbed22b8137edf52e9d91&language=es-ES&page=1";
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

  

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
      const consultarAPI = async () => {
        try {
          const respuesta = await fetch(API_URL);
          const { results } = await respuesta.json();
          
          const peliculasPopulares = results.map(pelicula => ({
            id: crypto.randomUUID(),
            titulo: pelicula.title,
            año: pelicula.release_date ? pelicula.release_date.split("-")[0] : "2024",
            poster: `${IMAGE_BASE_URL}${pelicula.poster_path}`
          }));
          
          setPeliculas(peliculasPopulares);
        } catch (error) {
          console.error("Error en la API", error);
        }
      };
      consultarAPI();
    }
  }, []); 


   useEffect(() => {
    localStorage.setItem("peliculas", JSON.stringify(peliculas));
  }, [peliculas]);
  
  const peliculasFiltradas = peliculas.filter((pelicula) =>
    (pelicula.titulo || "").toLowerCase().includes(busqueda.toLowerCase())
  );

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

  const buscarPeliculaApi = async (e) => {
    e.preventDefault();
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=9678a642782cbed22b8137edf52e9d91&query=${busquedaApi}&language=es-ES`;
      const response = await fetch(url);
      const data = await response.json();
      setResultadosApi(data.results || []);
    } catch (error) {
      console.log(error);
    }
  };

  const agregarDesdeApi = (pelicula) => {
    const nuevaPelicula = {
      id: crypto.randomUUID(),
      titulo: pelicula.title,
      año: pelicula.release_date ? pelicula.release_date.split("-")[0] : "N/A",
      poster: pelicula.poster_path ? `${IMAGE_BASE_URL}${pelicula.poster_path}` : "https://via.placeholder.com/150",
    };
    setPeliculas([...peliculas, nuevaPelicula]);
  };

  const handleShow = () => setShow(true);


  return (
    <>
    <Container className="vh-100">
      <Row className="col-12">
        <Col className="col-2">
           <Sidebar/>
          <Button variant="danger rounded-5 fw-bold" onClick={handleShow} className="shadow">
            + Añadir Nueva Pelicula
          </Button>
        </Col>
        <Col className="col-10">
        
           <div className=" p-3">
        <Form onSubmit={buscarPeliculaApi} className="d-flex gap-2 w-50">
          <Form.Control
            type="text"
            placeholder="Ej: Batman, Avatar..."
            value={busquedaApi}
            onChange={(e) => setBusquedaApi(e.target.value)}
          />
          <Button variant="danger" className="rounded-5" type="submit">Buscar</Button>
        </Form>
        
        <div className="d-flex gap-3 mt-3 overflow-auto">
          {resultadosApi.map((p) => (
            <div key={p.id} style={{ minWidth: "120px", textAlign: "center" }}>
              <img
                src={p.poster_path ? `${IMAGE_BASE_URL}${p.poster_path}` : "https://via.placeholder.com/150"}
                alt={p.title}
                style={{ width: "100%", borderRadius: "5px" }}
              />
              <h6 style={{ fontSize: "12px", marginTop: "5px" }}>{p.title}</h6>
              <Button size="sm" variant="success" onClick={() => agregarDesdeApi(p)}>
                Agregar
              </Button>
            </div>
          ))}
        </div>
      </div>

   <Container>
  <Row className="g-4">
    {dashboardStats.map(stat => (
      <Col md={3} key={stat.id}>

        <Card className="dashboard-card mt-5 rounded-5">

          <Card.Body>

            <div className="d-flex justify-content-between align-items-center mb-2">

              <FontAwesomeIcon
                icon={stat.icon}
                className="dashboard-icon"
              />

              <span className="dashboard-trend">
                {stat.tendencia} {stat.porcentaje}
              </span>

            </div>

            <Card.Title className="dashboard-title">
              {stat.titulo}
            </Card.Title>

            <Card.Text className="dashboard-value">
              {stat.valor}
            </Card.Text>

          </Card.Body>

        </Card>

      </Col>
    ))}
  </Row>
</Container>

      <Container className="mt-4">
       
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

      <Table hover responsive className="align-middle tabla-peliculas">
  <thead>
    <tr>
      <th>Película</th>
      <th>Fecha de estreno</th>
      <th>Estado</th>
      <th>Calificación</th>
      <th>Acciones</th>
    </tr>
  </thead>

  <tbody>

    {peliculasFiltradas.map((pelicula) => (
      <tr key={pelicula.id}>

        <td>
          <div className="d-flex align-items-center gap-3">

            <img
              src={pelicula.poster}
              alt={pelicula.titulo}
              className="poster-mini"
            />

            <div>
              <div className="fw-bold">{pelicula.titulo}</div>
              <div className="text-muted small">
                {pelicula.genero || "Ciencia ficción"}
              </div>
            </div>

          </div>
        </td>

        <td>
          {pelicula.fecha || pelicula.año}
        </td>

        <td>
          <span
            className={`badge ${
              pelicula.estado === "Publicado"
                ? "bg-success"
                : "bg-warning text-dark"
            }`}
          >
            {pelicula.estado || "Publicado"}
          </span>
        </td>

        <td>
          ⭐ {pelicula.rating || "N/A"}
        </td>

         <td className="d-flex gap-2">

          <Button
           
            onClick={() => editarPelicula(pelicula.id)}
          >
            <BsPencil size={18}/>
          </Button>

          <Button
            
          >
            <BsEye size={18}/>
          </Button>

          <Button
           
            onClick={() => eliminarPelicula(pelicula.id)}
          >
            <BsTrash size={18}/>
          </Button>

        </td>


      </tr>
    ))}

  </tbody>
</Table>
</Container>
<Container>
  <Row className="col-12 justify-content-end my-5"> 
    <Col className="col-6">
    <Card className="usuarios-card">

<Card.Body>

<div className="d-flex justify-content-between align-items-center mb-3">
<h5 className="fw-bold">Gestión de Usuarios</h5>
<span className="text-danger">Ver Todos los Usuarios</span>
</div>

<ListGroup variant="flush">

{usuarios.map((usuario) => (

<ListGroup.Item
key={usuario.id}
className="d-flex justify-content-between align-items-center usuario-item"
>

<div className="d-flex align-items-center gap-3">

<div className="avatar"></div>

<div>
<div className="fw-bold">{usuario.nombre}</div>
<div className="text-muted small">Usuarios Activos</div>
</div>

</div>

<div className="text-end">

<div className="text-muted small">
Último acceso: {usuario.ultimoAcceso}
</div>

<Badge bg={usuario.estado === "ACTIVO" ? "danger" : "secondary"}>
{usuario.estado}
</Badge>

</div>

</ListGroup.Item>

))}

</ListGroup>

</Card.Body>

</Card>
    </Col>
    <Col className="col-4 d-flex ">
   <Card className="registro-card ms-auto">

<Card.Body>

<h5 className="fw-bold mb-4">Registro del Sistema</h5>

{registroSistema.map((registro)=> (

<div
key={registro.id}
className="registro-item d-flex justify-content-start align-items-start flex-column"
>

<div className="d-flex align-items-center gap-2">
  

  <div
  className="registro-icon"
  style={{ background: registro.color }}
></div>


<div>

<div className="fw-bold">
{registro.titulo}
</div>

<div className="text-muted small">
{registro.categoria}
</div>

</div>

</div>

<div className="text-muted small ms-3">
{registro.hora}
</div>


</div>

))}

</Card.Body>

</Card> 
    </Col>
  </Row>
</Container>

</Col>
      </Row>
    </Container>


    </>
  );
}

export default Admin;