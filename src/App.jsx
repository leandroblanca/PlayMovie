import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import "./index.css";
import { Router } from 'react-router'
import Nav from "./componentes/Nav";
import Footer from "./componentes/Footer";
import AdminProtegida from './pages/Admin/Admin';
import Contacto from './pages/Contacto/Contacto';



function App() {
  

  return (
    <>
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/admin" element={<AdminProtegida/>} />
        <Route path="/contacto" element={<Contacto/>} />
        
    </Routes>
    <Footer />
    </BrowserRouter>
    
    </>
  )
}

export default App
