import React from 'react';
import './NosotrosPage.css';
import { Col, Container, Row, Image } from 'react-bootstrap';
import ImageNosotros1 from '../assets/img/nosotros_1marialidia.jpg';
import ImageNosotros2 from '../assets/img/nosotros_2elizabeth.jpg';
import ImageNosotros3 from '../assets/img/nosotros_3soledad.jpg';
import ImageNosotros4 from '../assets/img/nosotros_4fernando.jpg';
import ImageServicios1 from '../assets/img/nosotros_servicios1.png';
import ImageServicios2 from '../assets/img/nosotros_servicios2.png';
import ImageServicios3 from '../assets/img/nosotros_servicios3.png';

export default function NosotrosPage() {
  return (
    <div className='Background-component'>
      <Container fluid>
        <Row>
          <p className='TextoIdeas'>
            Somos una equipo especializado en campañas Out Of Home. Nuestro
            objetivo es que cada campaña de via publica, brille! <br />
            Buscamos crear un espacio único con todas las opciones para una
            mejor evaluación, implementación, planificación y control.
          </p>
        </Row>
        <Row className='AreaQuienesSomos'>
          <h6 className='TituloQuienesSomos'>QUIENES SOMOS</h6>
          <Col md={3}>
            <Image className='ImagenQuienesSomos' src={ImageNosotros1} fluid />
          </Col>
          <Col md={3}>
            <Image className='ImagenQuienesSomos' src={ImageNosotros2} fluid />
          </Col>
          <Col md={3}>
            <Image className='ImagenQuienesSomos' src={ImageNosotros3} fluid />
          </Col>
          <Col md={3}>
            <Image className='ImagenQuienesSomos' src={ImageNosotros4} fluid />
          </Col>
        </Row>
        <Row className='AreaNuestrosServicios'>
          <h6 className='TituloNuestrosServicios'>NUESTROS SERVICIOS</h6>
          <Col md={4}>
            <Image
              className='ImagenNuestrosServicios'
              src={ImageServicios1}
              fluid
            />
          </Col>
          <Col md={4}>
            <Image
              className='ImagenNuestrosServicios'
              src={ImageServicios2}
              fluid
            />
          </Col>
          <Col md={4}>
            <Image
              className='ImagenNuestrosServicios'
              src={ImageServicios3}
              fluid
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
