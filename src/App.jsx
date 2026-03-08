import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import "./index.css";
import AdminProtegida from "./pages/Admin/AdminProtegida";
import Sidebar from './componentes/Sidebar';

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
       <Route path="/admin" element={<AdminProtegida />} />
       <Route path="/admin" element={<Sidebar />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
