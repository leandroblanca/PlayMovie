import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";
import logo from "../../src/assets/logo.png"; 

// Navbar.jsx
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Determinar qué items mostrar según la página
  const getNavItems = () => {
    const path = location.pathname;
    
    if (path.includes('admin')) {
      return [
        { path: '/admin', icon: 'dashboard', label: 'Panel', mobileLabel: 'Inicio' },
        { path: '/admin/peliculas', icon: 'movie', label: 'Películas', mobileLabel: 'Películas' },
        { path: '/admin/usuarios', icon: 'group', label: 'Usuarios', mobileLabel: 'Usuarios' },
        { path: '/admin/ajustes', icon: 'settings', label: 'Ajustes', mobileLabel: 'Ajustes' },
      ];
    }
    
    if (path.includes('login') || path.includes('registro')) {
      return [
        { path: '/', icon: 'home', label: 'Inicio', mobileLabel: 'Inicio' },
        { path: '/peliculas', icon: 'movie', label: 'Películas', mobileLabel: 'Películas' },
        { path: '/series', icon: 'tv', label: 'Series', mobileLabel: 'Series' },
      ];
    }
    
    if (path.includes('perfil')) {
      return [
        { path: '/', icon: 'home', label: 'Inicio', mobileLabel: 'Inicio' },
        { path: '/buscar', icon: 'search', label: 'Buscar', mobileLabel: 'Buscar' },
        { path: '/descargas', icon: 'download', label: 'Descargas', mobileLabel: 'Descargas' },
        { path: '/perfil', icon: 'person', label: 'Perfil', mobileLabel: 'Perfil', active: true },
      ];
    }
    
    if (path.includes('pelicula/')) {
      return [
        { path: '/', icon: 'home', label: 'Inicio', mobileLabel: 'Inicio' },
        { path: '/buscar', icon: 'search', label: 'Buscar', mobileLabel: 'Buscar' },
        { path: '/mi-lista', icon: 'bookmark', label: 'Mi Lista', mobileLabel: 'Mi Lista' },
        { path: '/perfil', icon: 'person', label: 'Perfil', mobileLabel: 'Perfil' },
      ];
    }
    
    return [
      { path: '/', icon: 'home', label: 'Inicio', mobileLabel: 'Inicio', active: path === '/' },
      { path: '/explorar', icon: 'explore', label: 'Explorar', mobileLabel: 'Explorar' },
      { path: '/descargas', icon: 'download', label: 'Descargas', mobileLabel: 'Descargas' },
      { path: '/perfil', icon: 'person', label: 'Perfil', mobileLabel: 'Perfil' },
    ];
  };

  const navItems = getNavItems();
  const isAdmin = location.pathname.includes('admin');
  const isAuth = location.pathname.includes('login') || location.pathname.includes('registro');
  const isDetail = location.pathname.includes('pelicula/');
  const isProfile = location.pathname.includes('perfil');

  // Renderizar navbar móvil
  if (isMobile) {
    return (
      <>
        <header className="mobile-header">
          <div className="mobile-header-content">
            <button className="mobile-back-button" onClick={() => window.history.back()}>
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <h1 className="mobile-title">
              {isAdmin ? 'Panel Admin' : 
               isAuth ? 'PlayMovie' : 
               isDetail ? 'Detalle' :
               isProfile ? 'Mi Perfil' :
               location.pathname.includes('contacto') ? 'Contactar Soporte' :
               location.pathname.includes('nosotros') ? 'SOBRE PLAYMOVIE' :
               location.pathname.includes('404') ? 'PlayMovie' :
               'PlayMovie'}
            </h1>
            {!isAdmin && !isAuth && !isDetail && (
              <button className="mobile-back-button">
                <span className="material-symbols-outlined">settings</span>
              </button>
            )}
            {isDetail && (
              <div className="mobile-actions">
                <button className="mobile-action-button">
                  <span className="material-symbols-outlined">share</span>
                </button>
                <button className="mobile-action-button">
                  <span className="material-symbols-outlined">more_vert</span>
                </button>
              </div>
            )}
          </div>
        </header>

        <nav className="bottom-nav">
          <div className="bottom-nav-container">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`bottom-nav-item ${location.pathname === item.path || item.active ? 'active' : ''}`}
              >
                <span className="material-symbols-outlined">
                  {item.icon}
                </span>
                <span className="bottom-nav-label">{item.mobileLabel}</span>
              </Link>
            ))}
          </div>
        </nav>
      </>
    );
  }

  // Renderizar navbar desktop
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
            <Link to="/" className="navbar-logo">
              <span className="material-symbols-outlined fill">movie</span>
              <h2>PlayMovie</h2>
            </Link>

            {!isAdmin && !isAuth && (
              <div className="desktop-nav">
                <Link 
                  to="/peliculas" 
                  className={`desktop-nav-link ${location.pathname === '/peliculas' ? 'active' : ''}`}
                >
                  Películas
                </Link>
                <Link 
                  to="/series" 
                  className={`desktop-nav-link ${location.pathname === '/series' ? 'active' : ''}`}
                >
                  Series
                </Link>
                <Link 
                  to="/originales" 
                  className={`desktop-nav-link ${location.pathname === '/originales' ? 'active' : ''}`}
                >
                  Originales
                </Link>
                <Link 
                  to="/mi-lista" 
                  className={`desktop-nav-link ${location.pathname === '/mi-lista' ? 'active' : ''}`}
                >
                  Mi Lista
                </Link>
              </div>
            )}
          </div>

          <div className="user-actions">
            {!isAdmin && !isAuth && (
              <div className="search-container">
                <span className="material-symbols-outlined search-icon">search</span>
                <input 
                  type="text" 
                  placeholder="Buscar películas, series..." 
                  className="search-input"
                />
              </div>
            )}

            {isAdmin ? (
              <>
                <button className="icon-button" style={{ position: 'relative' }}>
                  <span className="material-symbols-outlined">notifications</span>
                  <span className="notification-badge"></span>
                </button>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ textAlign: 'right' }}>
                    <p style={{ fontSize: '14px', fontWeight: 'bold', margin: 0 }}>Admin User</p>
                    <p style={{ fontSize: '12px', color: 'var(--text-gray)', margin: 0 }}>Super Administrador</p>
                  </div>
                  <div 
                    className="avatar"
                    style={{ backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuBiaw-OCUWBMwyq7mdBDG5mEtGZXuoK31xSeDS4Pezqn3yDFpqfot2vLLsxRn3GT6PEoY8w98fJFahAHyLz1PxSGRX9-GAslWgZQGPQ-lzVrxbu8NkzfsSPDpVa86aXlmq_Ve4xTu2otlDJWP7oujb8-UHYMiS083PB9GqCCMJwdDbff-CFUQfRKcQgZhzLqP49m5SIFUxXzER3mqZCPXrG7kIDzTCiykP-IjKU2Nt3VunvtO4UzlrEBkmTsK2zylEPQ1hfDEoQ7CM)' }}
                  />
                </div>
              </>
            ) : isAuth ? (
              <button className="auth-button">
                Únete ahora
              </button>
            ) : (
              <>
                <button className="subscribe-button">
                  Suscribirse
                </button>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button className="icon-button">
                    <span className="material-symbols-outlined">notifications</span>
                  </button>
                  <button className="icon-button">
                    <span className="material-symbols-outlined">settings</span>
                  </button>
                </div>
                <Link to="/perfil">
                  <div 
                    className="avatar"
                    style={{ backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuBjUqZmFXUMP9g197QpxXHbimt5Z2PdUYlxwfhLw9P7lAZEcony0qncKsjTlBiU2vWMfDfQZg36Dw9uJJ-4cem0Z5_Fy9LzJdFZ1oNHAr86KfGdt93X4_TjmvSzm9Ew8ugkGC9XnSDNRrKpyamlw9mXBMzZxYH-QH8RDRl_Sle_tKgMrd2DeTAiPAMSuVDcj-G12FrTNa0l44_iKJazMidphF6oPElbeTBvnMl1EDmt88eZbA-prD2fgqu32y37C0-qoDYkAm9x1vE)' }}
                  />
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Sidebar para admin */}
      {isAdmin && (
        <aside className="admin-sidebar">
          <nav className="admin-nav">
            <Link to="/admin" className={`admin-nav-item ${location.pathname === '/admin' ? 'active' : ''}`}>
              <span className="material-symbols-outlined">dashboard</span>
              <span className="admin-nav-label">Panel</span>
            </Link>
            <Link to="/admin/peliculas" className={`admin-nav-item ${location.pathname.includes('peliculas') ? 'active' : ''}`}>
              <span className="material-symbols-outlined">movie_filter</span>
              <span className="admin-nav-label">Películas</span>
            </Link>
            <Link to="/admin/usuarios" className={`admin-nav-item ${location.pathname.includes('usuarios') ? 'active' : ''}`}>
              <span className="material-symbols-outlined">group</span>
              <span className="admin-nav-label">Usuarios</span>
            </Link>
            <Link to="/admin/analisis" className={`admin-nav-item ${location.pathname.includes('analisis') ? 'active' : ''}`}>
              <span className="material-symbols-outlined">bar_chart</span>
              <span className="admin-nav-label">Análisis</span>
            </Link>
            <Link to="/admin/ingresos" className={`admin-nav-item ${location.pathname.includes('ingresos') ? 'active' : ''}`}>
              <span className="material-symbols-outlined">payments</span>
              <span className="admin-nav-label">Ingresos</span>
            </Link>
          </nav>
          <div className="admin-sidebar-footer">
            <Link to="/admin/ajustes" className={`admin-nav-item ${location.pathname.includes('ajustes') ? 'active' : ''}`}>
              <span className="material-symbols-outlined">settings</span>
              <span className="admin-nav-label">Configuración</span>
            </Link>
          </div>
        </aside>
      )}
    </>
  );
};

export default NavBar;