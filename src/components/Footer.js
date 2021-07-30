import React, { useState } from 'react';
import './Footer.css';
import FooterLogo from '../assets/img/footer_logo.png';
import Row from 'react-bootstrap/Row';
import { Col, Form, Modal, Button } from 'react-bootstrap';
import modalImage from '../assets/img/logo_modal.png';
import Image from 'react-bootstrap/Image';

export default function Footer() {
  const {
    sendSuscriptionService,
  } = require('../services/SuscriptionService.js');
  const [docRef, setDocRef] = useState('');
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);

  const sendSubscription = (email) => {
    sendSuscriptionService(email).then(
      (res) => setDocRef(res),
      setShowModal(true)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Row className='FooterGlobals'>
        <hr />
        <Col className='FooterLogo'>
          <img src={FooterLogo} alt='Footer Logo' />
        </Col>
        <Col className='FooterCenter'>
          <p>Comunicate con nosotros</p>
          <p>comercial@gloss.com.ar</p>
        </Col>
        <Col className='FooterForm'>
          <Form>
            <Form.Label>
              Dejanos tu correo para recibir nuestra newsletter
            </Form.Label>
            <Form.Control type='email' placeholder='Ingresá tu email' />
          </Form>
        </Col>
      </Row>

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        {/* <Modal.Header>
            <Modal.Title>Pedido Realizado</Modal.Title>
          </Modal.Header> */}
        <Modal.Body>
          <p className='textoModal'>Gracias por tu suscripción</p>
          <div className='imagenModal'>
            <Image src={modalImage} />
          </div>
        </Modal.Body>

        <Modal.Footer>
          <p>Se a añadido a nuestra lista: {docRef}</p>
          <Button variant='secondary' onClick={handleCloseModal}>
            Salir
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
