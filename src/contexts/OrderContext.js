import {createContext, useState, useEffect} from 'react';

export const orderContext = createContext([]);

export default function AppContextProvider({children}){
    const [order, setOrder] = useState([]);
    const [orderTotal, setOrderTotal] = useState(0);

    function isInOrder(id) {
        return order.some((item) => item.id === id);
      }

    function addToOrder({id, subCategory, title, quantity}) {
        const isCurrentInOrder = isInOrder(id);
    if (isCurrentInOrder) {
      const newOrder = order.map((item) => {
        if (item.id === id) {
          return {
            ...item, quantity: quantity + item.quantity,
          }
        }
        return item
      })
      return setOrder([...newOrder])
    }
    setOrder([...order, { id, subCategory, title, quantity }]);
    }

    function updateOrder({id, subCategory, title, quantity}) {
        const isCurrentInOrder = isInOrder(id)
        if (isCurrentInOrder) {
            const newOrder = order.map(item => {
                if (item.id === id) {
                    return {
                        ...item, quantity: quantity
                    }
                }
                return item
            })
            return setOrder([...newOrder])
        }
        setOrder([...order, {id, subCategory, title, quantity}])
    }

    function clearOrder(){
        setOrder([]);
    }

    useEffect(() => {
		const Total = () => {
			let totalItems = 0;
			for (const Item of order) {
				totalItems += Item.quantity;
			}
			setOrderTotal(totalItems);
			
		};
		Total();
	}, [order]);

    function handleRemove(id) {
        const newOrder = order.filter((item) => item.id !== id);
        setOrder(newOrder);
    }

    return (
        <orderContext.Provider value={
            {order, setOrder, addToOrder, clearOrder, updateOrder, handleRemove, orderTotal,}}>{children}
        </orderContext.Provider>
    )
}
