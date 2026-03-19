import { useEffect, useState } from "react";

function getUserLogueado() {
    const usuario = sessionStorage.getItem('usuarioLogueado');
    return usuario ? JSON.parse(usuario) : null;
};

export function useFavoritos() {
    const [favoritos, setFavoritos] = useState([]);
    const [usuario, setUsuario] = useState(getUserLogueado) 
    
useEffect(() => {
    const handleStorageChance = () => {
        setUsuario(getUserLogueado())
    };
    window.addEventListener('storage', handleStorageChance);
    return () => window.removeEventListener('storage', handleStorageChance);
}, []);

useEffect(() => {
    if (usuario) {
        const stored = localStorage.getItem(`favorito_${usuario.id}`);
        setFavoritos(stored ? JSON.parse(stored) : [])
    } else {
        setFavoritos([])
    }
},[usuario]);

useEffect(() => {
    if (usuario) {
        localStorage.setItem(`favoritos_${usuario.id}`,JSON.stringify(favoritos))
    }
}, [favoritos, usuario]);

function agregaFavorito(pelicula) {
    setFavoritos(prev => {
        if (!prev.some(fav => fav.id === pelicula.id)) {
            return [...prev, pelicula];
        }
        return prev;
    });
};

function eliminarFvorito(peliculaId) {
    setFavoritos(prev => prev.filter(fav => fav.id !== peliculaId));
};

function esFavorito(peliculaId) {
    return favoritos.map(fav => fav.id === peliculaId);
};

  return { favoritos, agregarFavorito, eliminarFavorito, esFavorito, usuario};
};





