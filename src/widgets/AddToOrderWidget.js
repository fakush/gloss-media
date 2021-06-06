import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { orderContext } from '../contexts/OrderContext';

export default function AddToOrderWidget({item}) {
    const { order, presentInOrder, handleRemove } = useContext(orderContext);

    // todo: A implementar
    // function addToOrder() {
    //     order.addToOrder({ code: item.id, region: item.region, zone: item.zone, location: item.location, amount: 1, });
    //   }

    return (
        <>
            {
                presentInOrder(item.id) === 0 ? (
                    <Button className="botonDefault2" 
                    // todo: A implementar
                    // onClick={addToOrder}
                    >
                        <span className="material-icons">turned_in_not</span>0
                    </Button>
                ) : (
                    <Button className="botonDefault2" onClick={() => handleRemove(item.id)}>
                        <span className="material-icons">bookmark_remove</span>
                        {presentInOrder(item.id)}
                    </Button>
                )
            }
        </>
    )
}
