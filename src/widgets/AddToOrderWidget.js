import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { orderContext } from '../contexts/OrderContext';

export default function AddToOrderWidget({item}) {
    const { order, presentInOrder, handleRemove } = useContext(orderContext);

    function addToOrder() {
        order.addToOrder({ code: item.id, region: item.region, zone: item.zone, location: item.location, quantity: 1, });
      }

    return (
        <div>
            {
                presentInOrder(item.id) !== true ? (
                    <Button onClick={addToOrder}>+</Button>
                ) : (
                    <Button onClick={() => handleRemove(item.id)}>-</Button>
                )
            }
        </div>
    )
}
