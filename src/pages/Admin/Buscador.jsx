<Container fluid className="min-vh-100">
      <Row>
      
        <Col xs={12} md={9} lg={10} className="p-4">
        
           <div className="mb-4">
        <Form onSubmit={buscarPeliculaApi} className="d-flex gap-2 col-12 col-md-6">
          <Form.Control
            type="text"
            placeholder="Ej: Batman, Avatar..."
            value={busquedaApi}
            onChange={(e) => setBusquedaApi(e.target.value)}
          />
          <Button variant="danger" className="rounded-5" type="submit">Buscar</Button>
        </Form>
   
      </div>

</Col>
      </Row>
    </Container>