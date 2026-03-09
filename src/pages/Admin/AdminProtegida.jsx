import { Navigate } from "react-router-dom";
import Admin from "./Admin";


const isAdmin = true;

const AdminProtegida = () => {
  if (!isAdmin) {
    return <Navigate to="/login" />;
  }
  return <Admin />;
};
export default AdminProtegida;