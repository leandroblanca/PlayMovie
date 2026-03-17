import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { FaSearch } from "react-icons/fa";

const navConfig = {
  "/": ["Peliculas", "Nosotros", "Buscar Peliculas", "Notificaciones", "Suscribirse", "Iniciar Sesión"],
  "/inicio": ["Peliculas", "Nosotros", "Buscar Peliculas", "Notificaciones", "Suscribirse", "Iniciar Sesión"],
  "/contacto": ["Inicio", "Peliculas", "Nosotros", "Buscar Peliculas", "Usuario"],
  "/404": ["Peliculas", "Nosotros", "Buscar Peliculas", "Notificaciones", "Perfil", "Usuario"],
  "/nosotros": ["Peliculas", "Buscar Peliculas", "Contacto", "Suscribirse", "Iniciar Sesión"],
  "/perfil": ["Peliculas", "Nosotros", "Buscar Peliculas", "Notificaciones", "Configuración", "Perfil"],
  "/peliculas": ["Inicio", "Nosotros", "Buscar Peliculas", "Notificaciones", "Configuración", "Perfil"],
  "/login": ["Inicio", "Peliculas", "Iniciar Sesión"],
};

const getLinkPath = (item) => {
  if (item === "Peliculas" || item === "Inicio") return "/home";
  if (item === "Iniciar Sesión") return "/login";
  return `/${item.toLowerCase().replace(/\s+/g, "")}`;
};

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  let items = navConfig[currentPath] || navConfig["/"];
  const usuarioLogueado = JSON.parse(sessionStorage.getItem("usuarioLogueado"));

  if (usuarioLogueado) {
    items = items.filter((item) => item !== "Iniciar Sesión");
  }

  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    sessionStorage.removeItem("usuarioLogueado");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="logo-link">
          <img src="/assets/logo.png" alt="Logo" />
          <span className="logo-text">PlayMovie</span>
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
            {item === "Buscar Peliculas" ? (
              <div className="search-container">
                <FaSearch className="search-icon" />
                <input
                  type="text"
                  placeholder="Buscar películas, series"
                  className="search-input"
                />
              </div>
            ) : (
              <Link
                to={getLinkPath(item)}
                className={item === "Iniciar Sesión" ? "btn-login" : ""}
              >
                {item}
              </Link>
            )}
          </li>
        ))}
        {usuarioLogueado && (
          <li className="navbar-item">
            <button onClick={handleLogout} className="btn-login">
              Cerrar Sesión
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}