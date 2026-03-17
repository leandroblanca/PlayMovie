import { Button, Card, Table } from "react-bootstrap";
import { BsPencil, BsEye, BsTrash } from "react-icons/bs";

function TablaPeliculas({editarPelicula, eliminarPelicula, peliculasFiltradas}) {
    return (
        <Card className="border-0 shadow-sm rounded-4 overflow-hidden">
        <Card.Body className="p-0">
      <Table hover responsive className="align-middle tabla-peliculas">
  <thead>
    <tr>
      <th>Película</th>
      <th>Fecha de estreno</th>
      <th>Estado</th>
      <th>Calificación</th>
      <th>Acciones</th>
    </tr>
  </thead>

  <tbody>

    {peliculasFiltradas.map((pelicula) => (
      <tr key={pelicula.id}>

        <td>
          <div className="d-flex align-items-center gap-3">

            <img
              src={pelicula.poster}
              alt={pelicula.titulo}
              className="poster-mini"
            />

            <div>
              <div className="fw-bold">{pelicula.titulo}</div>
              <div className="text-muted small">
                {pelicula.genero || "Ciencia ficción"}
              </div>
            </div>

          </div>
        </td>

        <td>
          {pelicula.fecha || pelicula.anio}
        </td>

        <td>
          <span
            className={`badge ${
              pelicula.estado === "Publicado"
                ? "bg-success"
                : "bg-warning text-dark"
            }`}
          >
            {pelicula.estado || "Publicado"}
          </span>
        </td>

        <td>
          ⭐ {pelicula.rating || "N/A"}
        </td>

         <td className="d-flex gap-2">

          <Button
           
            onClick={() => editarPelicula(pelicula.id)}
          >
            <BsPencil size={18}/>
          </Button>

          <Button
            
          >
            <BsEye size={18}/>
          </Button>

          <Button
           
            onClick={() => eliminarPelicula(pelicula.id)}
          >
            <BsTrash size={18}/>
          </Button>

        </td>


      </tr>
    ))}

  </tbody>
</Table>
        </Card.Body>
      </Card>
    )
}

export default TablaPeliculas;