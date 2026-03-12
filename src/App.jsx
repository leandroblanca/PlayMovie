import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import "./index.css";
import Nav from "./componentes/Nav";
import Footer from "./componentes/Footer";
import Error404 from "./pages/Error404"
import DetallePelicula from "./pages/DetallePelicula/DetallePelicula"

import Home from "./pages/Home";
import Contacto from "./pages/Contacto/Contacto";
// import Error404 from "./pages/Error404";
import AboutUs from "./pages/AboutUs/AboutUs";
// import Perfil from "./pages/Perfil/Perfil";
import Registro from "./pages/Registro/Registro";
import Login from "./pages/Login/Login";



function App() {
  useEffect(() => {
    function primeraCarga () {
      const peliculas = JSON.parse(localStorage.getItem("peliculas"));
      const usuarios = JSON.parse(localStorage.getItem("usuarios"));
      if (!peliculas || peliculas.length === 0) {
        localStorage.setItem("peliculas", JSON.stringify(peliculasIniciales));
      }
      if (!usuarios || usuarios.length === 0) {
        localStorage.setItem("usuarios", JSON.stringify(usuariosIniciales));
      }
    }
    primeraCarga();
  }, [])
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/error404" element={<Error404 />} />
        <Route path="/nosotros" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer/>
    </Router>
  );
}
