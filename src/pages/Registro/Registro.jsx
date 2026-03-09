import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Registro.css";
import logo from "../../assets/logo.png";


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
    const usuarioExistente = usuariosGuardados.find(
      (usuario) => usuario.email === email
    );

    if (usuarioExistente) {
      setError("El correo electrónico ya está registrado");
      return;
    }

    
    const nuevoUsuario = {
      id: Date.now(),
      nombre,
      email,
      password, 
    };

    const usuariosActualizados = [...usuariosGuardados, nuevoUsuario];
    localStorage.setItem("usuarios", JSON.stringify(usuariosActualizados));

    setError("");
    alert("¡Registro exitoso! Ahora serás redirigido para iniciar sesión.");

    setNombre("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    navigate("/login");
  };

  return (
    <div className="registro-wrapper">
      <Container>
        <Row className="justify-content-center">
          
         <Col xs={12} md={6} lg={4}>
           
            <Form onSubmit={handleSubmit} className="bg-dark">
                <div xs={12} className="d-flex flex-column justify-content-center align-items-center mb-5 text-light">
            <h2 className="fw-bold">Crear Cuenta</h2>
            <h6 className="fw-light">Join PlayMovie to start streaming your favorite content</h6>
            </div> 

              <Form.Group className="mb-4">
                <Form.Label>Nombre Completo</Form.Label>
                <Form.Control
                    className="bg-dark text-white"
                  type="text"
                  placeholder="Tu nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                    required
                />
              </Form.Group>

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
                    placeholder="Crea una contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                    required
                />
              </Form.Group>

                <Form.Group className="mb-4">
                <Form.Label>Confirmar Contraseña</Form.Label>
                <Form.Control
                    className="bg-dark text-white"
                  type="password"
                    placeholder="Confirma tu contraseña"
                  value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
              </Form.Group>

                {error && <p className="text-danger text-center">{error}</p>}

              <div className="d-grid mb-5">
                <Button size="lg" variant="danger" type="submit">
                  Crear Cuenta
                </Button>
              </div>

               <Row>
                     <Col md={6}>
                            <Button size="sm" variant="dark" className="rounded-5 ms-4">
  <FcGoogle style={{ marginRight: "8px" }} /> Google
</Button>

<Button size="sm" variant="dark" className="rounded-5 ms-4">
  <FaFacebookF style={{ marginRight: "8px" }} /> Facebook
</Button>

<Button size="sm" variant="dark" className="rounded-5 ms-4">
  <FaSpotify style={{ marginRight: "8px" }} /> Spotify
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

export default Registro;