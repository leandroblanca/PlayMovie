import { useEffect, useState } from "react"
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
     
   }, [])

}