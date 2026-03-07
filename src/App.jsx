import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import "./index.css";
import AdminProtegida from "./pages/Admin/AdminProtegida";
import Login from './pages/login';

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
       <Route path="/admin" element={<AdminProtegida />} />
       <Route path="/login" element={<Login />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
