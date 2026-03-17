import React from 'react'
import "./Usuario.css"
import { useState } from 'react';
import { FaCheckCircle } from "react-icons/fa";
import Hombre from "/public/assets/Hombre.png"
import Mujer from "/public/assets/Mujer.png"

const Usuario = () => {
  const [nombre, setNombre] = useState("Alex Rivers")
  const [email, setEmail] = useState("alex.rivers@gmail.com")
  const [clave, setClave] = useState("")
  const [genero, setGenero] = useState("hombre")
  const [abrirModal, setAbrirModal] = useState(false)
  const usuario = {
    nombre: "Alex Rivers",
    email: "alex.rivers@gamil.com",
    genero: "hombre"
  }
  const cancelarEdicion = () => {
    setNombre(usuario.nombre);
    setEmail(usuario.email);
    setClave("");
    setGenero(usuario.genero);
    setAbrirModal(false);
  };
  const guardarCambios = (e) => {
    e.preventDefault();
    setAbrirModal(false)
    if (clave !== "") { }
  };

  return (
    <div className='Perfil'>
      <div className='Perfil-Info'>
        <img className='Avatar' src={genero === "hombre" ? Hombre : Mujer}
          alt="Foto de Usuario" />
        <div className='User'>
          <h1>{nombre}</h1>
          <p className='Email'>{email}</p>
          <span><strong className='Premium'>MIEMBRO PREMIUM</strong></span>
        </div>
        <div className='Botones'>
          <button onClick={() => setAbrirModal(true)}
            className='Editar'>Editar Perfil</button>
          {abrirModal && (
            <div className='Fondo'>
              <div className='Modal'>
                <div className='ModalHeader'>
                  <h2 className='Titulo'>Editar Perfil</h2>
                  <button className='Cerrar'
                    onClick={cancelarEdicion}
                    type='button'>X</button>
                </div>
                <form onSubmit={guardarCambios}>
                  <div className='ModalBody'>
                    <label className='Text'>Nombre y Apellido:</label>
                    <input className='inputs' type="text" required
                    minLength={3}
                    maxLength={22}
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}/>
                  </div>
                </form>
              </div>
            </div>
          )}
          <button className='Cerrar-Sesion'>Cerrar Sesión</button>
        </div>
      </div>
      <div className='Estadisticas'>
        <div className='stat'>
          <h2>124</h2>
          <h5>Peliculas</h5>
          <p className='Letras'>VISTOS</p>
        </div>
        <div className='stat'>
          <h2>45</h2>
          <h5>Series</h5>
          <p className='Letras'>VISTOS</p>
        </div>
        <div className='stat'>
          <h2>12</h2>
          <h5>Documentales</h5>
          <p className='Letras'>VISTOS</p>
        </div>
      </div>
      <div className='tabs'>
        <button className='Item'>Ajustes de cuenta</button>
        <button className='Item'>Subscripción</button>
        <button className='Extra'>Mis favoritos</button>
      </div>
      <div className='Contenido'>
        <div className='Panel-Izquierdo'>
          <h4>Plan de Subscripción</h4>
          <div className='Plan'>
            <p className='Hd'><strong className='Hd'>ULTRA HD 4K</strong></p>
            <span className='Mes'><strong className='Precio'>15.99</strong>/Mes</span>
          </div>
          <li>
            <FaCheckCircle className='Icono' /> 4 Pantallas a la vez
          </li>
          <li>
            <FaCheckCircle className='Icono' /> Ultra HD disponible
          </li>
          <li>
            <FaCheckCircle className='Icono' /> Descargas ilimitadas
          </li>
        </div>
        <div className='Panel-Derecho'>
          <h3 className='Reciente'>Agregados Recientemente a Favoritos</h3>
          <div className='Fav'>
            <h3 className='Favoritos'>Mis Favoritos</h3>
            <button className='VerTodo'>Ver Todo</button>
          </div>
          <div className='Peliculas'>
            <div className='Pelis'></div>
            <div className='Pelis'></div>
            <div className='Pelis'></div>
            <div className='Pelis'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Usuario