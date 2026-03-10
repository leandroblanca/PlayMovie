import { useEffect, useState } from "react"
import { Button, Card, Col, Container, Row, Spinner, Toast } from "react-bootstrap"
import { useNavigate } from "react-router"

function  CategoriaPage() {
    const {gender} = useParems()
    const navigate = useNavigate()
    const [pelicula, setPelicula] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const porGenero = {
        'Accion': 28,
        'Comedia':35 ,
        'Ciencia Ficcion':878 ,
        'Drama': 18,
        'Terror': 27 ,
        'Thriller': 53,
        'Animacion': 16,
    }
   
   useEffect(() => {
    const generoDecodificado = decodeURIComponent(gender)

    const idGenero = porGenero[generoDecodificado]

    if (!idGenero) {
      setError(`Genero "${generoDecodificado}" no encontrado`)
      setLoading(true)
      return;
    }

   setLoading(true)
   setError(null)
   const API_KEY = '9678a642782cbed22b8137edf52e9d91';
   const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${idGenero}&language=es-ES`
    
   fetch (url)
   .then(response => {
    if (!response) {
        throw new Error('Error al cargar las peliculas')
    }
    return response.json()
    })
    .then(data => {
        ('Pelicula no encantrada', data)
        const piliculaEncontrada = data.results.map(peli => ({
            id: peli.id,
            titulo: peli.titulo,
            anio: peli.release_date ? peli_relaese_date.substring(0, 4) : 'Desconocido',
            poster: peli.poster_path
            ? `https://image.tmdb.org/t/p/w500${peli.poster_path}` 
            : 'https://via.placeholder.com/500x750?text=Sin+Imagen',
            genero: generoDecodificado
        }));
    
        setPelicula(piliculaEncontrada)
        setLoading(false)
    })
    .catch(error => {
        Toast.error('Error:', error)
        setError(error.mensaje)
        setLoading(false)
    })
   }, [gender])
   
   function handleVolver (){
    navigate('/')
   }

if (loading) {
  return (
   <Container className="text-center my-5 py-5">
    <Spinner animation="border" variant="light"/>
    <p className="text-white mt-3">Cargando peliculaa...</p>
   </Container>
);
}
if (error) {
    return (
    <Container className="text-center my-4 py-5">
        <p className="text-danger"> Error: {error} </p>
        <Button variant="secondary" onClick={handleVolver}>
            Volver al inicio
        </Button>
    </Container>
    )
}
const generoDecodificado = decodeURIComponent(gender)

return(
    <Container className="my-4">
        <div className="mb-4">
            <Button variant="outline-secondary" onClick={handleVolver}>
                Volvel al inicio
            </Button>
        </div>
        <div className="d-flex justify-content-center-between aling-items-center mb-4">
            <h2 className="text-whitw">
                Peliculas de {generoDecodificado}
            </h2>
            <span className="text-muted">
                {pelicula.length} {pelicula.length === 1 ? 'Pelicula encontrada' : 'Pelicula encontradas'}
            </span>
        </div>
        {pelicula.length === 0 ? (
           <div className="text-center text-white">
                <p className="">No hay peliculas encontradas</p>
                <Button variant="secondary" onClick={handleVolver}>
                    Ver otras categorias
                </Button>
           </div>

        ): (
           <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-5">
            {pelicula.map((pelicula) => (
                <Col key={pelicula.id}>
                    <Card className="h-100 bg-dark text-center border-secondary">
                        <Card.Img
                        variant="top"
                        src={pelicula.poster}
                        alt={pelicula.titulo}
                        className="IMG-categoria"/>
                        <Card.Body>
                            <Card.Title className="fs-6">
                                {pelicula.titulo}
                            </Card.Title>
                            <Card.Title className="text-muted">
                                {pelicula.anio}
                            </Card.Title>
                            <span className="badge bg-secondary">
                                {pelicula.genero}
                            </span>
                        </Card.Body>
                    </Card>
                </Col> 
            ))}
           </Row>
        )}
    </Container>
)
}


export default CategoriaPage;