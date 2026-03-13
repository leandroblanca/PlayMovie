import { Button, Card, Table } from "react-bootstrap";
import { BsPencil, BsEye, BsTrash } from "react-icons/bs";

function TablaPeliculas({ editarPelicula, eliminarPelicula, peliculasFiltradas }) {
  return (
    <Card className="border-0 shadow-sm rounded-4 overflow-hidden">
      <Card.Body className="p-0">

        <Table hover responsive className="align-middle tabla-peliculas">
          <thead>
            <tr>
              <th>Película</th>
              <th>Año</th>
              <th>Categoría</th>
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
                      style={{ width: "50px", borderRadius: "6px" }}
                    />

                    <div>
                      <div className="fw-bold">{pelicula.titulo}</div>
                      <div className="text-muted small">
                        {pelicula.categorias}
                      </div>
                    </div>

                  </div>
                </td>

             
                <td>{pelicula.anio}</td>

              
                <td>
                  <span className="badge bg-primary">
                    {pelicula.categorias}
                  </span>
                </td>

                
                <td className="d-flex gap-2">

                  <Button
                    variant="outline-primary"
                    onClick={() => editarPelicula(pelicula)}
                  >
                    <BsPencil size={18} />
                  </Button>

                  <Button
                    variant="outline-secondary"
                    onClick={() => window.open(pelicula.video)}
                  >
                    <BsEye size={18} />
                  </Button>

                  <Button
                    variant="outline-danger"
                    onClick={() => eliminarPelicula(pelicula.id)}
                  >
                    <BsTrash size={18} />
                  </Button>

                </td>

              </tr>
            ))}

          </tbody>
        </Table>

      </Card.Body>
    </Card>
  );
}

export default TablaPeliculas;