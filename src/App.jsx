import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./componentes/NavBar/NavBar";
import Home from "./pages/home/Home";
import Error404 from "./pages/error404/Error404";
import AboutUs from "./pages/AboutUs/AboutUs";
import Login from "./pages/Login/Login";
import Registro from "./pages/Registro/Registro";
import { useEffect } from 'react';
import { usuariosIniciales } from './helpers/users';
import peliculasIniciales from './data/movies';
import "@fontsource/poppins";

import CategoriaPage from "./pages/home/Categoria";
import Footer from './componentes/footer/Footer'
import Contacto from '../src/pages/Contacto/Contacto'
import PasarelaDePago from "./pages/PasarelaDePago/Pasarela";
import Admin from "./pages/Admin/Admin";
import RutaProtegida from "./componentes/RutaProtegida";
import Usuario from "./pages/Usuario/Usuario";
import CentroAyuda from "./pages/CentroAyuda/CentroAyuda"
import DetallePelicula2 from "./pages/DetallePelicula2";


function App() {
  useEffect(() => {
    function primeraCarga () {
      const peliculas = JSON.parse(localStorage.getItem("peliculas"));
      const usuarios = JSON.parse(localStorage.getItem("usuarios"));
      if (!peliculas || peliculas.length === 0) {
        localStorage.setItem("peliculas", JSON.stringify(peliculasIniciales));
      }
      if (!usuarios || usuarios.length === 0) {
        const usuariosLimpios = usuariosIniciales.map(u => {
          const { password, ...resto } = u;
          return resto;
        });
        localStorage.setItem("usuarios", JSON.stringify(usuariosLimpios));
      }
  
      else {
        const usuariosSanitizados = usuarios.map(u => {
          const { password, ...resto } = u;
          return resto;
        });
        localStorage.setItem("usuarios", JSON.stringify(usuariosSanitizados));
      }
    }
    primeraCarga();
  }, [])
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/usuario" element={<Usuario />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/error404" element={<Error404 />} />
        <Route path="/pago" element={<PasarelaDePago />} />
        <Route path="/nosotros" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/ayuda" element={<CentroAyuda />} />
        <Route path="/detallepelicula/:id" element={<DetallePelicula2 />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/usuarios" element={<Admin />} />
        <Route path="/ingresos" element={<Admin />} />
        <Route path="/peliculas" element={<Admin />} />
        <Route path="/" element={<RutaProtegida><Home peliculas={peliculasIniciales} /></RutaProtegida>} />
        <Route path="/categoria/:gender" element={<CategoriaPage />} />
      </Routes>
      <Footer/>
      </Router>
  );
}
export default App;

