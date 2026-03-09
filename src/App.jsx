import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import "./index.css";
import Nav from "./componentes/Nav";
import Footer from "./componentes/Footer";
import AdminProtegida from './pages/Admin/AdminProtegida.jsx';
import Contacto from './pages/Contacto/Contacto.jsx';
import Registro from './pages/Registro/Registro.jsx';
import Home from './pages/Home.jsx';



function App() {
  

  return (
    <>
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminProtegida/>} />
        <Route path="/contacto" element={<Contacto/>} />
        <Route path="/registro" element={<Registro/>} />
    </Routes>
    <Footer />
    </BrowserRouter>
    
    </>
  )
}

export default App
