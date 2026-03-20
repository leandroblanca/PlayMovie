import { Button, Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar"
import TablaPeliculas from "./TablaPeliculas";
import ModalPeliculas from "./ModalPeliculas.jsx";
import CardsUsuarios from "./CardUsuarios.jsx";
import { registroSistema, dashboardStats } from "./ObjetosAdmin.jsx";
import CardsAdmin from "./CardsAdmin.jsx";
import peliculasIniciales from "../../data/movies.js";
import ModalUsuarios from "./ModalUsuarios.jsx";
import { useNavigate, useLocation } from "react-router-dom";
import { usuariosIniciales } from "../../helpers/users.js";
import "./Admin.css";

function Admin() {
  const navigate = useNavigate();
  const location = useLocation();
  const [usuarios, setUsuarios] = useState(() => {
    const usuariosGuardados = localStorage.getItem("usuarios");
    if (usuariosGuardados) {

      const parsedUsers = JSON.parse(usuariosGuardados);
      return parsedUsers.map(u => {
        const { password, ...resto } = u;
        return resto;
      });
    }
   
    return usuariosIniciales.map(u => {
      const { password, ...resto } = u;
      return resto;
    });
  });
  const [peliculas, setPeliculas] = useState(() => {
    const guardadas = localStorage.getItem("peliculas");
    return guardadas ? JSON.parse(guardadas) : peliculasIniciales;
  });

  const [show, setShow] = useState(false);
  const [titulo, setTitulo] = useState("");
  const [anio, setAnio] = useState("");
  const [poster, setPoster] = useState("");
  const [categorias, setCategorias] = useState("");
  const [video, setVideo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [editarId, setEditarId] = useState(null);
  const [busqueda, setBusqueda] = useState("");

  const [showUserModal, setShowUserModal] = useState(false);
  const [nombreUser, setNombreUser] = useState("");
  const [emailUser, setEmailUser] = useState("");
  const [rolUser, setRolUser] = useState("");
  const [estadoUser, setEstadoUser] = useState(true);
  const [editarUserId, setEditarUserId] = useState(null);

  const handleShow = () => setShow(true);

  const registrarUsuario = (nombre) => {

    const nuevoUsuario = {
      id: Date.now(),
      nombre,
      estado: "ACTIVO",
      
    };

    setUsuarios([...usuarios, nuevoUsuario]);
  };

  const eliminarUsuario = (id) => {
    const nuevosUsuarios = usuarios.filter(u => u.id !== id);
    setUsuarios(nuevosUsuarios);
    localStorage.setItem("usuarios", JSON.stringify(nuevosUsuarios));
  };

  const editarUsuario = (usuario) => {
    setNombreUser(usuario.nombre);
    setEmailUser(usuario.email);
    setRolUser(usuario.rol);
  
    setEstadoUser(usuario.estado === "ACTIVO" || usuario.estado === true);
    setEditarUserId(usuario.id);
    setShowUserModal(true);
  };

  const guardarUsuario = (e) => {
    e.preventDefault();
    const usuariosActualizados = usuarios.map((u) =>
      u.id === editarUserId ? { ...u, nombre: nombreUser, email: emailUser, rol: rolUser, estado: estadoUser } : u
    );
    setUsuarios(usuariosActualizados);
    localStorage.setItem("usuarios", JSON.stringify(usuariosActualizados));
    setShowUserModal(false);
    setEditarUserId(null);
  };

  useEffect(() => {
    localStorage.setItem("peliculas", JSON.stringify(peliculas));
  }, [peliculas]);


  const guardarPelicula = () => {

    if (!editarId) {

      const nuevaPelicula = {
        id: Date.now(),
        titulo,
        poster,
        categorias,
        anio,
        descripcion,
        video,
              };

      setPeliculas([...peliculas, nuevaPelicula]);

    } else {

      const peliculasActualizadas = peliculas.map(pelicula =>
        pelicula.id === editarId
          ? { ...pelicula, titulo, anio, poster, categorias, video, descripcion }
          : pelicula
      );

      setPeliculas(peliculasActualizadas);
      setEditarId(null);
    }

    setTitulo("");
    setAnio("");
    setPoster("");
    setCategorias("");
    setVideo("");
    setDescripcion("");
    setShow(false);
  };


  const eliminarPelicula = (id) => {
    const nuevasPeliculas = peliculas.filter(p => p.id !== id);
    setPeliculas(nuevasPeliculas);
  };

  const editarPelicula = (pelicula) => {

    setTitulo(pelicula.titulo);
    setAnio(pelicula.anio);
    setPoster(pelicula.poster);
    setCategorias(pelicula.categorias);
    setVideo(pelicula.video);
    setDescripcion(pelicula.descripcion);

    setEditarId(pelicula.id);
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
    setCategorias("");
    setVideo("");
    setDescripcion("");
  };

  const peliculasFiltradas = peliculas.filter(p =>
    p.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  const cerrarSesion = () => {
    sessionStorage.removeItem("usuarioLogueado");
    window.dispatchEvent(new Event("auth-change"));
    navigate("/login", { replace: true });
  };


  const { pathname } = location;
  const isDashboard = pathname === '/admin';
  const isPeliculas = pathname === '/peliculas';
  const isUsuarios = pathname === '/usuarios';
  const isIngresos = pathname === '/ingresos';

  const showPeliculasSection = isPeliculas || isDashboard;
  const showUsuariosSection = isUsuarios || isDashboard;
  const showIngresosSection = isIngresos || isDashboard;

  let pageTitle = "Panel de Administración";
  if (isPeliculas) pageTitle = "Gestión de Películas";
  if (isUsuarios) pageTitle = "Gestión de Usuarios";
  if (isIngresos) pageTitle = "Resumen de Ingresos";

  return (
    <>
      <Container fluid className="admin-container min-vh-100 p-0">
        <Row className="g-0">
          
          <Col md={3} xl={2} className="sidebar-col d-none d-md-block">
            <div className="sidebar-wrapper">
              <Sidebar onLogout={cerrarSesion} />
              
              <div className="add-button-container">
                <Button
                  variant="danger"
                  onClick={handleShow}
                  className="add-movie-btn w-100"
                >
                  + Añadir Película
                </Button>
              </div>
            </div>
          </Col>

          <Col xs={12} className="d-md-none p-3">
            <Button variant="danger" className="w-100" onClick={handleShow}>
              + Añadir Película
            </Button>
          </Col>

          <Col xs={12} md={9} xl={10} className="main-content p-3 p-md-4">
            <div className="content-wrapper">
              <div className="content-header d-flex flex-column flex-lg-row justify-content-between align-items-start align-items-lg-center gap-3 mb-4">
                              
                <div className="header-actions d-flex flex-column flex-sm-row gap-2 w-100 w-lg-auto mt-5">
                  <div className="search-wrapper flex-grow-1">
                    <input
                      type="text"
                      placeholder="Buscar película..."
                      value={busqueda}
                      onChange={(e) => setBusqueda(e.target.value)}
                      className="search-input w-100"
                    />
                    <span className="search-icon">🔍</span>
                  </div>
                  
                  
                </div>
              </div>

              {showIngresosSection && (
              <div className="stats-section mb-4">
                <CardsAdmin dashboardStats={dashboardStats} />
              </div>
              )}
              {showPeliculasSection && (
              <div className="section-card mb-4 ">
                <div className="section-header d-flex justify-content-between align-items-center mb-3">
                  <h3 className="section-title mb-0">🎬 Películas</h3>
                  <span className="section-count">{peliculasFiltradas.length} películas</span>
                </div>
                
                <div className="table-responsive">
                  <TablaPeliculas
                    editarPelicula={editarPelicula}
                    eliminarPelicula={eliminarPelicula}
                    peliculasFiltradas={peliculasFiltradas}
                  />
                </div>
              </div>
              )}
              {showUsuariosSection && (
              <div className="section-card ">
                <div className="section-header d-flex justify-content-between align-items-center mb-3">
                  <h3 className="section-title mb-0">👥 Usuarios</h3>
                  <span className="section-count">{usuarios.length} usuarios</span>
                </div>
                
                <CardsUsuarios
                  usuarios={usuarios}
                  registrarUsuario={registrarUsuario}
                  eliminarUsuario={eliminarUsuario}
                  editarUsuario={editarUsuario}
                  registroSistema={registroSistema}
                />
              </div>
              )}
            </div>

           
            <ModalPeliculas
              show={show}
              handleClose={handleClose}
              editarId={editarId}
              titulo={titulo}
              setTitulo={setTitulo}
              anio={anio}
              setAnio={setAnio}
              poster={poster}
              setPoster={setPoster}
              categorias={categorias}
              setCategorias={setCategorias}
              video={video}
              setVideo={setVideo}
              descripcion={descripcion}
              setDescripcion={setDescripcion}
              onSubmit={onSubmit}
            />

            <ModalUsuarios
              show={showUserModal}
              handleClose={() => setShowUserModal(false)}
              editarId={editarUserId}
              nombre={nombreUser}
              setNombre={setNombreUser}
              email={emailUser}
              setEmail={setEmailUser}
              rol={rolUser}
              setRol={setRolUser}
              estado={estadoUser}
              setEstado={setEstadoUser}
              onSubmit={guardarUsuario}
            />
          </Col>

        </Row>
      </Container>
    </>
  );
}

export default Admin;