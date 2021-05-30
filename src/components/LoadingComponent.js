import React from 'react'
import { Spinner } from 'react-bootstrap'

export default function LoadingComponent() {
    return (
        <div className="d-flex align-items-center justify-content-center" style={{height: "50vh"}}>
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="info" />
        </div>
    )
}
