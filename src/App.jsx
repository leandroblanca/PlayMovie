import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css'
import "./index.css";
import NavBar from "./componentes/Nav";
import Footer from "./componentes/Footer";
import AdminProtegida from './pages/Admin/AdminProtegida';
import Contacto from './pages/Contacto/Contacto';
import Home from './pages/Home/Home.jsx';
import CategoriaPage from './componentes/Categoria.jsx';
import peliculasData from './data/movies';


function App() {  
  const [peliculas, setPeliculas] = useState((peliculasData))


  useEffect(() => {
    localStorage.setItem("peliculas", JSON.stringify(peliculas));
  }, [peliculas]);

  return (
    <>
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/admin" element={<AdminProtegida peliculas={peliculas} setPeliculas={setPeliculas} />} />
        <Route path="/contacto" element={<Contacto/>} />
        <Route path="/home" element={<Home peliculas={peliculas} />}/>
        <Route path="/categoria/:gender" element={<CategoriaPage peliculas={peliculas} />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    
    </>
  )
}

export default App
