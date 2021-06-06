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
            <Dropdown.Item eventKey={["region", "BUENOS AIRES"]}>BUENOS AIRES</Dropdown.Item>
            <Dropdown.Item eventKey={["region", "CABA"]}>CABA</Dropdown.Item>
            <Dropdown.Item eventKey={["region", "CHUBUT"]}>CHUBUT</Dropdown.Item>
            <Dropdown.Item eventKey={["region", "CORDOBA"]}>CORDOBA</Dropdown.Item>
            <Dropdown.Item eventKey={["region", "CORRIENTES"]}>CORRIENTES</Dropdown.Item>
            <Dropdown.Item eventKey={["region", "JUJUY"]}>JUJUY</Dropdown.Item>
            <Dropdown.Item eventKey={["region", "MENDOZA"]}>MENDOZA</Dropdown.Item>
            <Dropdown.Item eventKey={["region", "MISIONES"]}>MISIONES</Dropdown.Item>
            <Dropdown.Item eventKey={["region", "NEUQUEN"]}>NEUQUEN</Dropdown.Item>
            <Dropdown.Item eventKey={["region", "SALTA"]}>SALTA</Dropdown.Item>
            <Dropdown.Item eventKey={["region", "SAN JUAN"]}>SAN JUAN</Dropdown.Item>
            <Dropdown.Item eventKey={["region", "SAN LUIS "]}>SAN LUIS </Dropdown.Item>
            <Dropdown.Item eventKey={["region", "SANTA FE"]}>SANTA FE</Dropdown.Item>
            <Dropdown.Item eventKey={["region", "SANTIAGO DEL ESTERO"]}>SANTIAGO DEL ESTERO</Dropdown.Item>
            <Dropdown.Item eventKey={["region", "TUCUMAN"]}>TUCUMAN</Dropdown.Item>
          </DropdownButton>
        </Col>
        <Col>
          <DropdownButton variant="secondary" menuAlign="right" title="Seleccionar Zona" id="dropdown-menu-align-right" {...props}>
            <Dropdown.Item eventKey={["zone", "ALMAGRO"]}>ALMAGRO</Dropdown.Item>
            <Dropdown.Item eventKey={["zone", "BAHIA BLANCA"]}>BAHIA BLANCA</Dropdown.Item>
            <Dropdown.Item eventKey={["zone", "BELGRANO"]}>BELGRANO</Dropdown.Item>
            <Dropdown.Item eventKey={["zone", "CABA"]}>CABA</Dropdown.Item>
            <Dropdown.Item eventKey={["zone", "CAÑITAS"]}>CAÑITAS</Dropdown.Item>
            <Dropdown.Item eventKey={["zone", "CARLOS PAZ"]}>CARLOS PAZ</Dropdown.Item>
            <Dropdown.Item eventKey={["zone", "COLEGIALES"]}>COLEGIALES</Dropdown.Item>
            <Dropdown.Item eventKey={["zone", "CORDOBA"]}>CORDOBA</Dropdown.Item>
            <Dropdown.Item eventKey={["zone", "CORRIENTES"]}>CORRIENTES</Dropdown.Item>
            <Dropdown.Item eventKey={["zone", "FLORESTA"]}>FLORESTA</Dropdown.Item>
            <Dropdown.Item eventKey={["zone", "GODOY CRUZ"]}>GODOY CRUZ</Dropdown.Item>
            <Dropdown.Item eventKey={["zone", "GUAYMALLEN"]}>GUAYMALLEN</Dropdown.Item>
            <Dropdown.Item eventKey={["zone", "IGUAZU"]}>IGUAZU</Dropdown.Item>
            <Dropdown.Item eventKey={["zone", "JUJUY"]}>JUJUY</Dropdown.Item>
            <Dropdown.Item eventKey={["zone", "MENDOZA"]}>MENDOZA</Dropdown.Item>
            <Dropdown.Item eventKey={["zone", "NEUQUEN"]}>NEUQUEN</Dropdown.Item>
            <Dropdown.Item eventKey={["zone", "PALERMO"]}>PALERMO</Dropdown.Item>
            <Dropdown.Item eventKey={["zone", "POSADAS"]}>POSADAS</Dropdown.Item>
            <Dropdown.Item eventKey={["zone", "RAWSON"]}>RAWSON</Dropdown.Item>
            <Dropdown.Item eventKey={["zone", "RIO CUARTO"]}>RIO CUARTO</Dropdown.Item>
            <Dropdown.Item eventKey={["zone", "ROSARIO"]}>ROSARIO</Dropdown.Item>
            <Dropdown.Item eventKey={["zone", "SALTA"]}>SALTA</Dropdown.Item>
            <Dropdown.Item eventKey={["zone", "SAN JUAN "]}>SAN JUAN </Dropdown.Item>
            <Dropdown.Item eventKey={["zone", "SAN LUIS"]}>SAN LUIS</Dropdown.Item>
            <Dropdown.Item eventKey={["zone", "SANTA FE"]}>SANTA FE</Dropdown.Item>
            <Dropdown.Item eventKey={["zone", "SANTIAGO DEL ESTERO"]}>SANTIAGO DEL ESTERO</Dropdown.Item>
            <Dropdown.Item eventKey={["zone", "SANTO TOME"]}>SANTO TOME</Dropdown.Item>
            <Dropdown.Item eventKey={["zone", "TIGRE"]}>TIGRE</Dropdown.Item>
            <Dropdown.Item eventKey={["zone", "TRELEW"]}>TRELEW</Dropdown.Item>
            <Dropdown.Item eventKey={["zone", "TUCUMAN"]}>TUCUMAN</Dropdown.Item>
            <Dropdown.Item eventKey={["zone", "VILLA MARIA"]}>VILLA MARIA</Dropdown.Item>
          </DropdownButton>
        </Col>
        <Col>
          <DropdownButton variant="secondary" menuAlign="right" title="Seleccionar Formato" id="dropdown-menu-align-right" {...props}>
            <Dropdown.Item eventKey={["format", "ASCENSORES"]}>ASCENSORES</Dropdown.Item>
            <Dropdown.Item eventKey={["format", "BANNERS"]}>BANNERS</Dropdown.Item>
            <Dropdown.Item eventKey={["format", "CAMION BACK"]}>CAMION BACK</Dropdown.Item>
            <Dropdown.Item eventKey={["format", "CARTEL"]}>CARTEL</Dropdown.Item>
            <Dropdown.Item eventKey={["format", "COLUMNA"]}>COLUMNA</Dropdown.Item>
            <Dropdown.Item eventKey={["format", "ESCALERAS"]}>ESCALERAS</Dropdown.Item>
            <Dropdown.Item eventKey={["format", "LED"]}>LED</Dropdown.Item>
            <Dropdown.Item eventKey={["format", "MEDIANERA"]}>MEDIANERA</Dropdown.Item>
            <Dropdown.Item eventKey={["format", "PENDON"]}>PENDON</Dropdown.Item>
            <Dropdown.Item eventKey={["format", "PLOTEO PUERTAS"]}>PLOTEO PUERTAS</Dropdown.Item>
            <Dropdown.Item eventKey={["format", "SEXTUPLES"]}>SEXTUPLES</Dropdown.Item>
            <Dropdown.Item eventKey={["format", "TOP SITE"]}>TOP SITE</Dropdown.Item>
            <Dropdown.Item eventKey={["format", "TRANSILUMINADOS"]}>TRANSILUMINADOS</Dropdown.Item>
            <Dropdown.Item eventKey={["format", "VALLA"]}>VALLA</Dropdown.Item>
          </DropdownButton>
        </Col>
        <Col>
          <DropdownButton variant="secondary" menuAlign="right" title="Seleccionar Acciones" id="dropdown-menu-align-right" {...props}>
            <Dropdown.Item eventKey={["action", "COBERTURA"]}>COBERTURA</Dropdown.Item>
            <Dropdown.Item eventKey={["action", "FRECUENCIA"]}>FRECUENCIA</Dropdown.Item>
            <Dropdown.Item eventKey={["action", "IMPACTO"]}>IMPACTO</Dropdown.Item>
          </DropdownButton>
        </Col>
        <Col>
          <DropdownButton variant="secondary" menuAlign="right" title="Seleccionar Referencias" id="dropdown-menu-align-right" {...props}>
            <Dropdown.Item eventKey={["references", "Accesos"]}>ACCESOS</Dropdown.Item>
            <Dropdown.Item eventKey={["references", "Alto Transito"]}>ALTO TRANSITO</Dropdown.Item>
            <Dropdown.Item eventKey={["references", "Bares/Resto"]}>BARES RESTO</Dropdown.Item>
            <Dropdown.Item eventKey={["references", "Deportes"]}>DEPORTES</Dropdown.Item>
            <Dropdown.Item eventKey={["references", "Educación"]}>EDUCACIÓN</Dropdown.Item>
            <Dropdown.Item eventKey={["references", "Parques"]}>PARQUES</Dropdown.Item>
            <Dropdown.Item eventKey={["references", "Shopping"]}>SHOPPING</Dropdown.Item>
            <Dropdown.Item eventKey={["references", "Supermercado"]}>SUPERMERCADO</Dropdown.Item>
            <Dropdown.Item eventKey={["references", "Zona Comercial"]}>ZONA COMERCIAL</Dropdown.Item>
          </DropdownButton>
        </Col>
        <Col className="BotonBorrarFiltrosContainer">
          <Button className="BotonBorrarFiltros" variant="secondary" onClick={() => history.push(`/planifica/`)}>Borrar Filtros</Button>
        </Col>
      </Row>
    </div>
  );
}
