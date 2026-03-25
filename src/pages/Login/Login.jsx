import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { usuariosIniciales } from "../../helpers/users";
import { hashPassword } from "../../helpers/hash";
import "./Login.css";
import Swal from "sweetalert2";



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!email || !password) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Todos los campos son obligatorios",
      timer: 3000,
      background: "#1a1a1a",
      color: "#f9f8f8",
      confirmButtonColor: "#dc3545",
    });
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Por favor ingresa un correo válido",
      timer: 3000,
      background: "#1a1a1a",
      color: "#f9f8f8",
      confirmButtonColor: "#dc3545",
    });
    return;
  }

  if (password.length < 8) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "La contraseña debe tener al menos 8 caracteres",
      timer: 3000,
      background: "#1a1a1a",
      color: "#f9f8f8",
      confirmButtonColor: "#dc3545",
    });
    return;
  }

  const usuariosGuardados = JSON.parse(localStorage.getItem("usuarios")) || [];
  const todosLosUsuarios = [
    ...usuariosIniciales,
    ...usuariosGuardados.filter(u => !usuariosIniciales.find(ui => ui.email === u.email))
  ];

  const passwordHash = await hashPassword(password);
  const usuarioEncontrado = todosLosUsuarios.find(
    (usuario) => usuario.email === email && usuario.password === passwordHash
  );

  if (!usuarioEncontrado) {
    Swal.fire({
      icon: "error",
      title: "Error",
      timer: 3000,
     background: "#1a1a1a",
     color: "#f9f8f8",
     confirmButtonColor: "#dc3545",
      text: "Correo electrónico o contraseña incorrectos",
    });
    return;
  }

  const { password: _pw, ...usuarioSinPassword } = usuarioEncontrado;
  sessionStorage.setItem(
    "usuarioLogueado",
    JSON.stringify(usuarioSinPassword)
  );


  window.dispatchEvent(new Event("auth-change"));

  Swal.fire({
    title: "¡Bienvenido!",
    text: "Has iniciado sesión correctamente",
    icon: "success",
    timer: 3000,
    background: "#1a1a1a",
    color: "#f9f8f8",
    confirmButtonColor: "#dc3545",
    showConfirmButton: true,
    timerProgressBar: true,
  }).then(() => {
    setEmail("");
    setPassword("");

    if (usuarioEncontrado.rol === "admin") {
      navigate("/admin");
    } else {
      navigate("/");
    }
  });
};

  return (
  <div className="auth-wrapper">
    <Container className="auth-container mx-auto my-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={5}>
          <Form onSubmit={handleSubmit} className="auth-form">
            
            <div className="text-center d-flex justify-content-center align-items-center flex-column mb-4">
              <img
                src="/assets/logo.png"
                alt="logo"
                className="auth-logo mb-3"
              />
              <h2 className="fw-bold">PlayMovie</h2>
              <p className="text-muted small">
                Cine ilimitado en tu bolsillo
              </p>
            </div>

            <Form.Group className="mb-3">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="nombre@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                maxLength={25}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                maxLength={20}
              />
            </Form.Group>

            <div className="d-grid mt-4">
              <Button type="submit" variant="danger" className="auth-btn d-flex justify-content-center align-items-center fw-bold">
                Iniciar Sesión
              </Button>
            </div>

            <div className="text-center mt-3">
              <small className="text-muted">
                ¿No tienes una cuenta?{" "}
                <Link to="/registro" className="auth-link">
                  Regístrate
                </Link>
              </small>
            </div>

          </Form>
        </Col>
      </Row>
    </Container>
  </div>
);
};

export default Login;