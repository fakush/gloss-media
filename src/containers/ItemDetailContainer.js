import React, { useContext, useEffect, useState } from "react";
// import ItemCount from "../../components/ItemCount";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { orderContext } from "../contexts/OrderContext";
import ItemDetailComponent from "../components/ItemDetailComponent";
import LoadingComponent from "../components/LoadingComponent";

export default function ItemDetailContainer({ id }) {
  const { getItemById } = require("../services/ProductsService");
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState([]);
  const [error, setError] = useState("");
  const [count, setCount] = useState(0);
  const [showCounter, setShowCounter] = useState(true);
  const order = useContext(orderContext);
  const history = useHistory();

  function onAdd() {
    setShowCounter(false);
    order.addToOrder({
      id: item.id,
      subCategory: item.campoCategoria,
      title: item.nombresCalles,
      quantity: count,
    });
    history.push("/confirmar_pedido");
  }

  useEffect(() => {
    getItemById(id)
      .then((item) => {
        setItem(item);
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
      <ItemDetailComponent title={item[0].Codigo} item={item[0]} count={count} />
      {/* <ItemCount onAdd={setCount} count={count} showCounter={showCounter} /> */}
      {count > 0 && (
        <Button className="button" variant="dark" onClick={onAdd}>
          Añadir a mi presupuesto
        </Button>
      )}
    </div>
  );
}
