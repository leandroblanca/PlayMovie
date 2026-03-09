import { Navigate } from "react-router-dom";
import Admin from "./Admin";


const isAdmin = true;

const AdminProtegida = ({ peliculas, setPeliculas }) => {
  if (!isAdmin) {
    return <Navigate to="/login" />;
  }
  return <Admin peliculas={peliculas} setPeliculas={setPeliculas} />;
};
export default AdminProtegida;