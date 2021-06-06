import React, {useState, useEffect} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import ItemsListComponent from '../components/ItemsListComponent';
import SeachBarComponent from '../components/SeachBarComponent';

const { getFilteredItems } = require('../services/ProductsService');


export default function ItemsListContainer() {
    let {id} = useParams();
    id = id.split(":")
    const [items, setItems] = useState([]);
    const history = useHistory();

    useEffect(() => {
        getFilteredItems(id).then(newData => {setItems(Object.values(newData))})
        console.log(items)
    }, [])

    function handleSelection(data) {
        data = data.split(",")
        history.push(`/planifica/filtro/${data[0]}:${data[1]}`);
      }

    return (
        <div>
            <SeachBarComponent onSelect={handleSelection} />
            <ItemsListComponent items={items} />
        </div>
    )
}
