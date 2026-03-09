import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Registro.css";
import logo from "../../assets/logo.png";


const Registro = () => {

  return (
    <>
      <div className="registro-wrapper">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={8} lg={5}>
              <Form
                onSubmit={handleSubmit}
                className="bg-dark text-light p-4 p-sm-5 rounded-3 shadow-lg"
              >
                <div className="text-center mb-5">
                  <h2 className="fw-bold">Crear Cuenta</h2>
                  <h6 className="fw-light text-muted">
                    Únete para empezar a ver tu contenido favorito
                  </h6>
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

                <div className="d-grid mb-4">
                  <Button size="lg" variant="danger" type="submit">
                    Crear Cuenta
                  </Button>
                </div>

                <div className="text-center">
                  <p className="text-muted small">
                    ¿Ya tienes una cuenta?{" "}
                    <Link to="/login" className="text-danger fw-bold">
                      Inicia sesión aquí
                    </Link>
                  </p>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
    </div>
    </>
  );
};

export default Registro;
