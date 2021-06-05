import React, {useContext} from "react";
import { orderContext } from "../contexts/OrderContext";
import CartItemComponent from "./CartItemComponent";

export default function CartListComponent() {
    const { order } = useContext(orderContext);

    return (
        <div>
            {order.map((item) => {
            console.log('map')
            console.log(item)
        return <CartItemComponent key={item.id} item={item} />;
      })}
        </div>
    )
}
