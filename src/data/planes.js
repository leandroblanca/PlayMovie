const planes = [
    {
        id: "basico",
        nombre: "Básico",
        precio: 7.99,
        moneda: "USD",
        descripcion: "Ideal para smartphones y tablets.",
        caracteristicas: [
            { texto: "Calidad SD (480p)" },
            { texto: "1 dispositivo a la vez" },
            { texto: "Catálogo completo" },
            { texto: "Descargas offline" },
        ],
    },
    {
        id: "estandar",
        nombre: "Estándar",
        precio: 12.99,
        moneda: "USD",
        descripcion: "Para compartir en alta definición.",
        caracteristicas: [
            { texto: "Calidad Full HD (1080p)" },
            { texto: "2 dispositivos a la vez" },
            { texto: "Descargas disponibles" },
            { texto: "Sin anuncios" },
        ],
    },
    {
        id: "premium",
        nombre: "Premium",
        precio: 17.99,
        moneda: "USD",
        descripcion: "La experiencia definitiva de cine.",
        caracteristicas: [
            { texto: "Calidad Ultra HD (4K) + HDR" },
            { texto: "4 dispositivos a la vez" },
            { texto: "Sonido Dolby Atmos" },
            { texto: "Descargas en 10 dispositivos" },
        ],
    },
]

export default planes;