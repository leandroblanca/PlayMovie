import { useEffect, useState, useRef } from "react";

function getUserLogueado() {

    const usuario = sessionStorage.getItem('usuarioLogueado');
    return usuario ? JSON.parse(usuario) : null;
};

export function useFavoritos() {
    const [favoritos, setFavoritos] = useState([]);
    const [usuario, setUsuario] = useState(getUserLogueado);
    const isFirstLoad = useRef(true); 

useEffect(() => {
    const handleStorageChange = () => {
        setUsuario(getUserLogueado())
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
}, []);

useEffect(() => {
    if (usuario) {
        console.log("Cargando favoritos para usuario", usuario.id)
        const stored = localStorage.getItem(`favoritos_${usuario.id}`);
        console.log("Valor en localStorage:", stored);
        setFavoritos(stored ? JSON.parse(stored) : [])
        isFirstLoad.current = true;
    } else {
        console.log("No hay usuario");
        setFavoritos([])
    }
},[usuario]);

useEffect(() => {
    if (usuario && !isFirstLoad.current) {
        console.log("Guardando favoritos", favoritos);
        localStorage.setItem(`favoritos_${usuario.id}`, JSON.stringify(favoritos))
    } if (isFirstLoad.current) {
        isFirstLoad.current = false;
    }
}, [favoritos, usuario]);

function agregarFavorito(pelicula) {
    setFavoritos(prev => {
        if (!prev.some(fav => fav.id === pelicula.id)) {
            return [...prev, pelicula];
        }
        return prev;
    });
};

function eliminarFavorito(peliculaId) {
    setFavoritos(prev => prev.filter(fav => fav.id !== peliculaId));
};

function esFavorito(peliculaId) {
    return favoritos.some(fav => fav.id === peliculaId);
};

  return { favoritos, agregarFavorito, eliminarFavorito, esFavorito, usuario};
};





