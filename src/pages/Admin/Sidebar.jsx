import Nav from 'react-bootstrap/Nav';
import "../pages/Admin/Admin.css";
function Sidebar() {
  return (
    <div className='d-flex flex-column vh-100 mt-5'>
         <Nav className='Sidebar-admin flex-column'
      activeKey="/admin"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item  >
          <Nav.Link eventKey="peliculas" className="text-light fs-4 fw-bold mb-0" >PlayMovie</Nav.Link>
          <p className='ms-3 consola-admin'>Consola de Administración</p>
        </Nav.Item>
         <Nav.Item className='sidebar-hover'>
          <Nav.Link eventKey="peliculas" className="text-light">Panel</Nav.Link>
        </Nav.Item>
         <Nav.Item className='sidebar-hover'>
          <Nav.Link eventKey="peliculas" className="text-light">Películas</Nav.Link>
        </Nav.Item>
        <Nav.Item className='sidebar-hover'>
          <Nav.Link eventKey="usuarios" className="text-light">Usuarios</Nav.Link>
        </Nav.Item>
        <Nav.Item className='sidebar-hover'>
          <Nav.Link eventKey="analisis" className="text-light">Análisis</Nav.Link>
        </Nav.Item>
        <Nav.Item className='sidebar-hover'>
          <Nav.Link eventKey="ingresos" className="text-light">Ingresos</Nav.Link>
        </Nav.Item>
        <Nav.Item className='sidebar-hover'>
          <Nav.Link eventKey="ingresos" className="text-light">Configuración</Nav.Link>
        </Nav.Item>
    </Nav>
    

    </div>
   
  );
}

export default Sidebar;