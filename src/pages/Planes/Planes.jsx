import React from 'react'
import "./Planes.css"
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const Planes = () => {
    return (
        <div>
            <section className='Title'>
                <h1 className='Titulo'><strong>Todo el cine,</strong>
                    <strong className='Titulo-Rojo'> a tu alcance.</strong></h1>
                <p className='Parrafo'>Elige el plan que mejor se adapte a ti.
                    Cancela cuando quieras, sin <br /> compromisos.</p>
            </section>
            <div className='Contenedor'>
                <div className='Card'>
                    <div className='Header'>
                        <h2>Básico</h2>
                        <h3>$7.99<span className='Mes'>/mes</span></h3>
                        <p className='Letras'>Ideal para smartphones y tables.</p>
                    </div><hr />
                    <div className='Card-Body'>
                        <li>
                            <FaCheckCircle className='Icono' /> <span className='Text'>Calidad SD (480p)</span>
                        </li>
                        <li>
                            <FaCheckCircle className='Icono' /> <span className='Text'>1 dispositivo a la vez</span>
                        </li>
                        <li>
                            <FaCheckCircle className='Icono' /> <span className='Text'>Catálogo completo</span>
                        </li>
                        <li>
                            <FaTimesCircle className='Icono-Tachado' /> <span className='Text-Tachado'>Descargas offline</span>
                        </li>
                    </div><hr />
                    <button className='Plan'>Elegir Plan</button>
                </div>
                <div className='Card-Rojo'>
                    <div className='Header'>
                        <h2>Estándar</h2>
                        <h3>$12.99<span className='Mes'>/mes</span></h3>
                        <p className='Letras'>Para compartir en alta definición.</p>
                    </div><hr />
                    <div className='Card-Body'>
                        <li>
                            <FaCheckCircle className='Icono' /> <span className='Text'>Calidad full HD (1080p)</span>
                        </li>
                        <li>
                            <FaCheckCircle className='Icono' /> <span className='Text'>2 dispositivo a la vez</span>
                        </li>
                        <li>
                            <FaCheckCircle className='Icono' /> <span className='Text'>Descargas disponibles</span>
                        </li>
                        <li>
                            <FaCheckCircle className='Icono' /> <span className='Text'>Sin anuncios</span>
                        </li>
                    </div><hr />
                    <button className='Plan-Rojo'>Elegir Plan</button>
                </div>
                <div className='Card'>
                    <div className='Header'>
                        <h2>Premium</h2>
                        <h3>$17.99<span className='Mes'>/mes</span></h3>
                        <p className='Letras'>La experiencia definitiva de cine.</p>
                    </div><hr />
                    <div className='Card-Body'>
                        <li>
                            <FaCheckCircle className='Icono' /> <span className='Text'>Calidad Ultra HD (4K) + HDR</span>
                        </li>
                        <li>
                            <FaCheckCircle className='Icono' /> <span className='Text'>4 dispositivo a la vez</span>
                        </li>
                        <li>
                            <FaCheckCircle className='Icono' /> <span className='Text'>Sonido Dolby Atmos</span>
                        </li>
                        <li>
                            <FaCheckCircle className='Icono' /> <span className='Text'>Descargas en 10 dispositivos</span>
                        </li>
                    </div><hr />
                    <button className='Plan'>Elegir Plan</button>
                </div>
            </div>
        </div>
    )
}

export default Planes
