import { Button, Modal } from "react-bootstrap";
import "./ModalHome.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";

function ModalPelicula({show, handleClose, pelicula, esFavorito, agregarFavorito, eliminarFavorito}) {
    if (!pelicula) return null;

    const favorito = esFavorito(pelicula.id);

    const toggleFavorito = () => {
    if (favorito) {
      eliminarFavorito(pelicula.id);
    } else {
      agregarFavorito(pelicula);
    }
    };
    return (
        <Modal
         show={show}
         onHide={handleClose}
         centered
         dialogClassName="modal-video"
         animation={true}>
            <Modal.Header closeButton closeVariant="white">
                <Modal.Title>{pelicula.titulo}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="modal-trailer">
                    <iframe
                     src={`${pelicula.video}?autoplay=0&mute=0&controls=1&showinfo=0&rel=0`}
                     title={pelicula.titulo}
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     allowFullScreen
                     frameBorder="0"
                      ></iframe>
                </div>
                <div className="info-pelicula">
                    <p><strong>Año:</strong>{pelicula.anio}</p>
                    <p><strong>Descripcion:</strong>{pelicula.descripcion}</p>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={favorito ? "danger" : "outline-danger"} onClick={toggleFavorito}>
                   {favorito ? <FaHeart /> : <FaRegHeart />} {favorito ? " Quitar de favoritos" : " Añadir a favoritos"}
                </Button>
                <Button variant="secondary">
                    Ver mas
                </Button>
            </Modal.Footer>
        </Modal>
    )
}


export default ModalPelicula;





