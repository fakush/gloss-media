import React, { useContext, useEffect, useState } from 'react';
import './ItemDetailContainer.css';
import CounterWidget from '../widgets/CounterWidget';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { orderContext } from '../contexts/OrderContext';
import ItemDetailComponent from '../components/ItemDetailComponent';
import LoadingComponent from '../components/LoadingComponent';
import { Col, Row } from 'react-bootstrap';

export default function ItemDetailContainer({ id }) {
  const { getItemById } = require('../services/ProductsService');

  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState([]);
  const [error, setError] = useState('');
  const [count, setCount] = useState(0);
  const [showCounter, setShowCounter] = useState(true);
  const order = useContext(orderContext);
  const history = useHistory();

  function onAdd() {
    setShowCounter(false);
    order.addToOrder({
      code: item.id,
      region: item.region,
      zone: item.zone,
      location: item.location,
      format: item.format,
      price: item.budget,
      amount: count,
    });
    history.goBack();
  }

  useEffect(() => {
    getItemById(id)
      .then((item) => {
        setItem(item[0]);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <LoadingComponent />;
  if (error) return <h1>{error}</h1>;

  return (
    <div>
      <ItemDetailComponent item={item} count={count} />
      <Row className='AddToOrderBody'>
        <Col className='AddToOrderTitleContainer'>
          <p className='AddToOrderTitle'>Añadir al presupuesto presupuesto</p>
        </Col>
        <Col className='AddToOrderCounterContainer' md='auto'>
          <p className='CounterTitle'>Periodos</p>
          <CounterWidget
            onAdd={setCount}
            count={count}
            showCounter={showCounter}
          />
        </Col>
        <Col className='AddToOrderButtonContainer'>
          {count > 0 && (
            <Button
              className='BotonMasInfo'
              variant='secondary'
              onClick={onAdd}
            >
              Ok
            </Button>
          )}
        </Col>
      </Row>
    </div>
  );
}
