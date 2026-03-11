import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";
import logo from "../../assets/logo.png"; 
import { FaFilm, FaUser, FaBell } from "react-icons/fa";


const navConfig = {
  "/": ["Peliculas", "Series", "Mi Lista", "Buscar Peliculas", "Notificaciones", "Suscribirse", "Iniciar Sesión"],
  "/contacto": ["Inicio", "Peliculas", "Series", "Mi Lista", "Buscar Peliculas", "Usuario"],
  "/404": ["Peliculas", "Series", "Mi Lista", "Buscar Peliculas", "Notificaciones", "Perfil", "Usuario"],
  "/aboutus": ["Peliculas", "Series", "Mi Lista", "Buscar Peliculas", "Notificaciones", "Suscribirse", "Iniciar Sesión"],
  "/perfil": ["Peliculas", "Series", "Mi Lista", "Buscar Peliculas", "Notificaciones", "Configuración", "Perfil"],
  "/login": ["Inicio", "Peliculas", "Series", "Iniciar Sesión"],
};

export default function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const items = navConfig[currentPath] || [];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`navbar-list ${isOpen ? "active" : ""}`}>
        {items.map((item, index) => (
          <li key={index} className="navbar-item">
            <Link to={`/${item.toLowerCase().replace(/\s+/g, "")}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}