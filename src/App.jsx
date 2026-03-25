import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componentes/NavBar/NavBar";
import Home from "./pages/home/Home";
import Error404 from "./pages/error404/Error404";
import AboutUs from "./pages/AboutUs/AboutUs";
import Login from "./pages/Login/Login";
import Registro from "./pages/Registro/Registro";
import { usuariosIniciales } from './helpers/users';
import peliculasIniciales from './data/movies';
import "@fontsource/poppins";
import CategoriaPage from "./pages/home/Categoria";
import Footer from './componentes/footer/Footer';
import Contacto from './pages/Contacto/Contacto';
import PasarelaDePago from "./pages/PasarelaDePago/Pasarela";
import AdminProtegida from "./pages/Admin/AdminProtegida";
import RutaProtegida from "./componentes/RutaProtegida";
import Usuario from "./pages/Usuario/Usuario";
import Planes from "./pages/Planes/Planes";
import Ayuda from "./pages/CentroAyuda/CentroAyuda";
import DetallePelicula2 from "./pages/DetallePelicula2/DetallePelicula2";
import Favoritos from "./pages/Favoritos/Favoritos";

function App() {
  useEffect(() => {
    const VERSION = "v2";
    const peliculas = JSON.parse(localStorage.getItem("peliculas"));
    if (!peliculas || peliculas.length === 0 || localStorage.getItem("peliculas_version") !== VERSION) {
      localStorage.setItem("peliculas", JSON.stringify(peliculasIniciales));
      localStorage.setItem("peliculas_version", VERSION);
    }

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    

    if (usuarios.length === 0 || !usuarios.some(u => u.rol === "admin")) {
        const adminOriginal = usuariosIniciales.find(u => u.rol === "admin");
    
        usuarios = usuarios.length > 0 && adminOriginal 
          ? [adminOriginal, ...usuarios] 
          : usuariosIniciales;
    }

    const usuariosFinales = usuarios.map(u => {
      try {
        atob(u.password);
        return u;
      } catch (e) {
        return { ...u, password: btoa(u.password) }; 
      }
    });
    localStorage.setItem("usuarios", JSON.stringify(usuariosFinales));
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<RutaProtegida><Home /></RutaProtegida>} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/usuario" element={<Usuario />} />
        <Route path="/nosotros" element={<AboutUs />} />
        <Route path="/planes" element={<Planes />} />
        <Route path="/ayuda" element={<Ayuda />} />
        <Route path="/pago" element={<PasarelaDePago />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/detallepelicula/:id" element={<DetallePelicula2 />} />
        <Route path="/categoria/:gender" element={<CategoriaPage />} />
        <Route path="/admin" element={<AdminProtegida />} />
        <Route path="/usuarios" element={<AdminProtegida />} />
        <Route path="/ingresos" element={<AdminProtegida />} />
        <Route path="/peliculas" element={<AdminProtegida />} />
        <Route path="/error404" element={<Error404 />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
