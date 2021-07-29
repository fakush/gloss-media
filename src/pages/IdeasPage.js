import React from 'react';
import './IdeasPage.css';
import { Col, Container, Row, Image } from 'react-bootstrap';
import ImageOutdoor from '../assets/img/ideas_outdoor.png';
import ImageIndoor from '../assets/img/ideas_indoor.png';
import ImageExtras from '../assets/img/ideas_extras.png';

export default function IdeasPage() {
  return (
    <div className='Background-component'>
      <Container fluid>
        <Row>
          <p className='TextoIdeas'>
            Contamos con 3 unidades de negocio para el desarrollo de tus ideas,
            donde encontraras soportes tacticos, estrategicos e innovadores.
            Registrate y a traves del planificador podras evaluar todas las
            opciones en cada localidad y econtrar el mix perfecto para tu
            campaña.
          </p>
        </Row>
        <Row className='TarjetasIdeas'>
          <Col md={4} className='TarjetaIdeas'>
            <Row>
              <h3 className='TituloTarjetaIdea'>OUTDOOR</h3>
            </Row>
            <Row>
              <h6 className='BajadaTarjetaIdea'>
                CPMS | AFICHES | SEXTUPLES SUPERVALLAS | 4X4 | MUPIS GRANDES
                FORMATOS
              </h6>
            </Row>
            <Row>
              <Image className='ImagenTarjetaIdea' src={ImageOutdoor} fluid />
            </Row>
          </Col>
          <Col md={4} className='TarjetaIdeas'>
            <Row>
              <h3 className='TituloTarjetaIdea'>INDOOR</h3>
            </Row>
            <Row>
              <h6 className='BajadaTarjetaIdea'>
                CIRCUITO INDOOR EN SHOPPINGS DEL INTERIOR DEL PAIS
              </h6>
            </Row>
            <Row>
              <Image className='ImagenTarjetaIdea' src={ImageIndoor} fluid />
            </Row>
          </Col>
          <Col md={4} className='TarjetaIdeas'>
            <Row>
              <h3 className='TituloTarjetaIdea'>EXTRAS</h3>
            </Row>
            <Row>
              <h6 className='BajadaTarjetaIdea'>
                ACCIONES ESPCIALES | CARTELERIA | PROMOCIONES
              </h6>
            </Row>
            <Row>
              <Image className='ImagenTarjetaIdea' src={ImageExtras} fluid />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
