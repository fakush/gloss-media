import React from 'react';
import './OhhPage.css';
import { Col, Container, Row, Image } from 'react-bootstrap';
import ImageOhh1 from '../assets/img/ooh_1.png';
import ImageOhh2 from '../assets/img/ooh_2.png';
import ImageOhh3 from '../assets/img/ooh_3.png';
import ImageOhh4 from '../assets/img/ooh_4.png';
import ImageOhh5 from '../assets/img/ooh_5.png';
import ImageOhh6 from '../assets/img/ooh_6.png';
import ImageOhh7 from '../assets/img/ooh_7.png';
import ImageOhh8 from '../assets/img/ooh_8.png';

export default function OhhPage() {
  return (
    <div className='Background-component'>
      <Container className='OhhContainer' fluid>
        <Row>
          <p className='TextosOhh'>
            Out of home, hace referencia a publicidad fuera de casa... es todo
            lo que sucede ahi afuera! Desde un afiche y hasta una marquesina,
            Todo lo que te rodea comunica. Tenemos infinitas posibilidades en un
            mundo cada vez mas conectado y dinámico.
          </p>
          <h4 className='DestacadoOhh'>
            ¿ENTONCES PORQUE SUMAR OOH EN TU PROXIMA CAMPAÑA?
          </h4>
          <p className='TextosOhh'>
            8 Razones para comprar publicidad en la vía publica
          </p>
        </Row>
        <Row className='AreaOhh'>
          <Col md={3}>
            <Image className='ImagenOhh' src={ImageOhh1} fluid />
          </Col>
          <Col md={3}>
            <Image className='ImagenOhh' src={ImageOhh2} fluid />
          </Col>
          <Col md={3}>
            <Image className='ImagenOhh' src={ImageOhh3} fluid />
          </Col>
          <Col md={3}>
            <Image className='ImagenOhh' src={ImageOhh4} fluid />
          </Col>
          <Col md={3}>
            <Image className='ImagenOhh' src={ImageOhh5} fluid />
          </Col>
          <Col md={3}>
            <Image className='ImagenOhh' src={ImageOhh6} fluid />
          </Col>
          <Col md={3}>
            <Image className='ImagenOhh' src={ImageOhh7} fluid />
          </Col>
          <Col md={3}>
            <Image className='ImagenOhh' src={ImageOhh8} fluid />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
