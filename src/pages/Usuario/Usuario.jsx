import React from 'react'
import "./Usuario.css"
import { useState } from 'react';
import { FaCheckCircle, FaHeart } from "react-icons/fa";
import Hombre from "/public/assets/Hombre.png"
import Mujer from "/public/assets/Mujer.png"
import peliculas from "../../data/movies";
import { useFavoritos } from '../../data/favorito';
import { useNavigate } from 'react-router';

const Usuario = () => {
  const {favoritos, eliminarFavorito, usuario} = useFavoritos()
  const navigate = useNavigate()

  const perfilGuardado = JSON.parse(localStorage.getItem(`perfil_${usuario?.id}`)) || {};

  const [nombre, setNombre] = useState(perfilGuardado.nombre || usuario?.nombre || "")
  const [email, setEmail] = useState(perfilGuardado.email || usuario?.email || "")
  const [clave, setClave] = useState("")
  const [genero, setGenero] = useState(perfilGuardado.genero || "hombre")
  const [abrirModal, setAbrirModal] = useState(false)

  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,20}$/;
  const requisitos = [
    { texto: "Mínimo 8 caracteres", ok: clave.length >= 8 },
    { texto: "Al menos una mayúscula", ok: /[A-Z]/.test(clave) },
    { texto: "Al menos un número", ok: /\d/.test(clave) },
    { texto: "Al menos un carácter especial", ok: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(clave) },
  ];

  const ultimosFavoritos = favoritos.slice(-4);

  const cancelarEdicion = () => {
    const guardado = JSON.parse(localStorage.getItem(`perfil_${usuario?.id}`)) || {};
    setNombre(guardado.nombre || usuario?.nombre || "");
    setEmail(guardado.email || usuario?.email || "");
    setClave("");
    setGenero(guardado.genero || "hombre");
    setAbrirModal(false);
  };

  const guardarCambios = (e) => {
    e.preventDefault();
    if (clave && !passwordRegex.test(clave)) {
      alert("La contraseña debe tener mínimo 8 caracteres, una mayúscula, un número y un carácter especial.");
      return;
    }
    const perfil = { nombre, email, genero };
    localStorage.setItem(`perfil_${usuario?.id}`, JSON.stringify(perfil));

    const usuariosGuardados = JSON.parse(localStorage.getItem("usuarios")) || [];
    const existe = usuariosGuardados.find(u => u.id === usuario.id);
    const usuarioActualizado = {
      ...(existe || usuario),
      nombre,
      email,
      ...(clave ? { password: clave } : {})
    };
    const usuariosActualizados = existe
      ? usuariosGuardados.map(u => u.id === usuario.id ? usuarioActualizado : u)
      : [...usuariosGuardados, usuarioActualizado];
    localStorage.setItem("usuarios", JSON.stringify(usuariosActualizados));

    const sesionActual = JSON.parse(sessionStorage.getItem("usuarioLogueado")) || {};
    sessionStorage.setItem("usuarioLogueado", JSON.stringify({
      ...sesionActual,
      nombre,
      email,
      ...(clave ? { password: clave } : {})
    }));

    window.dispatchEvent(new Event("auth-change"));
    setAbrirModal(false);
    setClave("");
  };
  const handleQuitarFavorito = (e, peliculaId) => {
    e.stopPropagation();
    eliminarFavorito(peliculaId)
  }
  const irATososLosFavoritos = () => {
    navigate('/favoritos')
  }
  const cerrarSeccion = () => {
    sessionStorage.removeItem('usuarioLogueado')
    navigate('/login')
  }

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
                      onChange={(e) => setNombre(e.target.value)} />

                    <label className='Text'>Correo Electronico:</label>
                    <input className='inputs' type="email" required
                      maxLength={25}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)} />

                    <label className='Text'>Clave:</label>
                    <input className='inputs' type="password"
                      placeholder='Nueva Clave'
                      minLength={8}
                      maxLength={20}
                      value={clave}
                      onChange={(e) => setClave(e.target.value)} />
                    {clave.length > 0 && (
                      <ul style={{ listStyle: "none", padding: 0, margin: "6px 0 10px" }}>
                        {requisitos.map((r, i) => (
                          <li key={i} style={{ fontSize: "0.75rem", color: r.ok ? "#198754" : "#dc3545" }}>
                            {r.ok ? "✔" : "✖"} {r.texto}
                          </li>
                        ))}
                      </ul>
                    )}

                    <label className='Text'>Género:</label>
                    <select className='inputs'
                      value={genero} required
                      onChange={(e) => setGenero(e.target.value)}>
                      <option value="">Seleccionar</option>
                      <option value="hombre">Hombre</option>
                      <option value="mujer">Mujer</option>
                    </select>
                  </div>
                  <div className='ModalFooter'>
                    <button className='Cerrar-Sesion' type='button' onClick={cancelarEdicion}>Cancelar</button>
                    <button className='Guardar' type='submit'>Guardar Cambios</button>
                  </div>
                </form>
              </div>
            </div>
          )}
          <button className='Cerrar-Sesion' onClick={cerrarSeccion}>Cerrar Sesión</button>
        </div>
      </div>
      <div className='Estadisticas'>
        <div className='stat'>
          <h2>{favoritos.length}</h2>
          <h5>Favoritos</h5>
          <p className='Letras'>PELICULAS</p>
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
        <button className='Extra' onClick={irATososLosFavoritos}>Mis favoritos</button>
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
          {ultimosFavoritos.length === 0 ? (
            <p className='text-muted'>No hay favorios recientes.</p> 
          ) : (
            <div className='Peliculas'>
            {ultimosFavoritos.map((peli) => (
              <div className='Pelis' key={peli.id}>
                <img src={peli.poster} alt={peli.titulo} />
                <p>{peli.titulo}</p>
                <button
                 className='btn-quitar-fav'
                 onClick={(e) => handleQuitarFavorito (e, peli.id)}
                 title='Quitar de favoritos'
                 >
                  <FaHeart color='red'/>
                 </button>
              </div>
            ))}
          </div>
          )}
          <div className='Fav'>
            <h3 className='Favoritos'>Mis Favoritos ({favoritos.length})</h3>
            <button className='VerTodo' onClick={irATososLosFavoritos}>Ver Todo</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Usuario;