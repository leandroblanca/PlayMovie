import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import "./index.css";
import { Router } from 'react-router'
import Nav from "./componentes/Nav";

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/inicio" element={<h1>Inicio</h1>} />
        <Route path="/peliculas" element={<h1>Películas</h1>} />
        <Route path="/series" element={<h1>Series</h1>} />
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
