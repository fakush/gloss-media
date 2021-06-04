import React from "react";
import "./ItemDetailComponent.css";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import MapWidget from "../widgets/MapWidget";
import ReferenciasWidget from "../widgets/ReferenciasWidget";

export default function ItemDetailComponent({ title, item, count }) {
  return (
    <Card className="CardBody">
      <h6 className="">Código: {title}</h6>
      <Row className="ItemBody">
        <h6 className="BodyTextPill">{item.Ubicacion}</h6>
        <Col className="col-md-6 BodyImage">
          <img src="https://picsum.photos/400/400" alt="Imagen" />
        </Col>
        <Col className="col-md-6">
          <Row className="BodyTextRow">
            <div className="col-md-6">
              <h6 className="BodyTextPill">Zona: {item.Zona}</h6>
            </div>
            <div className="col-md-6">
              <h6 className="BodyTextPill">Region: {item.Region}</h6>
            </div>
          </Row>
          <Row>
            <div className="col-md-6">
              <h6 className="BodyTextPill">Formato: {item.Formato}</h6>
            </div>
            <div className="col-md-6">
              <h6 className="BodyTextPill">Acciones: {item.Accion}</h6>
            </div>
          </Row>
          <Row>
            <div className="col-md-6">
              <h6 className="BodyTextPill">Segmento: {item.Segmento}</h6>
            </div>
            <div className="col-md-6">
              <h6 className="BodyTextPill">
                Presupuesto: ${item.Presupuesto}.000
              </h6>
            </div>
          </Row>
          <Row>
            <div className="col-md-6">
              <h6 className="BodyTextPill">Material: {item.Material}</h6>
            </div>
            <div className="col-md-6">
              <h6 className="BodyTextPill">Caras/Salidas: {item.Caras}</h6>
            </div>
          </Row>
          <Row>
            <div className="col-md-6">
              <h6 className="BodyTextPill">Base: {item.Base}m.</h6>
            </div>

            <div className="col-md-6">
              <h6 className="BodyTextPill">Altura: {item.Altura}m.</h6>
            </div>
          </Row>
          
          <h6 className="BodyTextPill">Referencias: {<ReferenciasWidget referencias={item.Referencias}/>}</h6>
          <div className="MapPill">
            <MapWidget Latitud={item.Latitud} Longitud= {item.Longitud} />
          </div>
          <h6 className="NotaTextPill">Nota: {item.NOTA}</h6>
        </Col>
      </Row>
    </Card>
  );
}
