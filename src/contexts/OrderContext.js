import {createContext, useState, useEffect} from 'react';

export const orderContext = createContext([]);

export function OrderContextProvider({children}){
    const [order, setOrder] = useState([]);
    const [orderTotal, setOrderTotal] = useState(0);
    const [priceTotal, setPriceTotal] = useState(0);

    function isInOrder(code) {
        return order.some((item) => item.code === code);
      }

    function addToOrder({code, region, zone, location, format, price, amount}) {
        const isCurrentInOrder = isInOrder(code);
    if (isCurrentInOrder) {
      const newOrder = order.map((item) => {
        if (item.code === code) {
          return {
            ...item, amount: amount + item.amount,
          }
        }
        return item
      })
      return setOrder([...newOrder])
    }
    setOrder([...order, { code, region, zone, location, format, price, amount }]);
    }

    function clearOrder(){
        setOrder([]);
    }

    useEffect(() => {
		const Total = () => {
			let totalItems = 0;
      let priceTotal = 0;
			for (const Item of order) {
				totalItems += Item.amount;
        priceTotal += Item.amount * Item.price;
			}
			setOrderTotal(totalItems);
			setPriceTotal(priceTotal);
		};
		Total();
	}, [order]);

    function handleRemove(code) {
        const newOrder = order.filter((item) => item.code !== code);
        setOrder(newOrder);
    }

    function presentInOrder(code) {
        const newOrder = order.filter((item) => item.code === code);
        var check = newOrder.length !== 0 ? newOrder[0].amount : 0;
        return check
    }

    return (
        <orderContext.Provider value={
            {order, setOrder, addToOrder, clearOrder, handleRemove, presentInOrder, orderTotal, priceTotal,}}>{children}
        </orderContext.Provider>
    )
}
