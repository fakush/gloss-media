import React from "react";
import './NavBar.css';
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import NavBarBrand from "../assets/img/navbar_brand.png";
import { useHistory } from "react-router-dom";
import LoginWidget from "../widgets/LoginWidget";
import OrderWidget from "../widgets/OrderWidget";

export default function NavBar() {
  const history = useHistory();

  function handleClick(path) {
      history.push(path);
  }

  return (
    <Navbar className="NavBar" bg="light" expand="lg">
      <Navbar.Brand className="NavBar-NavBarBrand" onClick={() => handleClick("/")}>
        <img src={NavBarBrand}alt="Gloss + / Eso que ves brilla"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="NavBar-Links">
          <Nav.Link className="NavBar-Links-Link" onClick={() => handleClick("/planifica")}>Planifica</Nav.Link>
          <Nav.Link className="NavBar-Links-Link" onClick={() => handleClick("/ohh")}>OHH</Nav.Link>
          <Nav.Link className="NavBar-Links-Link" onClick={() => handleClick("/ideas")}>Ideas</Nav.Link>
          <Nav.Link className="NavBar-Links-Link" onClick={() => handleClick("/nosotros")}>Nosotros</Nav.Link>
        </Nav>
        <Nav className="NavBar-Widgets">
            <LoginWidget />
            <OrderWidget />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
