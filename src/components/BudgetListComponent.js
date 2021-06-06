import React, { useContext } from "react";
import "./BudgetListComponent.css";
import { orderContext } from "../contexts/OrderContext";
import BudgetItemComponent from "./BudgetItemComponent";
import ListGroup from "react-bootstrap/ListGroup";

export default function BudgetListComponent() {
  const { order } = useContext(orderContext);

  return (
    <ListGroup className="BudgetListContainer">
      {order.map((item) => {
        return <BudgetItemComponent key={item.id} item={item} />;
      })}
    </ListGroup>
  );
}
