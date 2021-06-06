import React from "react";
import "./ItemRow.css";
import { useHistory } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import ReferenciasWidget from "../widgets/ReferenciasWidget";
import AddToOrderWidget from '../widgets/AddToOrderWidget';

export default function ItemRow({ item }) {
  let history = useHistory();

  return (
    <ListGroup.Item>
      <Row className="ItemRowContainer">
          <Col><AddToOrderWidget item={item}/></Col>
          <Col className="EstiloTexto">{item.id}</Col>
          <Col className="EstiloTexto">{item.region.toLowerCase()}</Col>
          <Col className="EstiloTexto">{item.zone.toLowerCase()}</Col>
          <Col className="EstiloTexto" lg="2">{item.location.toLowerCase()}</Col>
          <Col className="EstiloTexto">{item.format.toLowerCase()}</Col>
          <Col className="EstiloTexto">{item.action.toLowerCase()}</Col>
          <Col lg="2"><ReferenciasWidget referencias={item.references} /></Col>
          <Col className="EstiloTexto">$ {item.budget}.000</Col>
          <Col>
            <Button className="BotonMasInfo" onClick={() => history.push(`/planifica/detalle/${item.id}`)}>+ Info</Button>
          </Col>
      </Row>
    </ListGroup.Item>
  );
}
