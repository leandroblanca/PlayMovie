import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { FaPaypal, FaApple, FaShoppingCart } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import planes from "../../data/planes.js";
import './Pasarela.css';
import { BsShieldCheck } from 'react-icons/bs';


function PasarelaDePago() {
  const navigate = useNavigate();
  const location = useLocation();
  const [nombre, setNombre] = useState("");
  const [tarjeta, setTarjeta] = useState("");
  const [vencimiento, setVencimiento] = useState("");
  const [cvv, setCvv] = useState("");
  const [enviando, setEnviando] = useState(false);

  const planId = location.state?.planId;
  const planSeleccionado = planes.find((p) => p.id === planId);
  const planActual = planSeleccionado || planes[0];

  const datosSuscripcion = [{
      id: planActual.id,
      plan: planActual.nombre,
      precio: `${planActual.precio} ${planActual.moneda} / mes`,
      totalHoy: `${planActual.precio} ${planActual.moneda}`,
      img: "/assets/pago.png",
      descripcion: planActual.descripcion,
  }];
 
  const handleSubmit = (e) => {
  e.preventDefault();

  const nombreRegex = /^[A-Za-z\sáéíóúÁÉÍÓÚñÑ]+$/;
  const tarjetaRegex = /^\d{16}$/;
  const cvvRegex = /^\d{3,4}$/;
  const vencimientoRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;

  if (!nombre.trim() || !tarjeta.trim() || !vencimiento.trim() || !cvv.trim()) {
    toast.warning("Todos los campos son obligatorios");
    return;
  }

  if (nombre.trim().length < 3 || nombre.trim().length > 50) {
    toast.error("El nombre debe tener entre 3 y 50 caracteres.");
    return;
  }
  if (!nombreRegex.test(nombre)) {
    toast.error("El nombre solo puede contener letras y espacios.");
    return;
  }

  const cleanTarjeta = tarjeta.replace(/\s/g, "");
  if (!tarjetaRegex.test(cleanTarjeta)) {
    toast.error("Número de tarjeta inválido. Deben ser 16 dígitos.");
    return;
  }

  if (!vencimientoRegex.test(vencimiento)) {
    toast.error("Formato de vencimiento inválido (MM/AA).");
    return;
  } else {
    const [mes, anio] = vencimiento.split('/');
    const fechaVencimiento = new Date(parseInt(`20${anio}`), parseInt(mes), 0);
    if (fechaVencimiento < new Date()) {
      toast.error("La tarjeta ha expirado.");
      return;
    }
  }

  if (!cvvRegex.test(cvv)) {
    toast.error("CVV inválido. Deben ser 3 o 4 dígitos.");
    return;
  }

  setEnviando(true);

  setTimeout(() => {
    toast.success("Pago realizado con éxito 🎉");

    setTimeout(() => {
      navigate("/"); 
    }, 1500);

    setEnviando(false);
  }, 2000);
};

  return (
    <Container className="my-5 mx-auto pt-5" data-bs-theme="dark">
      <ToastContainer />
     
      <Row className="mb-4">
        <Col>
          <h2 className="fw-bold">Finalizar pago</h2>
          <h6>Complete su suscripción para empezar a disfrutar del mejor cine.</h6>
        </Col>
      </Row>

   
      <Row>
        <Col md={6}>
          <h5 className="mb-3 fw-bold">
            <FaShoppingCart size={20} /> Resumen del pedido
          </h5>

          {datosSuscripcion.map((suscripcion) => (
            <div key={suscripcion.id} className="card-suscripcion p-3 mb-3">
              
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="text-secondary mb-1" style={{fontSize:"12px"}}>
                    SUSCRIPCIÓN SELECCIONADA
                  </p>
                  <h6>{suscripcion.plan}</h6>
                  <p className="text-muted small mb-1">{suscripcion.descripcion}</p>
                  <span className="text-danger fw-bold">{suscripcion.precio}</span>
                </div>

                <img src={suscripcion.img} alt="plan" width={70} style={{borderRadius:"10px"}} />
              </div>

              <hr />

              <div className="d-flex justify-content-between fw-bold">
                <span>Total hoy</span>
                <span>{suscripcion.totalHoy}</span>
              </div>

            </div>
          ))}

          <div className="mt-4">
            <h5 className="mb-3 fw-bold">Otros métodos de pago</h5>
            <Row className="g-3"> 
              <Col xs={6}>
                <div className="payment-span rounded-5 p-3 d-flex align-items-center justify-content-center gap-2" style={{cursor: 'pointer'}}>
                  <FaPaypal size={24} color="#003087" />
                  <span className="fw-semibold rounded-5">PayPal</span>
                </div>
              </Col>
              
              <Col xs={6}>
                <div className="payment-span rounded-5 p-3 d-flex align-items-center justify-content-center gap-2" style={{cursor: 'pointer'}}>
                  <FaApple size={24} />
                  <span className="fw-semibold rounded-5">Apple Pay</span>
                </div>
              </Col>
            </Row>
          </div>

       
          <Alert variant="danger rounded-5" className="d-flex align-items-center mt-4">
            <BsShieldCheck size={28} className="text-danger me-3 flex-shrink-0" />
            <p className="text-light mb-0" style={{ fontSize: '0.85rem' }}>
              Su pago está protegido por encriptación SSL de 256 bits. No guardamos los datos de su CVV.
            </p>
          </Alert>

        </Col>

       
        <Col md={6}>
          <h5 className="mb-4 fw-bold">Detalles de la tarjeta</h5>

          <div className="form-card p-4">
          <Form onSubmit={handleSubmit} className="d-flex w-100 flex-column">

         
            <Form.Group className="mb-4">
              <Form.Label>Nombre del titular</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Juan Pérez"
                value={nombre}
                onChange={(e) => {
                  const val = e.target.value;
                  if (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/.test(val)) {
                    setNombre(val);
                  }
                }}
                name="ccname"
                autoComplete="cc-name"
                required
                maxLength={25}
              />
            </Form.Group>

         
            <Form.Group className="mb-4">
              <Form.Label>Número de tarjeta</Form.Label>
              <Form.Control
                type="text"
                placeholder="0000 0000 0000 0000"
                value={tarjeta}
                onChange={(e) => {
                  const val = e.target.value;
                  if (/^[\d\s]*$/.test(val)) {
                    setTarjeta(val);
                  }
                }}
                name="cardnumber"
                autoComplete="cc-number"
                required
                maxLength={19}
              />
            </Form.Group>

        
            <Row>
              <Col>
                <Form.Group className="mb-4">
                  <Form.Label>Vencimiento</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="MM/AA"
                    value={vencimiento}
                    onChange={(e) => setVencimiento(e.target.value)}
                    name="cc-exp"
                    autoComplete="cc-exp"
                    required
                    maxLength={5}
                  />
                </Form.Group>
              </Col>

              <Col>
                <Form.Group className="mb-4">
                  <Form.Label>CVV</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="123"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    name="cvc"
                    autoComplete="cc-csc"
                    required
                    maxLength={4}
                  />
                </Form.Group>
              </Col>
            </Row>

          
            <Form.Check
              type="checkbox"
              label="Guardar esta tarjeta de forma segura"
              className="mb-4"
            />

       
            <Button
              size="lg"
              variant="danger"
              type="submit"
              className="py-3 fw-bold w-100 d-flex justify-content-center align-items-center"
              disabled={enviando}
            >
              {enviando ? "Procesando..." : `Pagar ${datosSuscripcion[0].totalHoy} de forma segura`}
            </Button>

          </Form>
          </div>
          <p className='text-center text-secondary mt-4'>Al hacer clic en "Pagar", aceptas nuestros Términos de Servicio y  <br /> confirmas que has leído nuestra Política de Privacidad.</p>
        </Col>
      </Row>

    </Container>
  );
}

export default PasarelaDePago;