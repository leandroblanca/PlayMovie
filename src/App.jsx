import { BrowserRouter, Routes, Route, Router } from "react-router-dom-dom";
import './App.css'
import "./index.css";
import NavBar from "./componentes/NavBar";
import Footer from "./componentes/Footer";
import AdminProtegida from './pages/Admin/Admin';
import Contacto from './pages/Contacto/Contacto.jsx';
import Registro from './pages/Registro/Registro.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login/Login.jsx';



import AboutUs from "./pages/AboutUs"
import Home from "./pages/Home";

// Hook personalizado para detectar dispositivo
const useMobileDetect = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};

// Componente para renderizar versión responsive
const ResponsivePage = ({ mobile: MobileComponent, desktop: DesktopComponent }) => {
  const isMobile = useMobileDetect();
  return isMobile ? <MobileComponent /> : <DesktopComponent />;
};

function App() {
  return (
    <Router>
      <div className="app-container">
        <NavBar />
        <main className="main-content">
          <Routes>
            {/* Ruta principal - Home */}
            <Route 
              path="/" 
              element={<ResponsivePage mobile={Home} desktop={HomeDesktop} />} 
            />
            
            {/* Películas */}
            <Route path="/peliculas" element={<Peliculas />} />
            
            {/* Detalle de película con ID dinámico */}
            <Route 
              path="/pelicula/:id" 
              element={<ResponsivePage mobile={PeliculaDetalle} desktop={PeliculaDetalleDesktop} />} 
            />
            
            {/* Series */}
            <Route path="/series" element={<Series />} />
            
            {/* Explorar */}
            <Route path="/explorar" element={<Explorar />} />
            
            {/* Contacto */}
            <Route 
              path="/contacto" 
              element={<ResponsivePage mobile={Contacto} desktop={ContactoDesktop} />} 
            />
            
            {/* Nosotros */}
            <Route 
              path="/nosotros" 
              element={<ResponsivePage mobile={Nosotros} desktop={NosotrosDesktop} />} 
            />
            
            {/* Perfil de usuario */}
            <Route 
              path="/perfil" 
              element={<ResponsivePage mobile={Perfil} desktop={PerfilDesktop} />} 
            />
            
            {/* Mi lista */}
            <Route path="/mi-lista" element={<MiLista />} />
            
            {/* Descargas */}
            <Route path="/descargas" element={<Descargas />} />
            
            {/* Autenticación */}
            <Route 
              path="/login" 
              element={<ResponsivePage mobile={Login} desktop={LoginDesktop} />} 
            />
            
            <Route 
              path="/registro" 
              element={<ResponsivePage mobile={Registro} desktop={RegistroDesktop} />} 
            />
            
            {/* Rutas de administración */}
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/admin/peliculas" element={<AdminPeliculas />} />
            <Route path="/admin/usuarios" element={<AdminUsuarios />} />
            <Route path="/admin/analisis" element={<AdminAnalisis />} />
            <Route path="/admin/ingresos" element={<AdminIngresos />} />
            <Route path="/admin/ajustes" element={<AdminAjustes />} />
            
            {/* Página 404 */}
            <Route 
              path="/404" 
              element={<ResponsivePage mobile={Error404} desktop={Error404Desktop} />} 
            />
            
            {/* Redireccionar rutas no encontradas a 404 */}
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;