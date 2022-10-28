import styles from './asteroid-list.module.scss';
import AsteroidListItem from '../asteroid-list-item/asteroid-list-item';
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from 'react';
import { getAsteroidsData } from '../../services/asteroids';
import { extractDataForState } from '../../utils/asteroids';
import {
    updateAsteroidsMap,
    updateAsteroidData,
    addToOrder,
    updateNextLink,
} from '../../state/state';

export default ({ asteroidsList, options, next }) => {

    const [hasMore, setHasMore] = useState(true);

    const getMore = async () => {

        const list = await getAsteroidsData(next);

        updateAsteroidsMap(extractDataForState(list.near_earth_objects));
        updateNextLink(list.links.next);

        !list.links.next && setHasMore(false);
    };

    if (!asteroidsList) {
        return (
            <div className={styles.loader}>
                <p className={styles.loader__text}>Loading...</p>
            </div>
        )
    }

    return (
            <InfiniteScroll
                style={{
                    
                }}
                dataLength={asteroidsList.length}
                next={getMore}
                hasMore={hasMore}
                loader={<h1 style={
                    {
                        display: 'flex',
                        alignItems: 'end',
                        justifyContent: 'flex-start',
                    }}>
                    Loading...</h1>}
                endMessage={<h3>End</h3>}
                className={styles.list}
                scrollThreshold='95%'>
                {
                    asteroidsList.map((ast, i) => {
                        return <AsteroidListItem
                            key={i}
                            asteroid={ast}
                            options={options}
                            addToOrder={addToOrder}
                            onAddAsteroidInfo={updateAsteroidData} />
                    })
                }
            </InfiniteScroll>
    );
};