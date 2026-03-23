import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { FaSearch } from "react-icons/fa";

const navConfig = {
  "/": ["Buscar Peliculas", "Peliculas", "Nosotros", "Suscribirse", "Iniciar Sesión", "Centro de Ayuda"],
  "/inicio": ["Buscar Peliculas","Peliculas", "Nosotros", "Suscribirse", "Iniciar Sesión"],
  "/contacto": ["Buscar Peliculas","Inicio", "Peliculas", "Nosotros",  "Usuario"],
  "/404": ["Buscar Peliculas", "Peliculas", "Nosotros",  "Perfil", "Usuario"],
  "/nosotros": ["Buscar Peliculas","Inicio", "Peliculas", "Sobre Nosotros",  "Contacto", "Iniciar Sesión"],
  "/usuario": ["Buscar Peliculas","Peliculas", "Nosotros"],
  "/peliculas": ["Buscar Peliculas","Inicio", "Nosotros", "Perfil"],
  "/login": ["Buscar Peliculas","Inicio", "Peliculas", "Iniciar Sesión"],
};

const getLinkPath = (item) => {
  if (item === "Peliculas" || item === "Inicio") return "/";
  if (item === "Iniciar Sesión") return "/login";
  return `/${item.toLowerCase().replace(/\s+/g, "")}`;
};

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("usuarioLogueado")));
  const [busqueda, setBusqueda] = useState("");
  const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const q = params.get("search");
    setBusqueda(q || "");
  }, [location.search]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (busqueda.trim()) {
      navigate(`/?search=${encodeURIComponent(busqueda)}`);
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    const checkAuth = () => {
      setUser(JSON.parse(sessionStorage.getItem("usuarioLogueado")));
    };

    window.addEventListener("auth-change", checkAuth);
    return () => window.removeEventListener("auth-change", checkAuth);
  }, []);

  if (currentPath === "/login" || currentPath === "/registro") {
    return null;
  }

  let items = navConfig[currentPath] || navConfig["/"];

  if (user) {
    items = items.filter((item) => item !== "Iniciar Sesión");
  }

  const handleLogout = () => {
    sessionStorage.removeItem("usuarioLogueado");
    window.dispatchEvent(new Event("auth-change"));
    navigate("/login", { replace: true });
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
              <form onSubmit={handleSearch} className="search-container" style={{ position: "relative", display: "flex", alignItems: "center" }}>
                <FaSearch className="search-icon" style={{ position: "absolute", left: "15px", color: "gray", zIndex: 1 }} />
                <input
                  type="text"
                  placeholder="Buscar películas"
                  className="search-input"
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                  style={{ paddingLeft: "40px" }}
                />
              </form>
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
        {user && (
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