import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import "./index.css";
import AdminProtegida from "./pages/Admin/AdminProtegida";

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
       <Route path="/admin" element={<AdminProtegida />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
