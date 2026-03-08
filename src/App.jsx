import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import "./index.css";
import { Router } from 'react-router'
import Contacto from './pages/Contacto/Contacto';

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      < Route path='/contacto' element={<Contacto/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
