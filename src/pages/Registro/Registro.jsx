import React, { useState } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaSpotify } from "react-icons/fa";
import Swal from "sweetalert2";
import { hashPassword } from "../../helpers/hash";
import "./Registro.css";

const Registro = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,20}$/;

  const requisitos = [
    { texto: "Mínimo 8 caracteres", ok: password.length >= 8 },
    { texto: "Al menos una mayúscula", ok: /[A-Z]/.test(password) },
    { texto: "Al menos un número", ok: /\d/.test(password) },
    { texto: "Al menos un carácter especial (!@#$...)", ok: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password) },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

    if (!nombre.trim() || !apellido.trim() || !email.trim() || !password || !confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Todos los campos son obligatorios",
        confirmButtonColor: "#dc3545",
      });
      return;
    }

    if (nombre.length < 3 || nombre.length > 20) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "El nombre debe tener entre 3 y 20 caracteres",
        confirmButtonColor: "#dc3545",
      });
      return;
    }

    if (apellido.length < 3 || apellido.length > 20) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "El apellido debe tener entre 3 y 20 caracteres",
        confirmButtonColor: "#dc3545",
      });
      return;
    }

    if (!nameRegex.test(nombre) || !nameRegex.test(apellido)) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "El nombre y apellido solo pueden contener letras",
        confirmButtonColor: "#dc3545",
      });
      return;
    }

    if (!passwordRegex.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Contraseña débil",
        text: "La contraseña debe tener entre 8 y 20 caracteres, al menos una mayúscula, un número y un carácter especial",
        confirmButtonColor: "#dc3545",
      });
      return;
    }
    if (password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Las contraseñas no coinciden",
        confirmButtonColor: "#dc3545",
      });
      return;
    }
    if (!emailRegex.test(email)) {
      Swal.fire({
        icon: "error",
        title: "Email inválido",
        text: "Por favor ingresa un correo válido",
        confirmButtonColor: "#dc3545",
      });
      return;
    }

    try {
      const usuariosGuardados = JSON.parse(localStorage.getItem("usuarios")) || [];
      if (usuariosGuardados.find((u) => u.email === email)) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "El correo electrónico ya está registrado",
          confirmButtonColor: "#dc3545",
        });
        return;
      }

      const nombreCompleto = `${nombre.trim()} ${apellido.trim()}`;
      const passwordHash = await hashPassword(password);
      const nuevoUsuario = { id: Date.now(), nombre: nombreCompleto, email, password: passwordHash, rol: "user" };
      localStorage.setItem("usuarios", JSON.stringify([...usuariosGuardados, nuevoUsuario]));

      Swal.fire({
        title: "¡Registro exitoso!",
        text: "Tu cuenta ha sido creada correctamente.",
        icon: "success",
        confirmButtonColor: "#dc3545",
        confirmButtonText: "Iniciar Sesión",
      }).then(() => {
        navigate("/login");
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un problema al intentar registrar el usuario. Por favor, inténtalo más tarde.",
        confirmButtonColor: "#dc3545",
      });
    }
  };

  return (
    <div className="registro-wrapper">
      <Container className="d-flex justify-content-center align-items-center mx-auto my-5">
        <Form onSubmit={handleSubmit} className="registro-form">
          <div className="text-center d-flex justify-content-center align-items-center flex-column mb-4">
            <h2 className="fw-bold text-light">Crear Cuenta</h2>
            <p className="registro-subtitulo text-muted">Join PlayMovie to start streaming your favorite content</p>
          </div>

          <Row>
            <Col xs={12} sm={6}>
              <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Tu nombre"
                  value={nombre}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/.test(val)) {
                      setNombre(val);
                    }
                  }}
                  required
                  minLength={3}
                  maxLength={20}
                />
              </Form.Group>
            </Col>
            <Col xs={12} sm={6}>
              <Form.Group className="mb-3">
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Tu apellido"
                  value={apellido}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/.test(val)) {
                      setApellido(val);
                    }
                  }}
                  required
                  minLength={3}
                  maxLength={20}
                />
              </Form.Group>
            </Col>
          </Row>

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
              placeholder="Crea una contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
              maxLength={20}
            />
            {password.length > 0 && (
              <ul className="mt-2 mb-0 ps-3" style={{ listStyle: "none", padding: 0 }}>
                {requisitos.map((r, i) => (
                  <li key={i} style={{ fontSize: "0.8rem", color: r.ok ? "#198754" : "#dc3545" }}>
                    {r.ok ? "✔" : "✖"} {r.texto}
                  </li>
                ))}
              </ul>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Confirmar Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirma tu contraseña"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              minLength={6}
              maxLength={20}
            />
          </Form.Group>

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