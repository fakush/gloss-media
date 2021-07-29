import React, { useContext, useState } from 'react';
import './OrderContainer.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useHistory } from 'react-router-dom';
import OrderListComponent from '../components/OrderListComponent';
import { orderContext } from '../contexts/OrderContext';
import OrderContainerHeader from '../components/OrderContainerHeader';
import OrderResumeComponent from '../components/OrderResumeComponent';
import { useAuth } from '../contexts/AuthContext';
import modalImage from '../assets/img/logo_modal.png';
import Image from 'react-bootstrap/Image';

export default function OrderContainer() {
  const { order, clearOrder, orderTotal } = useContext(orderContext);
  const { currentUser } = useAuth();
  const { sendOrderService } = require('../services/OrderService');
  const [docRef, setDocRef] = useState('');
  const [showModal, setShowModal] = useState(false);
  const history = useHistory();
  //Todo: Hay datos harcodeados hasta terminar el login.
  const clientData = {
    name: 'RevisarCorreo',
    email: currentUser.email,
    phone: 55555555,
  };

  const handleCloseModal = () => setShowModal(false);

  function sendOrder() {
    sendOrderService(clientData, order, orderTotal).then(
      (res) => setDocRef(res),
      setShowModal(true)
    );
    clearOrder();
  }

  return (
    <div>
      <OrderContainerHeader />
      <OrderListComponent />
      <OrderResumeComponent />
      <div className='OrderButtonBar'>
        <Button
          className='OrderButtons'
          variant='dark'
          onClick={() => history.push('/planifica')}
        >
          <span className='material-icons'>reply_all</span> Volver al
          planificador
        </Button>
        <Button
          className='OrderButtons'
          variant='secondary'
          onClick={() => clearOrder()}
        >
          <span className='material-icons'>delete</span> Vaciar el presupuesto
        </Button>
        <Button
          className='OrderButtons OrderButton'
          variant='secondary'
          onClick={() => sendOrder()}
        >
          <span className='material-icons'>send</span> Solicitar presupuesto
        </Button>
      </div>
      <Modal show={showModal} onHide={handleCloseModal}>
        {/* <Modal.Header>
            <Modal.Title>Pedido Realizado</Modal.Title>
          </Modal.Header> */}
        <Modal.Body>
          <p className='textoModal'>Tu propuesta se genero con exito!</p>
          <div className='imagenModal'>
            <Image src={modalImage} />
          </div>
          <p className='textoModal'>En breve nos pondremos en contacto</p>
        </Modal.Body>

        <Modal.Footer>
          <p>Su numero de pedido es: {docRef}</p>
          <Button variant='secondary' onClick={handleCloseModal}>
            Salir
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
