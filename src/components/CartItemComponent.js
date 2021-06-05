import React, { useContext } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button';
import { orderContext } from '../contexts/OrderContext';

export default function CartItemComponent({item}) {
    const { handleRemove } = useContext(orderContext) 
  console.log("Item que llega a cartItems");
  console.log(item);
  return (
    <Row>
      <ListGroup horizontal>
        <ListGroup.Item>{item.id}</ListGroup.Item>
        <ListGroup.Item>{item.subCategory}</ListGroup.Item>
        <ListGroup.Item>{item.title}</ListGroup.Item>
        <ListGroup.Item>{item.quantity}</ListGroup.Item>
        <ListGroup.Item><Button variant='dark' onClick={() => handleRemove(item.id)}><span className="material-icons">delete</span></Button></ListGroup.Item>
      </ListGroup>
    </Row>
  );
}
