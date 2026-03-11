import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componentes/NavBar/NavBar";


// Páginas de ejemplo (creá tus componentes reales en /pages)
import Home from "./pages/Home";
import Contacto from "./pages/Contacto/Contacto";
import Error404 from "./pages/Error404";
import AboutUs from "./pages/AboutUs";
import Perfil from "./pages/Perfil";
import Login from "./pages/Login/Login";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/404" element={<Error404 />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/login" element={<Login />} />
        {/* Ruta comodín para cualquier otra URL */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}