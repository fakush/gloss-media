import React from 'react';
import './ItemListHeader.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

export default function ItemListHeader() {
  let history = useHistory();

  return (
    <ListGroup.Item className='ItemListHeader'>
      <Row className='ItemRowContainer'>
        <Col className='EstiloTexto'>In Order</Col>
        <Col className='EstiloTexto'>Código</Col>
        <Col className='EstiloTexto'>Región</Col>
        <Col className='EstiloTexto'>Zona</Col>
        <Col className='EstiloTexto' sm='1' lg='2'>
          Dirección
        </Col>
        <Col className='EstiloTexto'>Formato</Col>
        <Col className='EstiloTexto'>Acción</Col>
        <Col className='EstiloTexto' sm='1' lg='2'>
          Referencias
        </Col>
        <Col className='EstiloTexto'>Precio/Periodo</Col>
        <Col>
          <Button
            className='BotonMasInfo'
            variant='secondary'
            onClick={() => history.push(`/checkout`)}
          >
            Presupuestar
          </Button>
        </Col>
      </Row>
    </ListGroup.Item>
  );
}
