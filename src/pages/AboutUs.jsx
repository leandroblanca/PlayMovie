import React from "react";
import "./AboutUs.css";
import team1 from "../assets/team1.jpg";
import team2 from "../assets/team2.jpg";
import team3 from "../assets/team3.jpg";
import team4 from "../assets/team4.jpg";

const AboutUs = () => {
  return (
    <div className="aboutus-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Redefiniendo Experiencias Cinematográficas</h1>
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
            Dando Vida a las Historias, Dondequiera que Vayas. Fundada en 2024,
            PlayMovie nació de una pasión compartida por el poder transformador
            de la narración de historias...
          </p>
        </div>
        <div className="col-md-6 mission-img">
          <img src="workspace.jpg" alt="workspace" />
          <span className="badge bg-danger">15M+ ESPECTADORES ACTIVOS</span>
        </div>
      </section>

      {/* Equipo */}
      <section className="team">
        <h2>Conoce al Equipo</h2>
        <div className="row">
          <div className="col-md-3">
            <img src={team1} alt="Alex Rivers" />
            <h5>Alex Rivers</h5>
            <p>CEO y Fundador</p>
          </div>
          <div className="col-md-3">
            <img src={team2} alt="Sarah Chen" />
            <h5>Sarah Chen</h5>
            <p>Directora de Tecnología</p>
          </div>
          <div className="col-md-3">
            <img src={team3} alt="Marcus Thorne" />
            <h5>Marcus Thorne</h5>
            <p>Líder de Diseño</p>
          </div>
          <div className="col-md-3">
            <img src={team4} alt="Elena Vance" />
            <h5>Elena Vance</h5>
            <p>Directora de Contenido</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
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
          <button className="btn btn-danger">Suscribirse</button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;