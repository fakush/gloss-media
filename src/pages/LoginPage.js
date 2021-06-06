import React from "react";
import './LoginPage.css';
import SignInComponent from "../components/SignInComponent";
import LoginImage from "../assets/img/login_img.png";
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";


export default function LoginPage() {
  return (
    <Card className="CardBody">
      <Row className="ItemBody">
        <Col className="col-md-6 BodyImage">
          <Image src={LoginImage} alt="Bienvenidos" fluid />
        </Col>
        <Col className="SignInContainer">
          <SignInComponent />
        </Col>
      </Row>
    </Card>
  );
}
