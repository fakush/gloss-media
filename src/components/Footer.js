import React, { useState, useRef } from 'react';
import './Footer.css';
import FooterLogo from '../assets/img/footer_logo.png';
import Row from 'react-bootstrap/Row';
import { Col, Form, Modal, Button } from 'react-bootstrap';
import modalImage from '../assets/img/logo_modal.png';
import Image from 'react-bootstrap/Image';
import SocialWidgetArrow from '../assets/img/social_widget_arrow.png';
import SocialWidgetArrow2 from '../assets/img/social_widget_arrow2.png';
import SocialWidgetInstagram from '../assets/img/social_widget_instagram.svg';
import SocialWidgetFacebook from '../assets/img/social_widget_facebook.svg';
import SocialWidgetLinkedin from '../assets/img/social_widget_linkedin.svg';
import SocialWidgetWhatsapp from '../assets/img/social_widget_whatsapp.svg';

export default function Footer() {
  const { sendSuscriptionService } = require('../services/SuscriptionService.js');
  const [docRef, setDocRef] = useState('');
  const emailRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);

  const sendSubscription = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    sendSuscriptionService(email).then((res) => setDocRef(email), setShowModal(true));
  };

  return (
    <>
      <Row className='FooterGlobals'>
        <hr />
        <Col className='FooterLinks col-4'>
          <div className='FooterLinksRow' style={{ 'align-items': '  flex-end' }}>
            <a href='https://www.instagram.com/glossideas/' target='_blank' rel='noreferrer'>
              <img className='SocialWidgetIcon' src={SocialWidgetInstagram} alt='Instagram' />
            </a>
            <a href='https://www.facebook.com/glossideas' target='_blank' rel='noreferrer'>
              <img className='SocialWidgetIcon' src={SocialWidgetFacebook} alt='Facebook' />
            </a>
            <a href='https://www.linkedin.com/company/glossmedia' target='_blank' rel='noreferrer'>
              <img className='SocialWidgetIcon' src={SocialWidgetLinkedin} alt='LinkedIn' />
            </a>
            <a
              href='https://api.whatsapp.com/send?phone=5491130767706&text=Hola,%20quiero%20solicitar%20v%C3%ADa%20p%C3%BAblica'
              target='_blank'
              rel='noreferrer'
            >
              <img className='SocialWidgetIcon' src={SocialWidgetWhatsapp} alt='Whatsapp' />
            </a>
            <img
              src={SocialWidgetArrow2}
              className='socialArrows SocialWidgetIcon'
              alt='Redes Sociales'
              style={{ marginRight: '0px' }}
            />
          </div>
          <div className='FooterLinksRow'>
            <img
              src={SocialWidgetArrow}
              className='socialArrows SocialWidgetIcon'
              alt='Redes Sociales'
            />
            <a
              href='mailto:comercial@glossmedia.com.ar'
              target='_blank'
              rel='noreferrer'
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <p>comercial@glossmedia.com.ar</p>
            </a>
          </div>
        </Col>
        <Col className='FooterLogo col-4'>
          <img src={FooterLogo} alt='Footer Logo' />
        </Col>
        <Col className='FooterForm col-4'>
          <div className='FooterLinksRow' style={{ marginBottom: '0px' }}>
            <img
              src={SocialWidgetArrow}
              className='socialArrows SocialWidgetIcon'
              alt='Redes Sociales'
              style={{ marginLeft: '0px' }}
            />
            <p>Dejanos tu correo para recibir nuestra newsletter</p>
          </div>
          <div className='FooterLinksRow' style={{ alignItems: 'center' }}>
            <Form onSubmit={(emailRef) => sendSubscription(emailRef)}>
              <Form.Control type='email' placeholder='Ingresá tu email' ref={emailRef} />
            </Form>
            <img
              src={SocialWidgetArrow2}
              className='socialArrows SocialWidgetIcon'
              alt='Redes Sociales'
            />
          </div>
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleCloseModal}>
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
