import React, { useContext } from 'react';
import './OrderListComponent.css';
import { orderContext } from '../contexts/OrderContext';
import OrderItemComponent from './OrderItemComponent';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function OrderListComponent() {
  const { order } = useContext(orderContext);

  return (
    <ListGroup className='OrderListContainer'>
      <ListGroup.Item className='OrderTitleRow'>
        <Row className='ItemRowContainer OrderTitleBar'>
          <Col className='EstiloTexto'>Código</Col>
          <Col className='EstiloTexto'>Región</Col>
          <Col className='EstiloTexto'>Zona</Col>
          <Col className='EstiloTexto' xs='1' lg='2'>
            Dirección
          </Col>
          <Col className='EstiloTexto'>Formato</Col>
          <Col className='EstiloTexto'>Precio</Col>
          <Col className='BotonQuitar'>Períodos</Col>
          <Col className='BotonQuitar'>Quitar</Col>
        </Row>
      </ListGroup.Item>
      {order.map((item) => {
        return <OrderItemComponent key={item.id} item={item} />;
      })}
    </ListGroup>
  );
}
