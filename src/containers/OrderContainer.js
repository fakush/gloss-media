import React, { useContext, useState } from "react";
import './OrderContainer.css'
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import { useHistory } from "react-router-dom";
import OrderListComponent from "../components/OrderListComponent";
import { orderContext } from "../contexts/OrderContext";
import OrderContainerHeader from "../components/OrderContainerHeader";
import OrderResumeComponent from "../components/OrderResumeComponent";

export default function OrderContainer() {
  const { order, clearOrder, orderTotal } = useContext(orderContext);
  const { sendOrderService } = require("../services/OrderService");
  const [ docRef, setDocRef ] = useState('')
  const [showModal, setShowModal] = useState(false);
  const history = useHistory();
  //Todo: Pasar acá los datos del usuario.
  const hardcodedBuyerData = {name: "RevisarCorreo", email: "pepe@pepe.com", phone: 55555555,};

  const handleCloseModal = () => setShowModal(false);
  
  function sendOrder() {
    sendOrderService(hardcodedBuyerData, order, orderTotal)
        .then(res => setDocRef(res),
        setShowModal(true));
        // clearOrder();
        // history.push("/");
  }

  return (
    <div>
      <OrderContainerHeader />
      <OrderListComponent />
      <OrderResumeComponent />
      <div className="OrderButtonBar">
        <Button className="OrderButtons" variant="dark" onClick={() => history.push("/planifica")}>
        <span className="material-icons">reply_all</span> Volver al planificador
        </Button>
        <Button className="OrderButtons" variant="danger" onClick={() => clearOrder()}>
        <span className="material-icons">delete</span> Vaciar el presupuesto
        </Button>
        <Button className="OrderButtons OrderButton" variant="secondary" onClick={() => sendOrder()}>
          <span className="material-icons">send</span> Solicitar presupuesto
        </Button>
      </div>
      <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Pedido Realizado</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Su numero de pedido es: {docRef}</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
          </Modal.Footer>
        </Modal>
    </div>
  );
}
