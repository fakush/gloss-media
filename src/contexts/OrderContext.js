import {createContext, useState, useEffect} from 'react';

export const orderContext = createContext([]);

export function OrderContextProvider({children}){
    const [order, setOrder] = useState([]);
    const [orderTotal, setOrderTotal] = useState(0);

    function isInOrder(code) {
        return order.some((item) => item.code === code);
      }

    function addToOrder({code, region, zone, location, amount}) {
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
    setOrder([...order, { code, region, zone, location, amount }]);
    }

    function updateOrder({code, region, zone, location, amount}) {
        const isCurrentInOrder = isInOrder(code)
        if (isCurrentInOrder) {
            const newOrder = order.map(item => {
                if (item.code === code) {
                    return {
                        ...item, amount: amount
                    }
                }
                return item
            })
            return setOrder([...newOrder])
        }
        setOrder([...order, {code, region, zone, location, amount}])
    }

    function clearOrder(){
        setOrder([]);
    }

    useEffect(() => {
		const Total = () => {
			let totalItems = 0;
			for (const Item of order) {
				totalItems += Item.amount;
			}
			setOrderTotal(totalItems);
			
		};
		Total();
	}, [order]);

    function handleRemove(code) {
        const newOrder = order.filter((item) => item.code !== code);
        setOrder(newOrder);
    }

    function presentInOrder(code) {
        const newOrder = order.filter((item) => item.code === code);
        var check = newOrder.length !== 0 ? true : false;
        console.log(check)
        return check
    }

    return (
        <orderContext.Provider value={
            {order, setOrder, addToOrder, clearOrder, updateOrder, handleRemove, presentInOrder, orderTotal,}}>{children}
        </orderContext.Provider>
    )
}
