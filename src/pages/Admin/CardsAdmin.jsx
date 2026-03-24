import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { dashboardStats as statsData } from "./ObjetosAdmin.jsx";
import {Card, Col, Row } from "react-bootstrap";
import "./Admin.css";

const CardsAdmin = ({ dashboardStats = statsData }) => {
  return (
    <Row className="g-4 mb-4 justify-content-center">
    {dashboardStats.map(stat => (
      <Col xs={12} sm={6} xl={3} key={stat.id}>

        <Card className="dashboard-card mb-3 rounded-5 h-100 border-0 shadow-sm">

          <Card.Body>

            <div className="d-flex justify-content-between align-items-center mb-2">

              <FontAwesomeIcon
                icon={stat.icon}
                className="dashboard-icon"
              />

              <span className="dashboard-trend">
                {stat.tendencia} {stat.porcentaje}
              </span>

            </div>

            <Card.Title className="dashboard-title">
              {stat.titulo}
            </Card.Title>

            <Card.Text className="dashboard-value">
              {stat.valor}
            </Card.Text>

          </Card.Body>

        </Card>
      </Col>
    ))}
  </Row>
  )
}
export default CardsAdmin;
