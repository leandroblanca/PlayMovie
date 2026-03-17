import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./componentes/NavBar/NavBar";
import Home from "./pages/home/Home";
import Error404 from "./pages/error404/Error404";
import AboutUs from "./pages/AboutUs/AboutUs";
import Login from "./pages/Login/Login";
import Registro from "./pages/Registro/Registro";
import Contacto from "./pages/Contacto/Contacto";
import { useEffect } from 'react';
import { usuariosIniciales } from './helpers/users';
import peliculasIniciales from './data/movies';
import RutaProtegida from "./componentes/RutaProtegida";
import Footer from "./componentes/Footer/Footer";

function AppContent() {
  const location = useLocation();
  const hideNavbar = location.pathname === '/login' || location.pathname === '/registro';

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/home" element={
          <RutaProtegida>
            <Home />
          </RutaProtegida>
        } />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/error404" element={<Error404 />} />
        <Route path="/nosotros" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer/>
    </>
  );
}

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
      <AppContent />
    </Router>
  );
}

export default App;