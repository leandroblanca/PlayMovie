import './App.css'
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./componentes/Nav";
import Footer from "./componentes/Footer";
import Error404 from "./pages/Error404";
import Login from "./pages/Login/Login";
import AdminProtegida from "./pages/Admin/AdminProtegida";
import Registro from "./pages/Registro/Registro";
import Contacto from "./pages/Contacto/Contacto";
import { useEffect } from 'react';
import { usuariosIniciales } from './helpers/users';
import peliculasIniciales from './data/movies';

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
        <Nav />
        <Routes>
          <Route path="/" element={<Contacto />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/admin" element={<AdminProtegida />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
