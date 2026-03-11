import { Navigate } from "react-router-dom";
import Admin from "./Admin";


const AdminProtegida = () => {

  const usuarioLogueado = JSON.parse(sessionStorage.getItem("usuarioLogueado"));

  if (!usuarioLogueado) {
    return <Navigate to="/login" />;
  }
  if (usuarioLogueado.rol !== "admin") {
    return <Navigate to="/" />;
  }

  return <Admin />;
};

export default AdminProtegida;