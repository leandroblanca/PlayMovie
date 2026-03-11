import { faDollarSign, faFilm, faUserPlus, faUsers } from "@fortawesome/free-solid-svg-icons";

export const dashboardStats = [
  {
    id: 1,
    icon: faFilm,
    tendencia: "up",
    porcentaje: "+12%",
    titulo: "Total de Películas",
    valor: 1240
  },
  {
    id: 2,
    icon: faUsers,
    tendencia: "up",
    porcentaje: "+5%",
    titulo: "Usuarios Activos",
    valor: 85241
  },
  {
    id: 3,
    icon: faDollarSign,
    tendencia: "down",
    porcentaje: "-2%",
    titulo: "Ingresos Totales",
    valor: 12450
  },
  {
    id: 4,
    icon: faUserPlus,
    tendencia: "up",
    porcentaje: "+18%",
    titulo: "Nuevos Registros",
    valor: 124
  }
];

export const registroSistema = [
  {
    id: 1,
    titulo: "Copia de Seguridad Completada",
    categoria: "Usuarios Activos",
    hora: "10:45 AM",
    color: "#198754"
  },
  {
    id: 2,
    titulo: "Alerta de Seguridad",
    categoria: "Usuarios Activos",
    hora: "08:22 AM",
   color: "#dc3545"

  },
  {
    id: 3,
    titulo: "Película Publicada",
    categoria: "Usuarios Activos",
    hora: "Ayer",
    color: "#0d6efd"
  }
];