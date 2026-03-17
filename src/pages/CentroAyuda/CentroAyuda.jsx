import React from "react";
import "../CentroAyuda/CentroAyuda.css";
import 'bootstrap-icons/font/bootstrap-icons.css';


const HelpCenter = () => {
  return (
    <div className="help-center">
      <header className="help-header">
        <h1>Centro de Ayuda</h1>
        <p>¿Cómo podemos ayudarte hoy? Busca soluciones o explora las categorías.</p>
        <div className="search-container">
          <i class="bi bi-search"></i>
          <input
          type="text"
          placeholder="Escribe tu pregunta o problema aquí..."
          className="help-search"
        />
          <button className="btn-red search-btn">Buscar</button>
        </div>
        
      </header>

      <h2>Categorías de Ayuda</h2>
      <section className="help-categories">
        
        <div className="category-card">
          <div className="icono"><i class="bi bi-person"></i></div>
          
          <h3>Cuenta</h3>
          <p>Gestionar perfil, contraseñas y datos personales.</p>
        </div>
        <div className="category-card">
          <div className="icono"><i class="bi bi-cash-coin"></i></div>
          <h3>Suscripciones</h3>
          <p>Planes, facturación y métodos de pago.</p>
        </div>
        <div className="category-card">
          <div className="icono"><i class="bi bi-laptop"></i></div>
          <h3>Dispositivos</h3>
          <p>Configuración en Smart TVs, consolas y móviles.</p>
        </div>
        <div className="category-card">
          <div className="icono"><i class="bi bi-router-fill"></i></div>
          <h3>Streaming</h3>
          <p>Calidad de video, problemas de red y conexión.</p>
        </div>
      </section>

      <section className="faq">
        <h2>Preguntas Frecuentes</h2>
        <div className="faq-item">
          <h4>¿Cómo puedo cancelar mi suscripción?</h4>
          <p>
            Puedes cancelar tu suscripción en cualquier momento desde la sección
            'Cuenta'. Selecciona 'Membresía y Facturación' y sigue los pasos.
          </p>
        </div>
        <div className="faq-item">
          <h4>¿En cuántos dispositivos puedo ver contenido simultáneamente?</h4>
        </div>
        <div className="faq-item">
          <h4>He olvidado mi contraseña, ¿qué hago?</h4>
        </div>
        <div className="faq-item">
          <h4>¿Por qué no puedo ver contenido en 4K?</h4>
        </div>
      </section>

      <section className="support">
        <h3>¿No encontraste lo que buscabas?</h3>
        <button className="btn-red">Chat en Vivo</button>
        <button className="btn-outline">Enviar un Ticket</button>
      </section>
    </div>
  );
};

export default HelpCenter;
