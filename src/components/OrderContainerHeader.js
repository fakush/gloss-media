import React from 'react';
import './OrderContainerHeader.css'
import Row from 'react-bootstrap/Row';
import { useAuth } from '../contexts/AuthContext';

export default function OrderContainerHeader() {
    const { currentUser } = useAuth();

    return (
        <div className="OrderContainerHeader" variant="dark">
            <Row>
                <p><span className="material-icons">account_box</span> {currentUser.email}</p>
            </Row>
            <Row>
            <p>Estaremos Realizando tu presupuesto con los siguientes items:</p>
            </Row>
        </div>
    )
}
