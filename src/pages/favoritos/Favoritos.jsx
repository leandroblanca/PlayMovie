import { useNavigate } from "react-router";
import { useFavoritos } from "../../data/favorito";
import { Button, Card,Container, Row, Col } from "react-bootstrap";
import { FaHeart } from "react-icons/fa"

function Favoritos(params) {
    const {favoritos, eliminarFavorito} = useFavoritos();
    const navigate = useNavigate();

    const handleQuitar = (e, peliculaId) => {
        e.stopPropagation()
        eliminarFavorito(peliculaId)
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
                <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
                    {favoritos.map((pelicula) => (
                        <Col key={pelicula.id}>
                            <Card className="h-100 bg-dark text-white position-relative" style={{ width: "100%" }}>
                                <Card.Img variant="top" src={pelicula.poster} alt={pelicula.titulo}/>
                                <Card.Body>
                                    <Card.Title>{pelicula.titulo}</Card.Title>
                                    <Card.Text>{pelicula.anio}</Card.Text>
                                    <Button variant="danger" onClick={() => verDetalle(pelicula)}>
                                        Ver detalles
                                    </Button>
                                </Card.Body> 
                                <button
                                   className="btn-quitar-fav-global"
                                   onClick={(e) => handleQuitar(e, pelicula.id)}
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