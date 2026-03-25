import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import "./Admin.css";

function Sidebar({ onLogout }) {
  const [showConfig, setShowConfig] = useState(false);

  return (
    <div className='d-flex flex-column h-100 py-4'>
         <Nav className='Sidebar-admin flex-column' activeKey="/admin">
      <Nav.Item  >
          <Nav.Link eventKey="peliculas" className="text-light fs-4 fw-bold mb-0 mt-5" >PlayMovie</Nav.Link>
        </Nav.Item>
         <Nav.Item className='sidebar-hover'>
          <Nav.Link as={NavLink} to="/admin" eventKey="panel" className="text-light">Panel</Nav.Link>
        </Nav.Item>
         <Nav.Item className='sidebar-hover'>
          <Nav.Link as={NavLink} to="/peliculas" className="text-light">Películas</Nav.Link>
        </Nav.Item>
        <Nav.Item className='sidebar-hover'>
          <Nav.Link as={NavLink} to="/usuarios" className="text-light">Usuarios</Nav.Link>
        </Nav.Item>
        <Nav.Item className='sidebar-hover'>
          <Nav.Link as={NavLink} to="/ingresos" className="text-light">Ingresos</Nav.Link>
        </Nav.Item>
        <Nav.Item className='sidebar-hover'>
          <Nav.Link onClick={() => setShowConfig(!showConfig)} className="text-light" style={{ cursor: 'pointer' }}>
            Configuración
          </Nav.Link>
          {showConfig && (
            <div className="ms-3 animate__animated animate__fadeIn">
              <Nav.Link onClick={(e) => {
                e.preventDefault();
                onLogout();
              }} className="text-danger small fw-bold">
                Cerrar Sesión
              </Nav.Link>
            </div>
          )}
        </Nav.Item>
    </Nav>
    

    </div>
   
  );
}

export default Sidebar;