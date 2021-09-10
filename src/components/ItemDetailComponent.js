import React from 'react';
import './ItemDetailComponent.css';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import MapWidget from '../widgets/MapWidget';
import ReferenciasWidget from '../widgets/ReferenciasWidget';
import MapWidget2 from '../widgets/MapWidget2';

export default function ItemDetailComponent({ item, count }) {
  console.log(item.latitude);
  return (
    <Card className='CardBody'>
      <h6 className=''>Código: {item.id}</h6>
      <Row className='ItemBody'>
        <h6 className='BodyTextPill'>{item.location}</h6>
        <Col className='col-md-6 BodyImage'>
          <Image src={`/img/${item.id}.jpg`} alt='Imagen' fluid />
        </Col>
        <Col className='col-md-6'>
          <Row className='BodyTextRow'>
            <div className='col-md-6'>
              <h6 className='BodyTextPill'>Zona: {item.zone}</h6>
            </div>
            <div className='col-md-6'>
              <h6 className='BodyTextPill'>Region: {item.region}</h6>
            </div>
          </Row>
          <Row>
            <div className='col-md-6'>
              <h6 className='BodyTextPill'>Formato: {item.format}</h6>
            </div>
            <div className='col-md-6'>
              <h6 className='BodyTextPill'>Acciones: {item.action}</h6>
            </div>
          </Row>
          <Row>
            <div className='col-md-6'>
              <h6 className='BodyTextPill'>Segmento: {item.segment}</h6>
            </div>
            <div className='col-md-6'>
              <h6 className='BodyTextPill'>Presupuesto: ${item.budget}</h6>
            </div>
          </Row>
          <Row>
            <div className='col-md-6'>
              <h6 className='BodyTextPill'>Material: {item.material}</h6>
            </div>
            <div className='col-md-6'>
              <h6 className='BodyTextPill'>Caras/Salidas: {item.faces}</h6>
            </div>
          </Row>
          <Row>
            <div className='col-md-6'>
              <h6 className='BodyTextPill'>Base: {item.width}m.</h6>
            </div>

            <div className='col-md-6'>
              <h6 className='BodyTextPill'>Altura: {item.height}m.</h6>
            </div>
          </Row>

          <h6 className='BodyTextPill'>
            Referencias: {<ReferenciasWidget referencias={item.references} />}
          </h6>
          <div className='MapPill'>
            <MapWidget Latitud={item.latitude} Longitud={item.longitude} />
          </div>
          <h6 className='NotaTextPill'>Nota: {item.notes}</h6>
        </Col>
      </Row>
    </Card>
  );
}
