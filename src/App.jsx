import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import "./index.css";
import NavBar from "./componentes/NavBar";

// Importar las páginas que SÍ existen
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import AboutUs from "./pages/AboutUs";
import Contacto from "./pages/Contacto/Contacto";

// Nota: Estas páginas no existen aún, están comentadas
import Peliculas from "./pages/Peliculas";


// Hook personalizado para detectar dispositivo
const useMobileDetect = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};

// Componente para renderizar versión responsive
const ResponsivePage = ({ mobile: MobileComponent, desktop: DesktopComponent }) => {
  const isMobile = useMobileDetect();
  // Si no se proporciona versión desktop, usar la misma que mobile
  if (!DesktopComponent) {
    return <MobileComponent />;
  }
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
              element={<ResponsivePage mobile={Home} desktop={Home} />} 
            />
            {/* /peliculas */}
            <Route 
              path="/peliculas" 
              element={<ResponsivePage mobile={Peliculas} desktop={Peliculas} />} 
            />

            {/* /AboutUs */}
            <Route 
              path="/AboutUs" 
              element={<ResponsivePage mobile={AboutUs} desktop={AboutUs} />} 
            />

            {/* Ruta de login */}
            <Route 
              path="/Login" 
              element={<ResponsivePage mobile={Login} desktop={Login} />} 
            />
            
            {/* Ruta de contacto */}
            <Route 
              path="/Contacto" 
              element={<ResponsivePage mobile={Contacto} desktop={Contacto} />} 
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;