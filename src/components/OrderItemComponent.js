import React, { useContext } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Col from 'react-bootstrap/Col';
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button';
import { orderContext } from '../contexts/OrderContext';

export default function OrderItemComponent({item}) {
    const { handleRemove } = useContext(orderContext)
  return (
    <ListGroup.Item>
      <Row className="ItemRowContainer">
          <Col className="EstiloTexto">{item.code}</Col>
          <Col className="EstiloTexto">{item.region.toLowerCase()}</Col>
          <Col className="EstiloTexto">{item.zone.toLowerCase()}</Col>
          <Col className="EstiloTexto" lg="2">{item.location.toLowerCase()}</Col>
          <Col className="EstiloTexto">{item.format.toLowerCase()}</Col>
          <Col className="EstiloTexto">$ {item.price}.000.00</Col>
          <Col className="BotonQuitar">{item.amount}</Col>
          <Col className="BotonQuitar"><Button variant='dark' onClick={() => handleRemove(item.id)}><span className="material-icons">delete</span></Button></Col>
      </Row>
    </ListGroup.Item>
  );
}
