import React from "react";
import "./Footer.css";
import FooterLogo from "../assets/img/footer_logo.png";
import Row from "react-bootstrap/Row";
import { Col, Form } from "react-bootstrap";

export default function Footer() {
  return (
    <Row className="FooterGlobals">
      <hr />
      <Col className="FooterLogo">
        <img src={FooterLogo} alt="Footer Logo" />
      </Col>
      <Col className="FooterCenter">
        <p>Comunicate con nosotros</p>
        <p>comercial@gloss.com.ar</p>
      </Col>
      <Col className="FooterForm">
        <Form>
          <Form.Label>
            Dejanos tu correo para recibir nuestra newsletter
          </Form.Label>
          <Form.Control type="email" placeholder="Ingresá tu email" />
        </Form>
      </Col>
    </Row>
  );
}
