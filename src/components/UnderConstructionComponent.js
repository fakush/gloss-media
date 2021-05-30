import React from 'react';
import SectionImage from '../assets/img/under_construction.png';

export default function UnderConstructionComponent() {
    return (
        <div className="d-flex align-items-center justify-content-center" style={{margin: "20px", height: "50vh"}}>
            <img src={SectionImage} alt="Sección en construcción"/>
        </div>
    )
}
