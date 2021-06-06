import React from 'react';
import { Alert } from 'react-bootstrap';


export default function AuthErrorAlert({error}) {
    return (
        <Alert variant="warning">
            Error: {error}
        </Alert>
    )
}
