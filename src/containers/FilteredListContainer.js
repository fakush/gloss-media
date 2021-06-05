import React, {useState, useEffect} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import ItemsListComponent from '../components/ItemsListComponent';
import SeachBarComponent from '../components/SeachBarComponent';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const { getItems, getFilteredItems } = require('../services/ProductsService');


export default function ItemsListContainer() {
    let {id} = useParams();
    id === undefined ? id = "" : id = id.split(":");
    const [value, setValue] = useState('');
    const [items, setItems] = useState([]);
    const history = useHistory();

    useEffect(() => {
        id === "" ? (
            getItems().then(data => setItems(data))
        ) : (
            getFilteredItems(id).then(newData => {setItems(Object.values(newData))})
        );
    }, [id, value])

    const onChange = ({handleSelection}) => setValue(handleSelection.value);

    function handleSelection(data) {
        data = data.split(",")
        history.push(`/planifica/filtro/${data[0]}:${data[1]}`);
      }

    return (
        <div>
            <SeachBarComponent onSelect={handleSelection} onChange={onChange} />
            <ItemsListComponent items={items} />
        </div>
    )
}
