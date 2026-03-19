import React from 'react'
import "./Planes.css"

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
                </div>
                <div className='Card-Rojo'>
                    <div className='Header'>
                        <h2>Estándar</h2>
                        <h3>$12.99<span className='Mes'>/mes</span></h3>
                        <p className='Letras'>Para compartir en alta definición.</p>
                    </div><hr />
                </div>
                <div className='Card'>
                    <div className='Header'>
                        <h2>Premium</h2>
                        <h3>$17.99<span className='Mes'>/mes</span></h3>
                        <p className='Letras'>La experiencia definitiva de cine.</p>
                    </div><hr />
                </div>
            </div>
        </div>
    )
}

export default Planes
