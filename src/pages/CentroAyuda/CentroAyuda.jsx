import React from "react";
import "../CentroAyuda/CentroAyuda.css";

const HelpCenter = () => {
  return (
    <div className="help-center">
      <header className="help-header">
        <h1>Centro de Ayuda</h1>
        <p>¿Cómo podemos ayudarte hoy? Busca soluciones o explora las categorías.</p>
        <div className="search-container">
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
          <div className="icono"><i className="bi bi-person"></i></div>
          <h3>Cuenta</h3>
          <p>Gestionar perfil, contraseñas y datos personales.</p>
        </div>
        <div className="category-card">
          <div className="icono"><i className="bi bi-cash-coin"></i></div>
          <h3>Suscripciones</h3>
          <p>Planes, facturación y métodos de pago.</p>
        </div>
        <div className="category-card">
          <div className="icono"><i className="bi bi-laptop"></i></div>
          <h3>Dispositivos</h3>
          <p>Configuración en Smart TVs, consolas y móviles.</p>
        </div>
        <div className="category-card">
          <div className="icono"><i className="bi bi-router-fill"></i></div>
          <h3>Streaming</h3>
          <p>Calidad de video, problemas de red y conexión.</p>
        </div>
      </section>

      <section className="faq">
        <h2>Preguntas Frecuentes</h2>
        <div className="faq-item">
          <details className="custom-details">
            <summary>¿Cómo puedo cancelar mi suscripción?<span className="icon"></span></summary>
            <p>Puedes cancelar tu suscripción en cualquier momento desde la sección 'Cuenta'. Selecciona 'Membresía y Facturación' y sigue los pasos.</p>
          </details>
          <details className="custom-details">
            <summary>¿En cuántos dispositivos puedo ver contenido simultáneamente?<span className="icon"></span></summary>
            <p>El número de dispositivos depende de tu plan:</p>
            <ul>
              <li>Básico: 1 dispositivo.</li>
              <li>Estándar: 2 dispositivos simultáneos.</li>
              <li>Premium: 4 dispositivos simultáneos.</li>
            </ul>
          </details>
          <details className="custom-details">
            <summary>He olvidado mi contraseña, ¿qué hago?<span className="icon"></span></summary>
            <p>En la pantalla de inicio de sesión, haz clic en "¿Olvidaste tu contraseña?". Te enviaremos un correo con instrucciones para restablecerla.</p>
          </details>
          <details className="custom-details">
            <summary>¿Por qué no puedo ver contenido en 4K?<span className="icon"></span></summary>
            <p>Para disfrutar de Ultra HD (4K) necesitas:</p>
            <ul>
              <li>Un plan Premium activo.</li>
              <li>Un dispositivo compatible con resolución 4K.</li>
              <li>Una conexión de al menos 25 Mbps.</li>
            </ul>
          </details>
        </div>
      </section>

      <section className="support">
        <div className="supportbox">
          <h3>¿No encontraste lo que buscabas?</h3>
          <p>Nuestro equipo de soporte está disponible 24/7 para ayudarte.</p>
          <button className="btn-red2"><i className="bi bi-chat-left-dots"></i> &nbsp;Chat en Vivo</button>
          <button className="btn-outline"><i className="bi bi-envelope"></i> &nbsp;Enviar un Ticket</button>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;
