import { Navigate } from "react-router-dom";
import Admin from "./Admin";


const AdminProtegida = () => {
  const usuarioLogueado = sessionStorage.getItem("usuarioLogueado");

  if (!usuarioLogueado) {
    return <Navigate to="/login" />;
  }
  return <Admin />;
};
export default AdminProtegida;