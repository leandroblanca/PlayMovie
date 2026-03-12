export const validacionesUsuarios = {
  nombre: /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]{3,30}$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/,
  rol: /^(admin|user)$/,
  estado: /^(ACTIVO|INACTIVO)$/
};