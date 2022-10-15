import { useEffect, useState } from 'react';
import styles from './order.module.scss';

export default ({ initstate }) => {

    const [state, setState] = useState(initstate);

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