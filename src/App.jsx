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
    <>
    <BrowserRouter>
     <div className="app-container">
        <Nav />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/404" element={<Error404 />} />
            <Route path="/aboutus" element={<AboutUs />} />
            {/* <Route path="/perfil" element={<Perfil />} /> */}
            <Route path="/registro" element={<Registro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/pelicula" element={<DetallePelicula />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
    
    </>
  )
}

export default App
