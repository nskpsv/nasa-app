import React, { useState } from 'react';
import styles from './asteroid-list-item.module.scss';
import AsteroidDetails from '../asteroid-details/asteroid-details';
import { disableScroll, enableScroll } from '../../utils/scroll';
import AsteroidDescription from '../asteroid-description/asteroid-description';

const AsteroidListItem = ({ asteroid, options, onAddToOrder, onAddAsteroidInfo }) => {

    const [showDetails, setShowDetails] = useState(false);

    const showFullInfo = () => {
        setShowDetails((prev) => !prev)
        disableScroll();
    };

    const closeFullInfo = (e) => {
        e.stopPropagation();
        setShowDetails((prev) => !prev);
        enableScroll();
    };

    const description = <AsteroidDescription asteroid={asteroid} options={options} onAddToOrder={onAddToOrder} />;

    return (
        <>
            {
                showDetails &&
                <AsteroidDetails asteroid={asteroid} onAddAsteroidInfo={onAddAsteroidInfo} options={options} onClick={closeFullInfo}>
                    {description}
                </AsteroidDetails >
            }
            <div className={styles.list_item} onClick={showFullInfo}>
                {description}
            </div>
        </>
    )
};

export default AsteroidListItem;