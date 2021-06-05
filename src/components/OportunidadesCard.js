import React from "react";
import './OportunidadesCard.css'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

export default function OportunidadesCard({item}) {
  const history = useHistory();
  
  return (
      <Card className="Card">
        <Card.Img variant="top" src="https://picsum.photos/400/300" />
        <Card.Body className="CardBody">
          <Card.Text>
              Region: {item.region} <br />
              Zona: {item.zone}<br />
              Dirección: {item.location}<br />
          </Card.Text>
          <Button className="BotonMasInfo" onClick={() => history.push(`/planifica/detalle/${item.id}`)}>+ Info</Button>
        </Card.Body>
      </Card>
  );
}
