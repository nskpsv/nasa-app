import { useEffect, useState } from 'react';
import classes from './order.module.scss';

export default ({ state = null }) => {

    const [state, setState] = useState(state);

    useEffect(() => {
        if (!state) {
            const buff = JSON.parse(localStorage.getItem('order'));
            setState(buff || null)
        };
         
    }, [state])

    return (
            <h1>Order</h1>
    )
}