import axios from 'axios';
import { useEffect, useState } from 'react';

import Row from 'react-bootstrap/Row';

import ScoopOption from './ScoopOption';
import ToppingOption from './ToppingOption';

export default function Options({ optionType }) {
    const [items, setItems] = useState([])

    useEffect(() => {
        console.log('optionType', optionType)
        axios.get(`http://localhost:3030/${optionType}`)
            .then((response) => {
                setItems(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [optionType]);

    const ItemCoponent = optionType === 'scoops' ? ScoopOption : ToppingOption;

    const optionsItems = items.map(item => (
        <ItemCoponent
            key={item.name}
            name={item.name}
            imagePath={item.imagePath}
        />
    ))
    return <Row>{optionsItems}</Row>
}