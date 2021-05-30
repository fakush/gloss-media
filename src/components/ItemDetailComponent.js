import React from 'react';
import './ItemDetailComponent.css';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge'


export default function ItemDetailComponent({title, item, count}) {
    console.log(`Title in Component: ${title}`);
    console.log(`Item in Component: ${item}`);
    console.log(item)

    return (
        <Card>
            <h6 className="TitleTextPill">Código: {title}</h6>
            <h6 className="BodyTextPill">{item.UBICACIÓN}</h6>
            <h6 className="BodyTextPill">Zona: {item.ZONA}</h6>
            <h6 className="BodyTextPill">Region: {item.REGION}</h6>
            <h6 className="BodyTextPill">Formato: {item.FORMATO}</h6>
            <h6 className="BodyTextPill">Acciones: {item.ACCION}</h6>
            <h6 className="BodyTextPill">Segmento: {item.SEGMENTO}</h6>
            <h6 className="BodyTextPill">Presupuesto: ${item.PRESUPUESTO}.000</h6>
            <h6 className="BodyTextPill">Material: {item.MATERIAL}</h6>
            <h6 className="BodyTextPill">Caras/Salidas: {item.CARAS}</h6>
            <h6 className="BodyTextPill">Base: {item.BASE}m.</h6>
            <h6 className="BodyTextPill">Altura: {item.ALTURA}m.</h6>
            <h6 className="BodyTextPill">Referencias: {item.REFERENCIAS}</h6>
            <h6 className="BodyTextPill">Coordenadas: {item.COORDENADAS}</h6>
            <h6 className="BodyTextPill">Nota: {item.NOTA}</h6>
        </Card>
    )
}
