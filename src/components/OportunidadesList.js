import React from "react";
import './OportunidadesList.css';
import OportunidadesCard from "./OportunidadesCard";
import CardDeck from 'react-bootstrap/CardDeck'

export default function OportunidadesList({items}) {
  return (
    <CardDeck className="CardDeck">
        {items.map((item) => {
            return (
                <OportunidadesCard key={item.Codigo} item={item} />
            )
        })}
    </CardDeck>
  );
}
