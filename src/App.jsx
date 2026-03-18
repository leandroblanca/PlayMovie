import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componentes/NavBar/NavBar";
import Footer from "./componentes/footer/Footer"
import CentroAyuda from "./pages/CentroAyuda/CentroAyuda"
import Home from "./pages/home/Home";
import Contacto from "./pages/Contacto/Contacto";
import Error404 from "./pages/error404/Error404";
import AboutUs from "./pages/AboutUs/AboutUs";
import Login from "./pages/Login/Login";
import Registro from "./pages/Registro/Registro";
import { useEffect } from 'react';
import { usuariosIniciales } from './helpers/users';
import peliculasIniciales from './data/movies';
import { useNavigate, Link } from "react-router-dom";
import "@fontsource/poppins";


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
        <Route path="/ayuda" element={<CentroAyuda />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer/>
      </Router>
  );
}

export default App; 