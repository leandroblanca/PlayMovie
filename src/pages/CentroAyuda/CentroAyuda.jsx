import React from "react";
import "../CentroAyuda/CentroAyuda.css";



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
            <p>Puedes cancelar tu suscripción en cualquier momento desde la sección
            'Cuenta'. Selecciona 'Membresía y Facturación' y sigue los pasos.</p>
            <summary>
              ¿Cómo puedo cancelar mi suscripción?
              <span class="icon"></span>
            </summary>
          </details> 
          <details className="custom-details">
            <p>El número de dispositivos depende de tu plan de suscripción:</p>  
            <ul>
              <li>Básico: 1 dispositivo.</li>
              <li>Estándar: 2 dispositivos simultáneos.</li>
              <li>Premium: 4 dispositivos simultáneos.</li>
            </ul>
            <summary>
              ¿En cuántos dispositivos puedo ver contenido simultáneamente?
              <span class="icon"></span>
              </summary>
          </details>
          <details className="custom-details"> 
            <p>En la pantalla de inicio de sesión, haz clic en "¿Olvidaste tu contraseña?". Te enviaremos un correo electrónico con instrucciones detalladas para restablecerla de forma segura.</p>
            <summary>
              He olvidado mi contraseña, ¿qué hago?
              <span class="icon"></span>
              </summary>
          </details>
          <details className="custom-details">
            <p>Para disfrutar de contenido Ultra HD (4K), necesitas:</p>  
            <ul>
              <li>Un plan Premium activo.</li>
              <li>Un dispositivo compatible con resolución 4K.</li>
              <li>Una conexión a internet estable de al menos 25 Mbps.</li>
            </ul>
            <summary>
              ¿Por qué no puedo ver contenido en 4K?
              <span class="icon"></span>
              </summary>
          </details>
        </div>
      </section>

      <section className="support">
       <div className="supportbox"> 
        <h3>¿No encontraste lo que buscabas?</h3>
        <p>Nuestro equipo de soporte está disponible 24/7 para ayudarte.</p>
        <button className="btn-red2"><i class="bi bi-chat-left-dots"></i> &nbsp;Chat en Vivo</button>
        <button className="btn-outline"><i class="bi bi-envelope"></i> &nbsp;Enviar un Ticket</button>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;
