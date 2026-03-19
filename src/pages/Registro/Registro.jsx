import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import "./Registro.css";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaSpotify } from "react-icons/fa";

const Registro = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let errorMsg = "";

    if (!nombre || !email || !password || !confirmPassword) {
      errorMsg = "Todos los campos son obligatorios";
    } else if (password.length < 6) {
      errorMsg = "La contraseña debe tener al menos 6 caracteres";
    } else if (password !== confirmPassword) {
      errorMsg = "Las contraseñas no coinciden";
    } else if (!emailRegex.test(email)) {
      errorMsg = "Email inválido";
    }

    if (errorMsg) {
      setError(errorMsg);
      return;
    }

    const usuariosGuardados = JSON.parse(localStorage.getItem("usuarios")) || [];
    if (usuariosGuardados.find((u) => u.email === email)) {
      setError("El correo electrónico ya está registrado");
      return;
    }

    const nuevoUsuario = { id: Date.now(), nombre, email, password, rol: "user" };
    localStorage.setItem("usuarios", JSON.stringify([...usuariosGuardados, nuevoUsuario]));

    setError("");
    alert("¡Registro exitoso!");
    navigate("/login");
  };

  return (
    <div className="registro-wrapper">
      <Container className="d-flex justify-content-center align-items-center mx-auto my-5">
        <Form onSubmit={handleSubmit} className="registro-form">
          <div className="text-center mb-4">
            <h2 className="fw-bold text-light">Crear Cuenta</h2>
            <p className="registro-subtitulo text-muted">Join PlayMovie to start streaming your favorite content</p>
          </div>

          <Form.Group className="mb-3">
            <Form.Label>Nombre Completo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Tu nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control
              type="email"
              placeholder="nombre@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Crea una contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Confirmar Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirma tu contraseña"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </Form.Group>

          {error && <div className="error-container">{error}</div>}

          <div className="d-grid gap-2 mt-4">
            <Button size="lg" variant="danger" type="submit" className="fw-bold d-flex justify-content-center align-items-center">
              Crear Cuenta
            </Button>
          </div>

          <div className="divider-container mt-4 mb-3">
            <span>O CONTINUAR CON</span>
          </div>

          <div className="social-buttons-container mb-4">
            <button type="button" className="social-btn"><FcGoogle size={22} /></button>
            <button type="button" className="social-btn"><FaFacebookF size={18} color="#1877F2" /></button>
            <button type="button" className="social-btn"><FaSpotify size={22} color="#1DB954" /></button>
          </div>

          <div className="text-center mt-4">
            <p className="text-muted small">
              ¿Ya tienes una cuenta?{" "}
              <Link className="text-danger fw-bold text-decoration-none ms-1" to="/login">
                Inicia sesión aquí
              </Link>
            </p>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default Registro;