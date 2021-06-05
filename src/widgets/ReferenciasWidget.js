import React from 'react';
import './ReferenciasWidget.css';
import Image from 'react-bootstrap/Image';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Accesos from '../assets/img/ref_accesos.svg';
import Alto_Transito from '../assets/img/ref_alto_transito.svg';
import Shopping from '../assets/img/ref_shopping.svg';
import Zona_Comercial from '../assets/img/ref_zona_comercial.svg';
import Super from '../assets/img/ref_super.svg';
import Deportes from '../assets/img/ref_deportes.svg';
import Bares_Resto from '../assets/img/ref_bares_resto.svg';
import Educacion from '../assets/img/ref_educacion.svg';
import Parques from '../assets/img/ref_parques.svg';

export default function ReferenciasWidget({referencias}) {
    function handleImageSrc(item) {
        const itemValue = item.item.toString();
        switch(itemValue) {
            case "Accesos": {
                return Accesos;
            }
            case "Alto Transito": {
                return Alto_Transito;
            }
            case "Shopping": {
                return Shopping;
            }
            case "Zona Comercial": {
                return Zona_Comercial;
            }
            case "Supermercado": {
                return Super;
            }
            case "Deportes": {
                return Deportes;
            }
            case "Bares/Resto": {
                return Bares_Resto;
            }
            case "Educación": {
                return Educacion;
            }
            case "Parques": {
                return Parques;
            }
            default: {
                console.log(itemValue);
                break;
            }
        }
    }
    return (
        <>
            {referencias.map ((item) => {
                return (
                    <OverlayTrigger key={item} placement="top" overlay={<Tooltip id={`tooltip-${item}`}>{item}</Tooltip>}>
                        <Image className="RefIcon" src={handleImageSrc({item})} alt={item} fluid/>
                    </OverlayTrigger>
                )
            })}
        </>
    )
}
