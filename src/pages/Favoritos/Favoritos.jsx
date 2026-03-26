import { useNavigate } from "react-router";
import { useFavoritos } from "../../data/favorito";
import { Button, Card,Container, Row, Col } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import Swal from "sweetalert2";

function Favoritos(params) {
    const {favoritos, eliminarFavorito} = useFavoritos();
    const navigate = useNavigate();

    const handleQuitar = (e, peliculaId, titulo) => {
        e.stopPropagation();
        Swal.fire({
          title: "¿Quitar de favoritos?",
          text: `¿Seguro que querés quitar "${titulo}" de tus favoritos?`,
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#dc3545",
          cancelButtonColor: "#6c757d",
          confirmButtonText: "Sí, quitar",
          cancelButtonText: "Cancelar",
          background: "#1a1a1a",
          color: "#fff",
        }).then((result) => {
          if (result.isConfirmed) eliminarFavorito(peliculaId);
        });
    };
    const verDetalle = (pelicula) => {
        navigate(`/pelicula/${pelicula.id}`)
    };
    return(
        <Container className="my-5" style={{ minHeight: "60vh", paddingTop: "60px" }}>
            <h2 className="mb-4 text-center text-md-start"> Mis Favoritos ({favoritos.length})</h2>
            {favoritos.length === 0 ? (
                <p className="text-center">No tienes peliculas favoritas</p>
            ) : (
                <Row xs={1} sm={2} md={3} lg={3} xl={4} className="g-4">
                    {favoritos.map((pelicula) => (
                        <Col key={pelicula.id}>
                            <Card className="bg-dark text-white position-relative text-center d-flex flex-column" style={{ width: "100%" }}>
                                <Card.Img
                                  variant="top"
                                  src={pelicula.poster}
                                  alt={pelicula.titulo}
                                  style={{ height: "280px", objectFit: "cover", objectPosition: "center top", flexShrink: 0 }}
                                />
                                <div style={{ padding: "0.75rem", display: "flex", flexDirection: "column", boxSizing: "border-box" }}>
                                  <div style={{ height: "60px", overflow: "hidden", marginBottom: "0.75rem" }}>
                                    <p style={{ fontWeight: "bold", fontSize: "0.95rem", margin: "0 0 4px 0", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{pelicula.titulo}</p>
                                    <p style={{ fontSize: "0.85rem", color: "#aaa", margin: 0 }}>{pelicula.anio}</p>
                                  </div>
                                  <div>
                                    <Button variant="danger" className="w-100" onClick={() => verDetalle(pelicula)}>
                                      Ver detalles
                                    </Button>
                                  </div>
                                </div>
                                <button
                                   className="btn-quitar-fav-global"
                                   onClick={(e) => handleQuitar(e, pelicula.id, pelicula.titulo)}
                                   title="Quitar de favoritos"
                                >
                                     <FaHeart color="red" size={24} />
                                </button>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    )


}


export default Favoritos;