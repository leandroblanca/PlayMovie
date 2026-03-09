import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import "./index.css";
import Contacto from './pages/Contacto/Contacto';

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Contacto />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
