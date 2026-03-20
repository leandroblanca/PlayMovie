import { Button, Card, Table } from "react-bootstrap";
import { BsPencil, BsEye, BsTrash } from "react-icons/bs";

function TablaPeliculas({ editarPelicula, eliminarPelicula, peliculasFiltradas }) {
  return (
    <Card className="tabla-peliculas-card w-100 border-0 overflow-hidden">
      <Card.Body className="p-0 w-100">
        <Table hover responsive className="table table-dark table-hover align-middle mb-0">
          <thead className="tabla-header d-none d-md-table-header-group">
            <tr>
              <th>PELÍCULA</th>
              <th>AÑO</th>
              <th>CATEGORÍA</th>
              <th className="text-center">ACCIONES</th>
            </tr>
          </thead>

          <tbody>
            {peliculasFiltradas.length > 0 ? (
              peliculasFiltradas.map((pelicula) => (
                <tr key={pelicula.id} className="pelicula-row">
               
                  <td className="d-none d-md-table-cell">
                    <div className="d-flex align-items-center gap-3">
                      <div className="poster-container">
                        <img
                          src={pelicula.poster || "/assets/no-image.png"}
                          alt={pelicula.titulo}
                          className="pelicula-poster"
                          style={{ width: "40px", height: "60px", objectFit: "cover", borderRadius: "4px" }}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "/assets/no-image.png";
                          }}
                        />
                      </div>

                      <div>
                        <div className="pelicula-titulo fw-bold">{pelicula.titulo}</div>
                        <div className="pelicula-categorias-mini text-muted small">
                          {(pelicula.categorias ? String(pelicula.categorias).split(',') : []).map((cat, i) => (
                            <span key={i} className="categoria-mini">{cat.trim()}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className="d-none d-md-table-cell">
                    <span className="pelicula-anio">{pelicula.anio}</span>
                  </td>

                  <td className="d-none d-md-table-cell">
                    <div className="categorias-container">
                      {pelicula.categorias ? (
                        String(pelicula.categorias).split(',').map((categoria, index) => (
                          <span key={index} className="categoria-badge">
                            {categoria.trim()}
                          </span>
                        ))
                      ) : (
                        <span className="text-muted small">Sin categoría</span>
                      )}
                    </div>
                  </td>

                
                  <td colSpan="4" className="d-md-none p-3">
                    <div className="mobile-pelicula-card bg-dark bg-opacity-25 p-3 rounded-3">
                      <div className="d-flex gap-3 mb-3">
                        <div className="poster-container-mobile">
                          <img
                            src={pelicula.poster || "/assets/no-image.png"}
                            alt={pelicula.titulo}
                            className="pelicula-poster-mobile rounded-2"
                            style={{ width: "50px", height: "75px", objectFit: "cover" }}
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = "/assets/no-image.png";
                            }}
                          />
                        </div>
                        
                        <div className="flex-grow-1">
                          <div className="pelicula-titulo-mobile fw-bold fs-6 mb-1">{pelicula.titulo}</div>
                          <div className="d-flex flex-wrap gap-2 mb-2">
                            <span className="pelicula-anio-mobile">{pelicula.anio}</span>
                          </div>
                          <div className="categorias-mobile">
                            {pelicula.categorias ? (
                              String(pelicula.categorias).split(',').map((categoria, index) => (
                                <span key={index} className="categoria-badge-mobile">
                                  {categoria.trim()}
                                </span>
                              ))
                            ) : (
                              <span className="text-muted small">Sin categoría</span>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <div className="acciones-mobile d-flex gap-2 justify-content-end">
                        <Button
                          variant="outline-primary"
                          onClick={() => editarPelicula(pelicula)}
                          className="accion-btn-mobile edit-btn-mobile"
                          title="Editar película"
                        >
                          <BsPencil size={16} />
                        </Button>

                        <Button
                          variant="outline-secondary"
                          onClick={() => window.open(pelicula.video, '_blank')}
                          className="accion-btn-mobile view-btn-mobile"
                          title="Ver video"
                        >
                          <BsEye size={16} />
                        </Button>

                        <Button
                          variant="outline-danger"
                          onClick={() => eliminarPelicula(pelicula.id)}
                          className="accion-btn-mobile delete-btn-mobile"
                          title="Eliminar película"
                        >
                          <BsTrash size={16} />
                        </Button>
                      </div>
                    </div>
                  </td>

                
                  <td className="d-none d-md-table-cell">
                    <div className="acciones-container d-flex gap-2 justify-content-center">
                      <Button
                        variant="outline-primary"
                        onClick={() => editarPelicula(pelicula)}
                        className="accion-btn edit-btn"
                        title="Editar película"
                      >
                        <BsPencil size={16} />
                      </Button>

                      <Button
                        variant="outline-secondary"
                        onClick={() => window.open(pelicula.video, '_blank')}
                        className="accion-btn view-btn"
                        title="Ver video"
                      >
                        <BsEye size={16} />
                      </Button>

                      <Button
                        variant="outline-danger"
                        onClick={() => eliminarPelicula(pelicula.id)}
                        className="accion-btn delete-btn"
                        title="Eliminar película"
                      >
                        <BsTrash size={16} />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-5">
                  <div className="empty-state">
                    <span className="empty-icon">🎬</span>
                    <p className="mb-0 text-muted">No hay películas para mostrar</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}

export default TablaPeliculas;