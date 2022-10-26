import React, { useEffect, useState } from 'react';
import ContentHeader from '../../components/content-header/content-header';
import AsteroidList from '../../components/asteroid-list/asteroid-list';
import styles from './index.module.scss';
import { filterAstList } from '../../utils/asteroids';

export default ({ state }) => {

    const [asteroidsList, setAsteroidsList] = useState(null);
    
    useEffect(() => {
        if (state.asteroidsMap) {
            setAsteroidsList(filterAstList(state.asteroidsMap, state.filters));
        }
    }, [state.filters, state.asteroidsMap]);

    return (
        <>
            <main className={styles.main_content}>
                <ContentHeader filters={state.filters} options={state.options} />
                    <AsteroidList
                        asteroidsList={asteroidsList}
                        options={state.options}
                        next={state.nextLink} />
            </main>
        </>
    )
}

