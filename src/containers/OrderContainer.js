import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import { useHistory } from "react-router-dom";
import BudgetListComponent from "../components/BudgetListComponent";
import { orderContext } from "../contexts/OrderContext";

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
  }

  return (
    <div>
      <h1>Nuevo Cart:</h1>
      <div>
        <BudgetListComponent />
      </div>
      <Row>
        <Button variant="dark" onClick={() => history.push("/planificador")}>
          Volver al planificador
        </Button>
        <Button variant="danger" onClick={() => clearOrder()}>
          Vaciar el presupuesto
        </Button>
        <Button variant="success" onClick={() => sendOrder()}>
          Solicitar presupuesto
        </Button>
      </Row>
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
