import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import "./index.css";
import Nav from "./componentes/Nav";
import Footer from "./componentes/Footer";
import Error404 from "./pages/Error404"

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/inicio" element={<h1>Inicio</h1>} />
        <Route path="/peliculas" element={<h1>Películas</h1>} />
        <Route path="/series" element={<h1>Series</h1>} />
        <Route path="*" element={<Error404 />} />


    </Routes>
    <Footer />
    </BrowserRouter>
    
    </>
  )
}

export default App
