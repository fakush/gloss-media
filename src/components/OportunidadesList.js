import React from 'react';
import './OportunidadesList.css';
import OportunidadesCard from './OportunidadesCard';
import { Row } from 'react-bootstrap';

export default function OportunidadesList({ items }) {
  return (
    <Row className='CardRow' s={1} md={2} lg={4}>
      {items.map((item) => {
        return <OportunidadesCard key={item.id} item={item} />;
      })}
    </Row>
  );
}
