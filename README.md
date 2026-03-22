# 🎬 PlayMovie

PlayMovie es una aplicación web de streaming de películas estilo Netflix, desarrollada con React y Vite. Permite a los usuarios explorar, guardar y gestionar contenido audiovisual, junto con un sistema completo de autenticación y administración.

---

## 📌 Descripción General

PlayMovie ofrece una experiencia moderna, intuitiva y responsive para disfrutar de películas. Incluye funcionalidades tanto para usuarios como para administradores, con control de acceso basado en roles y gestión completa del contenido.

---

## 🚀 Funcionalidades Principales

### 🎥 Experiencia de Usuario
- Catálogo de películas precargadas.
- Visualización de detalles de cada película.
- Sistema de favoritos.
- Sistema de reseñas de películas.
- Navegación fluida con React Router.
- Interfaz estilo plataformas de streaming.

### 👤 Gestión de Usuarios
- Registro e inicio de sesión.
- Perfil de usuario editable (CRUD completo).
- Gestión de favoritos por usuario.

### ⭐ Sistema de Reseñas
- Crear reseñas de películas.
- Editar y eliminar reseñas.
- Visualización de opiniones de otros usuarios.

### 💳 Suscripciones y Pagos
- Visualización de planes de suscripción.
- Simulación de pasarela de pago.
- Gestión de acceso según tipo de plan.

### 📩 Contacto
- Formulario de contacto funcional.
- Envío de mensajes mediante EmailJS.

### 🛠 Panel de Administración
- Rutas protegidas.
- Acceso exclusivo para administradores.
- CRUD completo de:
  - Películas
  - Usuarios
- Gestión general del contenido de la plataforma.

### 🎨 Interfaz y UX
- Diseño responsive.
- Estética moderna estilo Netflix.
- Notificaciones con React Toastify.

---

## 🧑‍💻 Tecnologías Utilizadas

### Frontend
- React 19
- Vite
- React Router DOM
- Bootstrap 5
- React Bootstrap

### Librerías UI/UX
- React Toastify
- SweetAlert
- Font Awesome
- React Hook Form

### Servicios
- EmailJS (formulario de contacto)

---

## 📦 Instalación

### Prerrequisitos
- Node.js (v16 o superior)
- npm o yarn

### 🔧 Pasos

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/leandroblanca/PlayMovie.git
   cd PlayMovie
Instalar dependencias

bash
npm install
Configurar variables de entorno

Crear un archivo .env en la raíz con las siguientes variables:

env
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
Ejecutar el proyecto

bash
npm run dev
👉 La aplicación estará disponible en: http://localhost:5173

📁 Estructura del Proyecto
text
PlayMovie/
├── public/
│   └── assets/
├── src/
│   ├── componentes/
│   │   ├── footer/
│   │   ├── NavBar/
│   │   └── RutaProtegida.jsx
│   ├── data/
│   │   ├── categories.js
│   │   └── movies.js
│   ├── helpers/
│   │   ├── users.js
│   │   └── validacionesUsuarios.js
│   ├── pages/
│   │   ├── AboutUs/
│   │   ├── Admin/
│   │   ├── Contacto/
│   │   ├── error404/
│   │   ├── home/
│   │   ├── Login/
│   │   ├── Registro/
│   │   ├── DetallePelicula/
│   │   ├── PerfilUsuario/
│   │   ├── PasarelaPago/
│   │   ├── Suscripciones/
│   │   └── CentroAyuda/
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── README.md
🎮 Uso
👥 Para Usuarios
Registrarse o iniciar sesión.

Explorar el catálogo.

Ver detalles de películas.

Agregar a favoritos.

Dejar reseñas.

Gestionar perfil.

Enviar consultas desde contacto.

🛡 Para Administradores
Acceder al panel en /admin.

Gestionar usuarios.

Gestionar películas.

📱 Diseño Responsive
Mobile-first

Menú hamburguesa

Cards adaptables

🧠 Gestión de Estado
Hooks de React

Lógica modular en helpers

Manejo de autenticación y roles

👥 Equipo de Proyecto: PlayMovie
Marisol Lamas — Scrum Master

Leandro Blanca — Líder Técnico

Abel Ruiz — Desarrollador

Sebastian Varela — Desarrollador

🔮 Próximas Mejoras
Integración con API de películas (ej: TMDB).

Sistema de recomendaciones personalizadas.

Búsqueda avanzada con filtros.

Watchlist personalizada.

PWA (instalable como app).

Login con Google/redes sociales.

📄 Licencia
Proyecto desarrollado con fines educativos y práctica profesional.