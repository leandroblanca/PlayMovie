import { Button, Modal, Table, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import "./Admin.css";


function Admin() {
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
    // Si no hay películas en el estado (que ya se cargó desde localStorage),
    // entonces consultamos la API para mostrar las populares.
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
  }, []); // El array vacío asegura que esto solo se ejecute una vez al montar.


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

      {/* Sección para buscar en la API y agregar */}
      <div className="my-4 p-3 border rounded bg-light">
        <h5>Buscar película en API (TMDB)</h5>
        <Form onSubmit={buscarPeliculaApi} className="d-flex gap-2">
          <Form.Control
            type="text"
            placeholder="Ej: Batman, Avatar..."
            value={busquedaApi}
            onChange={(e) => setBusquedaApi(e.target.value)}
          />
          <Button variant="primary" type="submit">Buscar API</Button>
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

      <Form.Control
        type="text"
        placeholder="Buscar película por título..."
        className="my-3"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

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
   
         {peliculasFiltradas.map(pelicula => (
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