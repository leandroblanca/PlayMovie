import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./Login.css";
import logo from "../../assets/logo.png";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let errorMsg = "";

    if (!email || !password) {
      errorMsg = "Todos los campos son obligatorios";
    } else if (!emailRegex.test(email)) {
      errorMsg = "Email inválido";
    }

    if (errorMsg) {
      setError(errorMsg);
      return;
    }

    setError("");
    alert("Inicio de sesión exitoso");

    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-wrapper">
      <Container>
        <Row className="justify-content-center">
          
         <Col xs={12} md={6} lg={4}>
           
            <Form onSubmit={handleSubmit} className="bg-dark">
                <div xs={12} className="d-flex flex-column justify-content-center align-items-center mb-5 text-light">
            <img src={logo} alt="logo" className="logo-login mb-3" style={{ width: "80px" }} />
            <h2 className="fw-bold">PlayMovie</h2>
            <h6 className="fw-light">Cine ilimitado en tu bolsillo</h6>
            </div> 

              <Form.Group className="mb-4">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control
                className="bg-dark"
                  type="email"
                  placeholder="nombre@ejemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                 className="bg-dark"
                  type="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              {error && <p className="text-danger">{error}</p>}

              <div className="d-grid mb-5">
                <Button size="lg" variant="danger" type="submit">
                  Iniciar Sesión
                </Button>
              </div>

               <Row>
                     <Col md={6}>
                              <Button size="sm" variant="dark" className="rounded-5 ms-4" type="submit">
                                 Google
                               </Button>
                             </Col >
                              <Col md={6}>
                              <Button size="sm" variant="dark" className="rounded-5 ms-4" type="submit">
                                Facebook
                               </Button>
                    </Col>
               </Row>
            
              
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;