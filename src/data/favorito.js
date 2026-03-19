import { useEffect, useState } from "react";

function getUserLogueado() {
    const usuario = sessionStorage.getItem('usuarioLogueado');
    return usuario ? JSON.parse(usuario) : null;
}

export function useFavoritos() {
    const [favoritos, setFavoritos] = useState([]);
    const [usuario, setUsuario] = useState(getUserLogueado) 
}

useEffect(() => {
    const handleStorageChance = () => {
        setUsuario(getUserLogueado())
    };
    window.addEventListener('storage', handleStorageChance);
    return () => window.removeEventListener('storage', handleStorageChance);
}, []);

