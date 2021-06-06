import React, { useContext } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Col from 'react-bootstrap/Col';
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button';
import { orderContext } from '../contexts/OrderContext';
import CounterWidget from '../widgets/CounterWidget';

export default function BudgetItemComponent({item}) {
    const { count, handleRemove } = useContext(orderContext) 
  return (
    <ListGroup.Item>
      <Row className="ItemRowContainer">
          <Col className="EstiloTexto">{item.code}</Col>
          <Col className="EstiloTexto">{item.region.toLowerCase()}</Col>
          <Col className="EstiloTexto">{item.zone.toLowerCase()}</Col>
          <Col className="EstiloTexto" lg="2">{item.location.toLowerCase()}</Col>
          <Col className="EstiloTexto">{<CounterWidget count={count} showCounter={true} />}</Col>
          <Col className="EstiloTexto"><Button variant='dark' onClick={() => handleRemove(item.id)}><span className="material-icons">delete</span></Button></Col>
      </Row>
    </ListGroup.Item>
  );
}
