import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css'
import "./index.css";
import NavBar from "./componentes/Nav";
import Footer from "./componentes/Footer";
import AdminProtegida from './pages/Admin/AdminProtegida';
import Contacto from './pages/Contacto/Contacto';
import Home from './pages/Home/home';



function App() {  
  const [peliculas, setPeliculas] = useState(() => {
    try {
      const guardadas = localStorage.getItem("peliculas");
      return guardadas ? JSON.parse(guardadas) : [];
    } catch (error) {
      console.error("Error al parsear películas de localStorage", error);
      return [];
    }
  });

  const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=9678a642782cbed22b8137edf52e9d91&language=es-ES&page=1";
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    if (peliculas.length === 0) {
      const consultarAPI = async () => {
        try {
          const respuesta = await fetch(API_URL);
          const { results } = await respuesta.json();
          
          const peliculasPopulares = results.map(pelicula => ({
            id: crypto.randomUUID(),
            titulo: pelicula.title,
            año: pelicula.release_date ? pelicula.release_date.split("-")[0] : "2024",
            poster: `${IMAGE_BASE_URL}${pelicula.poster_path}`
          }));
          
          setPeliculas(peliculasPopulares);
        } catch (error) {
          console.error("Error al consultar la API de películas", error);
        }
      };
      consultarAPI();
    }
  }, []); // Se ejecuta solo si 'peliculas' está vacío al inicio.

  useEffect(() => {
    localStorage.setItem("peliculas", JSON.stringify(peliculas));
  }, [peliculas]);

  return (
    <>
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/admin" element={<AdminProtegida peliculas={peliculas} setPeliculas={setPeliculas} />} />
        <Route path="/contacto" element={<Contacto/>} />
        <Route path="/home" element={<Home peliculas={peliculas} />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
    
    </>
  )
}

export default App
