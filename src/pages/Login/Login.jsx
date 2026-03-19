import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import logo from "/public/assets/logo.png";
import { usuariosIniciales } from "../../helpers/users";
import "./Login.css";



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
  e.preventDefault();

  if (!email || !password) {
    setError("Todos los campos son obligatorios");
    return;
  }

  const usuariosInicialesGuardados = JSON.parse(localStorage.getItem("usuarios")) || [];

  const todosLosusuariosIniciales = [...usuariosIniciales, ...usuariosInicialesGuardados];

  const usuarioEncontrado = todosLosusuariosIniciales.find(
    (usuario) => usuario.email === email
  );

  if (!usuarioEncontrado || usuarioEncontrado.password !== password) {
    setError("Correo electrónico o contraseña incorrectos");
    return;
  }

  setError("");

  sessionStorage.setItem(
    "usuarioLogueado",
    JSON.stringify(usuarioEncontrado)
  );

  setEmail("");
  setPassword("");

  if (usuarioEncontrado.rol === "admin") {
    navigate("/admin");
  } else {
    navigate("/home");
  }
};

  return (
  <div className="auth-wrapper">
    <Container className="auth-container mx-auto my-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={5}>
          <Form onSubmit={handleSubmit} className="auth-form">
            
            <div className="text-center mb-4">
              <img
                src={logo}
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
              />
            </Form.Group>

            {error && <p className="auth-error">{error}</p>}

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