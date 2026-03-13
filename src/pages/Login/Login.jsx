import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import users from "../../helpers/users";
import logo from "../../../public/assets/logo.png";
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

  const usuariosGuardados = JSON.parse(localStorage.getItem("usuarios")) || [];

  const todosLosUsuarios = [...users, ...usuariosGuardados];

  const usuarioEncontrado = todosLosUsuarios.find(
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
    navigate("/");
  }
};

  return (
    <div className="login-wrapper">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={5}>
            <Form
              onSubmit={handleSubmit}
              className="bg-dark text-light p-4 p-sm-5 rounded-3 shadow-lg"
            >
              <div className="text-center mb-5">
                <img
                  src={logo}
                  alt="logo"
                  className="logo-login mb-3"
                  style={{ width: "80px" }}
                />
                <h2 className="fw-bold">PlayMovie</h2>
                <h6 className="fw-light text-muted">
                  Cine ilimitado en tu bolsillo
                </h6>
              </div>

              <Form.Group className="mb-4">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control
                  className="bg-dark text-white"
                  type="email"
                  placeholder="nombre@ejemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  className="bg-dark text-white"
                  type="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              {error && <p className="text-danger text-center">{error}</p>}

              <div className="d-grid mb-4">
                <Button size="lg" variant="danger" type="submit">
                  Iniciar Sesión
                </Button>
              </div>

              <div className="text-center">
                <p className="text-muted small">
                  ¿No tienes una cuenta?{" "}
                  <Link to="/registro" className="text-danger fw-bold">
                    Regístrate aquí
                  </Link>
                </p>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;