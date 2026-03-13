import React from "react";
import "./AboutUs.css";
import team1 from "../../../public/assets/team1.jpg";
import team2 from "../../../public/assets/team2.jpg";
import team3 from "../../../public/assets/team3.jpg";
import team4 from "../../../public/assets/team4.jpg";
import workspace from "../../../public/assets/workspace.jpg";

const AboutUs = () => {
  return (
    <div className="aboutus-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h2>Redefiniendo</h2>
          <h2>Experiencias</h2>
          <h1>Cinematográficas</h1>
          <p>
            PlayMovie es el destino definitivo para los amantes del cine,
            llevando la magia de la gran pantalla a tus dedos a través de
            tecnología de vanguardia.
          </p>
          <button className="btn btn-danger">Nuestra Trayectoria</button>
        </div>
      </section>

      {/* Misión */}
      <section className="mission row">
        <div className="col-md-6 mission-text">
          <h2>NUESTRA MISIÓN</h2>
          <p>
            Dando vida a las historias, dondequiera que vayas. Fundada en 2024,
            PlayMovie nació de una pasión compartida por el poder transformador
            de la narración de historias...
          </p>
        </div>
        <div className="col-md-6 mission-img">
         {/*  <img src={workspace} alt="workspace" /> */}
          <span className="badge bg-danger">15M+ <span className="badge1 bg-danger">ESPECTADORES ACTIVOS</span> </span>
          
        </div>
      </section>

      {/* Equipo */}
      <section className="team">
        <h2>Conoce al Equipo</h2>
        <div className="row">
            <div className="col-md-3">
                <div className="card">  
{/*                     <img src={team1} alt="Leandro Blanca" /> */}
                    <h5>Leandro Blanca</h5>
                    <p>Rolling Develloper</p>
                    <h6>Lider visionario con 15 años de producción Cinematográfica e innovación en medios digitales.</h6>
                </div>
          
            </div>
            <div className="col-md-3">
                <div className="card">
                 {/*    <img src={team2} alt="Marisol Lamas" /> */}
                    <h5>Marisol Lamas</h5>
                    <p>Rolling Develloper</p>
                    <h6>Arquitecta de infraestructura que lideró operaciones de escalado para plataformas globales.</h6>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card">
                    <img className="SV" src={team3} alt="Sebastián Varela" />
                    <h5>Sebastián Varela</h5>
                    <p>Rolling Develloper</p>
                    <h6>Diseñador galardonado centrado en la creación de interfaces de usuarios</h6>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card">
                {/* <img src={team4} alt="Abel Ruiz" /> */}
                <h5>Abel Ruiz</h5>
                <p>Rolling Develloper</p>
                <h6>Critico de cine y curador dedicado a descubrir voces independientes.</h6>
                </div>
            </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <div>
            <h2>Únete a nuestra creciente comunidad</h2>
                <p>
                Sé el primero en enterarte de nuevos lanzamientos, eventos
                cinematográficos y contenido exclusivo detrás de escena.
                </p>
            <div className="subscribe">
            <input
                type="email"
                placeholder="Introduce tu correo electrónico"
            />
            <button className="btn btn">Suscribirse</button>
            </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;