import React from "react";
import "./SearchBarComponent.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import Button from 'react-bootstrap/Button';
import DropdownButton from "react-bootstrap/DropdownButton";
import { useHistory } from "react-router-dom";

export default function SeachBarComponent(props) {
  let history = useHistory();

  return (
    <div className="SearchBarBody">
      <Row>
        <p className="SearchBarText">Encontrá las mejores opciones para tu campaña</p>
      </Row>
      <Row>
        <Col>Región</Col>
        <Col>Zona</Col>
        <Col>Formato</Col>
        <Col>Acciones</Col>
        <Col>Referencias</Col>
        <Col></Col>
      </Row>
      <Row>
        <Col>
          <DropdownButton variant="secondary" menuAlign="right" title="Seleccionar Región" id="dropdown-menu-align-right" {...props} >
            <Dropdown.Item eventKey={["Region", "BUENOS AIRES"]}>BUENOS AIRES</Dropdown.Item>
            <Dropdown.Item eventKey={["Region", "CABA"]}>CABA</Dropdown.Item>
            <Dropdown.Item eventKey={["Region", "CHUBUT"]}>CHUBUT</Dropdown.Item>
            <Dropdown.Item eventKey={["Region", "CORDOBA"]}>CORDOBA</Dropdown.Item>
            <Dropdown.Item eventKey={["Region", "CORRIENTES"]}>CORRIENTES</Dropdown.Item>
            <Dropdown.Item eventKey={["Region", "JUJUY"]}>JUJUY</Dropdown.Item>
            <Dropdown.Item eventKey={["Region", "MENDOZA"]}>MENDOZA</Dropdown.Item>
            <Dropdown.Item eventKey={["Region", "MISIONES"]}>MISIONES</Dropdown.Item>
            <Dropdown.Item eventKey={["Region", "NEUQUEN"]}>NEUQUEN</Dropdown.Item>
            <Dropdown.Item eventKey={["Region", "SALTA"]}>SALTA</Dropdown.Item>
            <Dropdown.Item eventKey={["Region", "SAN JUAN"]}>SAN JUAN</Dropdown.Item>
            <Dropdown.Item eventKey={["Region", "SAN LUIS "]}>SAN LUIS </Dropdown.Item>
            <Dropdown.Item eventKey={["Region", "SANTA FE"]}>SANTA FE</Dropdown.Item>
            <Dropdown.Item eventKey={["Region", "SANTIAGO DEL ESTERO"]}>SANTIAGO DEL ESTERO</Dropdown.Item>
            <Dropdown.Item eventKey={["Region", "TUCUMAN"]}>TUCUMAN</Dropdown.Item>
          </DropdownButton>
        </Col>
        <Col>
          <DropdownButton variant="secondary" menuAlign="right" title="Seleccionar Zona" id="dropdown-menu-align-right" {...props}>
            <Dropdown.Item eventKey={["Zona", "ALMAGRO"]}>ALMAGRO</Dropdown.Item>
            <Dropdown.Item eventKey={["Zona", "BAHIA BLANCA"]}>BAHIA BLANCA</Dropdown.Item>
            <Dropdown.Item eventKey={["Zona", "BELGRANO"]}>BELGRANO</Dropdown.Item>
            <Dropdown.Item eventKey={["Zona", "CABA"]}>CABA</Dropdown.Item>
            <Dropdown.Item eventKey={["Zona", "CAÑITAS"]}>CAÑITAS</Dropdown.Item>
            <Dropdown.Item eventKey={["Zona", "CARLOS PAZ"]}>CARLOS PAZ</Dropdown.Item>
            <Dropdown.Item eventKey={["Zona", "COLEGIALES"]}>COLEGIALES</Dropdown.Item>
            <Dropdown.Item eventKey={["Zona", "CORDOBA"]}>CORDOBA</Dropdown.Item>
            <Dropdown.Item eventKey={["Zona", "CORRIENTES"]}>CORRIENTES</Dropdown.Item>
            <Dropdown.Item eventKey={["Zona", "FLORESTA"]}>FLORESTA</Dropdown.Item>
            <Dropdown.Item eventKey={["Zona", "GODOY CRUZ"]}>GODOY CRUZ</Dropdown.Item>
            <Dropdown.Item eventKey={["Zona", "GUAYMALLEN"]}>GUAYMALLEN</Dropdown.Item>
            <Dropdown.Item eventKey={["Zona", "IGUAZU"]}>IGUAZU</Dropdown.Item>
            <Dropdown.Item eventKey={["Zona", "JUJUY"]}>JUJUY</Dropdown.Item>
            <Dropdown.Item eventKey={["Zona", "MENDOZA"]}>MENDOZA</Dropdown.Item>
            <Dropdown.Item eventKey={["Zona", "NEUQUEN"]}>NEUQUEN</Dropdown.Item>
            <Dropdown.Item eventKey={["Zona", "PALERMO"]}>PALERMO</Dropdown.Item>
            <Dropdown.Item eventKey={["Zona", "POSADAS"]}>POSADAS</Dropdown.Item>
            <Dropdown.Item eventKey={["Zona", "RAWSON"]}>RAWSON</Dropdown.Item>
            <Dropdown.Item eventKey={["Zona", "RIO CUARTO"]}>RIO CUARTO</Dropdown.Item>
            <Dropdown.Item eventKey={["Zona", "ROSARIO"]}>ROSARIO</Dropdown.Item>
            <Dropdown.Item eventKey={["Zona", "SALTA"]}>SALTA</Dropdown.Item>
            <Dropdown.Item eventKey={["Zona", "SAN JUAN "]}>SAN JUAN </Dropdown.Item>
            <Dropdown.Item eventKey={["Zona", "SAN LUIS"]}>SAN LUIS</Dropdown.Item>
            <Dropdown.Item eventKey={["Zona", "SANTA FE"]}>SANTA FE</Dropdown.Item>
            <Dropdown.Item eventKey={["Zona", "SANTIAGO DEL ESTERO"]}>SANTIAGO DEL ESTERO</Dropdown.Item>
            <Dropdown.Item eventKey={["Zona", "SANTO TOME"]}>SANTO TOME</Dropdown.Item>
            <Dropdown.Item eventKey={["Zona", "TIGRE"]}>TIGRE</Dropdown.Item>
            <Dropdown.Item eventKey={["Zona", "TRELEW"]}>TRELEW</Dropdown.Item>
            <Dropdown.Item eventKey={["Zona", "TUCUMAN"]}>TUCUMAN</Dropdown.Item>
            <Dropdown.Item eventKey={["Zona", "VILLA MARIA"]}>VILLA MARIA</Dropdown.Item>
          </DropdownButton>
        </Col>
        <Col>
          <DropdownButton variant="secondary" menuAlign="right" title="Seleccionar Formato" id="dropdown-menu-align-right" {...props}>
            <Dropdown.Item eventKey={["Formato", "ASCENSORES"]}>ASCENSORES</Dropdown.Item>
            <Dropdown.Item eventKey={["Formato", "BANNERS"]}>BANNERS</Dropdown.Item>
            <Dropdown.Item eventKey={["Formato", "CAMION BACK"]}>CAMION BACK</Dropdown.Item>
            <Dropdown.Item eventKey={["Formato", "CARTEL"]}>CARTEL</Dropdown.Item>
            <Dropdown.Item eventKey={["Formato", "COLUMNA"]}>COLUMNA</Dropdown.Item>
            <Dropdown.Item eventKey={["Formato", "ESCALERAS"]}>ESCALERAS</Dropdown.Item>
            <Dropdown.Item eventKey={["Formato", "LED"]}>LED</Dropdown.Item>
            <Dropdown.Item eventKey={["Formato", "MEDIANERA"]}>MEDIANERA</Dropdown.Item>
            <Dropdown.Item eventKey={["Formato", "PENDON"]}>PENDON</Dropdown.Item>
            <Dropdown.Item eventKey={["Formato", "PLOTEO PUERTAS"]}>PLOTEO PUERTAS</Dropdown.Item>
            <Dropdown.Item eventKey={["Formato", "SEXTUPLES"]}>SEXTUPLES</Dropdown.Item>
            <Dropdown.Item eventKey={["Formato", "TOP SITE"]}>TOP SITE</Dropdown.Item>
            <Dropdown.Item eventKey={["Formato", "TRANSILUMINADOS"]}>TRANSILUMINADOS</Dropdown.Item>
            <Dropdown.Item eventKey={["Formato", "VALLA"]}>VALLA</Dropdown.Item>
          </DropdownButton>
        </Col>
        <Col>
          <DropdownButton variant="secondary" menuAlign="right" title="Seleccionar Acciones" id="dropdown-menu-align-right" {...props}>
            <Dropdown.Item eventKey={["Acción", "COBERTURA"]}>COBERTURA</Dropdown.Item>
            <Dropdown.Item eventKey={["Acción", "FRECUENCIA"]}>FRECUENCIA</Dropdown.Item>
            <Dropdown.Item eventKey={["Acción", "IMPACTO"]}>IMPACTO</Dropdown.Item>
          </DropdownButton>
        </Col>
        <Col>
          <DropdownButton variant="secondary" menuAlign="right" title="Seleccionar Referencias" id="dropdown-menu-align-right" {...props}>
            <Dropdown.Item eventKey={["Referencias", "Accesos"]}>ACCESOS</Dropdown.Item>
            <Dropdown.Item eventKey={["Referencias", "Alto Transito"]}>ALTO TRANSITO</Dropdown.Item>
            <Dropdown.Item eventKey={["Referencias", "Bares/Resto"]}>BARES RESTO</Dropdown.Item>
            <Dropdown.Item eventKey={["Referencias", "Deportes"]}>DEPORTES</Dropdown.Item>
            <Dropdown.Item eventKey={["Referencias", "Educación"]}>EDUCACIÓN</Dropdown.Item>
            <Dropdown.Item eventKey={["Referencias", "Parques"]}>PARQUES</Dropdown.Item>
            <Dropdown.Item eventKey={["Referencias", "Shopping"]}>SHOPPING</Dropdown.Item>
            <Dropdown.Item eventKey={["Referencias", "Supermercado"]}>SUPERMERCADO</Dropdown.Item>
            <Dropdown.Item eventKey={["Referencias", "Zona Comercial"]}>ZONA COMERCIAL</Dropdown.Item>
          </DropdownButton>
        </Col>
        <Col className="BotonBorrarFiltrosContainer">
          <Button className="BotonBorrarFiltros" onClick={() => history.push(`/planifica/`)}>Borrar Filtros</Button>
        </Col>
      </Row>
    </div>
  );
}
