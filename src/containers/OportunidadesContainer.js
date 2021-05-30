import React, { useState, useEffect } from "react";
import OportunidadesList from "../components/OportunidadesList";

const { getItems } = require("../services/OfertasService");

export default function OportunidadesContainer() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems().then((data) => setItems(data));
  }, []);

  return (
      <OportunidadesList items={items} />
  );
}