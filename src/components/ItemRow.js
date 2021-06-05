import React from "react";
import "./ItemRow.css";
import { useHistory } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import ReferenciasWidget from "../widgets/ReferenciasWidget";


export default function ItemRow({ item }) {
  let history = useHistory();

  return (
    <ListGroup.Item>
      <Row className="ItemRowContainer">
          <Col></Col>
          <Col className="EstiloTexto">{item.Codigo}</Col>
          <Col className="EstiloTexto">{item.Region.toLowerCase()}</Col>
          <Col className="EstiloTexto">{item.Zona.toLowerCase()}</Col>
          <Col className="EstiloTexto" lg="2">{item.Ubicacion.toLowerCase()}</Col>
          <Col className="EstiloTexto">{item.Formato}</Col>
          <Col className="EstiloTexto">{item.Accion}</Col>
          <Col lg="2"><ReferenciasWidget referencias={item.Referencias} /></Col>
          <Col className="EstiloTexto">$ {item.Presupuesto}.000</Col>
          <Col>
            <Button className="BotonMasInfo" onClick={() => history.push(`/planifica/detalle/${item.Codigo}`)}>+ Info</Button>
          </Col>
      </Row>
    </ListGroup.Item>
  );
}
