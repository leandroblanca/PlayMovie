import { Button, Card, Table } from "react-bootstrap";
import { BsPencil, BsEye, BsTrash } from "react-icons/bs";

function TablaPeliculas({ editarPelicula, eliminarPelicula, peliculasFiltradas }) {
  return (
    <Card className="tabla-peliculas-card border-0 overflow-hidden">
      <Card.Body className="p-0">
        <Table hover responsive className="align-middle tabla-peliculas mb-0">
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
                          src={pelicula.poster || "https://via.placeholder.com/50x70?text=No+Image"}
                          alt={pelicula.titulo}
                          className="pelicula-poster"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://via.placeholder.com/50x70?text=No+Image";
                          }}
                        />
                      </div>

                      <div>
                        <div className="pelicula-titulo fw-bold">{pelicula.titulo}</div>
                        <div className="pelicula-categorias-mini text-muted small">
                          {pelicula.categorias?.split(',').map((cat, i) => (
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
                        pelicula.categorias.split(',').map((categoria, index) => (
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
                    <div className="mobile-pelicula-card">
                      <div className="d-flex gap-3 mb-3">
                        <div className="poster-container-mobile">
                          <img
                            src={pelicula.poster || "https://via.placeholder.com/60x80?text=No+Image"}
                            alt={pelicula.titulo}
                            className="pelicula-poster-mobile"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = "https://via.placeholder.com/60x80?text=No+Image";
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
                              pelicula.categorias.split(',').map((categoria, index) => (
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