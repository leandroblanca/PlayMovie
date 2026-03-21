import React from 'react'
import "./Planes.css"
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Planes = () => {
    const navigate = useNavigate();
    const elegirPlan = (planId) => {
    navigate("/pago", { state: { planId } });
};
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
                        <div className='Division'>
                            <li>
                                <FaCheckCircle className='Icono' /> <span className='Text'>Calidad SD (480p)</span>
                            </li>
                            <li>
                                <FaCheckCircle className='Icono' /> <span className='Text'>1 dispositivo a la ves</span>
                            </li>
                        </div>
                        <div className='Division'>
                            <li>
                                <FaCheckCircle className='Icono' /> <span className='Text'>Catálogo completo</span>
                            </li>
                            <li>
                                <FaTimesCircle className='Icono-Tachado' /> <span className='Text-Tachado'>Descargas offline</span>
                            </li>
                        </div>
                    </div><hr />
                    <button className='Plan' onClick={() => elegirPlan("basico")}>Elegir Plan</button>
                </div>
                <div className='Card-Rojo'>
                    <div className='Header'>
                        <h2>Estándar</h2>
                        <h3>$12.99<span className='Mes'>/mes</span></h3>
                        <p className='Letras'>Para compartir en alta definición.</p>
                    </div><hr />
                    <div className='Card-Body'>
                        <div className='Division'>
                            <li>
                                <FaCheckCircle className='Icono' /> <span className='Text'>Calidad full HD (1080p)</span>
                            </li>
                            <li>
                                <FaCheckCircle className='Icono' /> <span className='Text'>2 dispositivo a la ves</span>
                            </li>
                        </div>
                        <div className='Division'>
                            <li>
                                <FaCheckCircle className='Icono' /> <span className='Text'>Descargas disponibles</span>
                            </li>
                            <li>
                                <FaCheckCircle className='Icono' /> <span className='Text'>Sin anuncios</span>
                            </li>
                        </div>
                    </div><hr />
                    <button className='Plan-Rojo' onClick={() => elegirPlan("estandar")}>Elegir Plan</button>
                </div>
                <div className='Card'>
                    <div className='Header'>
                        <h2>Premium</h2>
                        <h3>$17.99<span className='Mes'>/mes</span></h3>
                        <p className='Letras'>La experiencia definitiva de cine.</p>
                    </div><hr />
                    <div className='Card-Body'>
                        <div className='Division'>
                            <li>
                                <FaCheckCircle className='Icono' /> <span className='Text'>Calidad Ultra HD (4K) + HDR</span>
                            </li>
                            <li>
                                <FaCheckCircle className='Icono' /> <span className='Text'>4 dispositivo a la ves</span>
                            </li>
                        </div>
                        <div className='Division'>
                            <li className='Menos'>
                                <FaCheckCircle className='Icono' /> <span className='Text'>Sonido Dolby Atmos</span>
                            </li>
                            <li className='Mas'>
                                <FaCheckCircle className='Icono' /> <span className='Texto'>Descargas en 10 dispositivos</span>
                            </li>
                        </div>
                    </div><hr />
                    <button className='Plan' onClick={() => elegirPlan("premium")}>Elegir Plan</button>
                </div>
            </div>
            <h4>Preguntas Frecuentes</h4>
            <div className='Centrar'>
                <details>
                    <summary className='Preguntas'>¿Puedo cancelar en cualquier momento?</summary>
                    <p className='Interior'>Puedes cancelar tu suscripción desde la seccion 'Cuenta'. Una ves allí, selecciona 'Membresía y facturación'
                        y sigue los pasos para la cancelación. Seguiras teniendo acceso al servicio hasta el final del periodo de facturacion actual
                    </p>
                </details>
                <details>
                    <summary className='Preguntas'>¿En que dispositivos puedo verlo?</summary>
                    <p className='Interior'> Puedes ver el contenido en una amplia variedad de dispositivos como Smart TVs, computadoras, teléfonos móviles,
                        tablets y consolas de videojuegos. Solo necesitas iniciar sesión en tu cuenta desde el dispositivo que prefieras.</p>
                </details>
                <details>
                    <summary className='Preguntas'>¿Como cambio de plan?</summary>
                    <p className='Interior'>Puedes cambiar de plan en cualquier momento desde la sección 'Cuenta'. Dirígete a 'Membresía y facturación',
                        selecciona 'Cambiar plan' y elige la opción que mejor se adapte a tus necesidades. El cambio se aplicará según
                        el ciclo de facturación.</p>
                </details>
                <details>
                    <summary className='Preguntas'>¿Que es el audio Dolby Atmos?</summary>
                    <p className='Interior'>Dolby Atmos es una tecnología de sonido envolvente que mejora la experiencia de audio, permitiéndote escuchar
                        efectos con mayor claridad y realismo. Para disfrutarlo, necesitas un dispositivo y sistema de audio compatible.</p>
                </details>
            </div>
        </div>
    )
}

export default Planes
