import { Navigate } from "react-router-dom";
import Admin from "./Admin";


const AdminProtegida = () => {
  // Verificar si hay un usuario logueado en sessionStorage
  const usuarioLogueado = sessionStorage.getItem("usuarioLogueado");

  // Si no hay usuario, redirigir a la página de login
  if (!usuarioLogueado) {
    return <Navigate to="/login" />;
  }

  // Si hay un usuario, mostrar el panel de administración
  return <Admin />;
};
export default AdminProtegida;