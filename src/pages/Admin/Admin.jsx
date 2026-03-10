import { Button, Modal, Table, Form, Container, Row, Card, Col, ListGroup, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faUsers, faDollarSign, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { BsEye, BsPencil, BsTrash } from "react-icons/bs";
import "./Admin.css";
import Sidebar from "./Sidebar";

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
            poster: `${IMAGE_BASE_URL}${pelicula.poster_path}`,
            categorias: ["accion", "Ciencia ficcion", "Thriller"]
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
    <Container fluid className="min-vh-100">
      <Row>
        <Col xs={12} md={3} lg={2} className="p-0 bg-dark">
           <Sidebar/>
          <div className="p-3">
            <Button variant="danger rounded-5 fw-bold" onClick={handleShow} className="shadow w-100">
              + Añadir Pelicula
            </Button>
          </div>
        </Col>
        <Col xs={12} md={9} lg={10} className="p-4">
        
           <div className="mb-4">
        <Form onSubmit={buscarPeliculaApi} className="d-flex gap-2 col-12 col-md-6">
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


      <div className="mt-4">
       
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

      <Card className="border-0 shadow-sm rounded-4 overflow-hidden">
        <Card.Body className="p-0">
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
        </Card.Body>
      </Card>
      </div>

  <Row className="my-5 g-4"> 
    <Col xs={12} lg={8}>
    <Card className="usuarios-card h-100 border-0 shadow-sm rounded-4">

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
    <Col xs={12} lg={4}>
   <Card className="registro-card h-100 border-0 shadow-sm rounded-4">

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

</Col>
      </Row>
    </Container>


    </>
  );
}

export default Admin;