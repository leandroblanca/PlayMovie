import { useEffect, useState } from "react"
import { Container, Spinner, Toast } from "react-bootstrap"
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
};
if (loading) {
  return (
   <Container className="text-center my-5 py-5">
    <Spinner animation="border" variant="light"/>
    <p className="text-white mt-3">Cargando peliculaa...</p>
   </Container>
)   
}
