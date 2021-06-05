import React from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import ItemRow from './ItemRow';

export default function ItemsListComponent({items}) {
    return (
        <ListGroup variant="flush">
          {items.map((item) => {
            return (
              <ItemRow key={item.Codigo} item={item} />
            );
          })}
        </ListGroup>
      );
    }