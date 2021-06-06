import React from 'react';
import './CounterWidget.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";

export default function CounterWidget({ onAdd, showCounter, count }) {
    if (!showCounter) return null;

    return (
        <Row className="CounterBlock">
            <Col className="CounterButton">
                <Button variant="secondary" onClick={() => onAdd(count - 1)}>-</Button>
            </Col>
            <Col className="CounterButton">
                <Button variant="light">{count}</Button>
            </Col>
            <Col className="CounterButton">
                <Button variant="secondary" onClick={() => onAdd(count + 1)}>+</Button>
            </Col>
        </Row>
    )
}
