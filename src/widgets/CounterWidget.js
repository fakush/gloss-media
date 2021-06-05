import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";

export default function CounterWidget({ onAdd, showCounter, count }) {
    if (!showCounter) return null;

    return (
        <Row>
            <Col>
                <Button variant="danger" onClick={() => onAdd(count - 1)}>-</Button>
            </Col>
            <Col>
                <Button variant="light">{count}</Button>
            </Col>
            <Col>
                <Button variant="success" onClick={() => onAdd(count - 1)}>+</Button>
            </Col>
        </Row>
    )
}
