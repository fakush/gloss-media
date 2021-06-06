import React, {useState, useEffect} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import ItemListHeader from '../components/ItemListHeader';
import ItemsListComponent from '../components/ItemsListComponent';
import SeachBarComponent from '../components/SeachBarComponent';

const { getItems, getFilteredItems } = require('../services/ProductsService');


export default function ItemsListContainer() {
    let {id} = useParams();
    const [items, setItems] = useState([]);
    const history = useHistory();

    useEffect(() => {
        id === undefined ? (
            getItems().then(data => setItems(data))
        ) : (
            getFilteredItems(id.split(":")).then(newData => {setItems(Object.values(newData))})
        );
    }, [id])

    function handleSelection(data) {
        data = data.split(",")
        history.push(`/planifica/filtro/${data[0]}:${data[1]}`);
      }

    return (
        <div>
            <SeachBarComponent onSelect={handleSelection} />
            <ItemListHeader />
            <ItemsListComponent items={items} />
        </div>
    )
}
