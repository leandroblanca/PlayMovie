import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import logo from "../../../public/assets/logo.png";
import { usuariosIniciales } from "../../helpers/users";
import "./Login.css";
import Swal from "sweetalert2";



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
  e.preventDefault();

  if (!email || !password) {
    return;
  }

  const usuariosInicialesGuardados = JSON.parse(localStorage.getItem("usuarios")) || [];

  const todosLosusuariosIniciales = [...usuariosIniciales, ...usuariosInicialesGuardados];

  const usuarioEncontrado = todosLosusuariosIniciales.find(
    (usuario) => usuario.email === email
  );

  if (!usuarioEncontrado || usuarioEncontrado.password !== password) {
    Swal.fire({
      icon: "error",
      title: "Error",
      timer: 3000,
     background: "#1a1a1a",
     color: "#f9f8f8",
     confirmButtonColor: "#dc3545",
      text: "Correo electrónico o contraseña incorrectos",
      confirmButtonColor: "#dc3545",
    });
    return;
  }

  sessionStorage.setItem(
    "usuarioLogueado",
    JSON.stringify(usuarioEncontrado)
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