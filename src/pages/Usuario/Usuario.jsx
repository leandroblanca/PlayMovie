import React from 'react'
import "./Usuario.css"

const Usuario = () => {
  const [nombre, setNombre] = useState("Alex Rivers")
  const [email, setEmail] = useState("alex.rivers@gmail.com")
  const [clave, setClave] = useState("")
  const [genero, setGenero] = useState("hombre")
  const usuario = {
    nombre: "Alex Rivers",
    email: "alex.rivers@gamil.com",
    genero: "hombre"
  }
  return (
    <>
      <div className='Perfil-Info'>
        <img src=""
          alt="Foto de Usuario" />
        <div className='User'>
          <h1></h1>
          <p className='Email'></p>
          <span><strong>MIEMBRO PREMIUM</strong></span>
        </div>
        <div className='Botones'>
          <button className='Editar'>Editar Perfil</button>
          <button className='Cerrar-Sesion'>Cerrar Sesión</button>
        </div>
      </div>
    </>
  )
}

export default Usuario