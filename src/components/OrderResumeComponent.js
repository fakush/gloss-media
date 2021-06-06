import React, { useContext } from "react";
import './OrderResumeComponent.css';
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { orderContext } from '../contexts/OrderContext';

export default function OrderResumeComponent() {
    const { orderTotal, priceTotal } = useContext(orderContext);
    let date = new Date();
    let myDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`

  return (
    <Card className="ResumeCardBody">
        <Card.Title>Resumen del presupuesto:</Card.Title>
      <Row className="ItemBody">
        <Row className="BodyTextRow">
          <div className="col-md-6">
            <h6 className="ResumeTextPill"><span className="material-icons">today</span> Fecha del presupuesto: {myDate}</h6>
          </div>
          <div className="col-md-6">
            <h6 className="ResumeTextPill"><span className="material-icons">payments</span> Presupuesto Bruto Total: $ {priceTotal}.000,00</h6>
          </div>
        </Row>
        <Row>
          <div className="col-md-6">
            <h6 className="ResumeTextPill"><span className="material-icons">assignment_turned_in</span> Cantidad de Formatos seleccionados: {orderTotal}</h6>
          </div>
          <div className="col-md-6">
            <h6 className="ResumeTextPill"><span className="material-icons">bookmarks</span> ¿Incluir Impresión del Presupuesto?: SI</h6>
          </div>
        </Row>
      </Row>
    </Card>
  );
}
