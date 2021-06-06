import React from "react";
import './OportunidadesCard.css'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

export default function OportunidadesCard({item}) {
  const history = useHistory();
  
  return (
      <Card className="Card">
        <Card.Img variant="top" src={`/img/${item.id}.png`} />
        <Card.Body className="CardBody">
          <Card.Text>
              Region: {item.region.toLowerCase()} <br />
              Zona: {item.zone.toLowerCase()}<br />
              Dirección: {item.location.toLowerCase()}<br />
          </Card.Text>
          <Button className="BotonMasInfo" variant="secondary" onClick={() => history.push(`/planifica/detalle/${item.id}`)}>+ Info</Button>
        </Card.Body>
      </Card>
  );
}
