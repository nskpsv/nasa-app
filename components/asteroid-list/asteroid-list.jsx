import classes from './asteroid-list.module.scss';
import AsteroidListItem from '../asteroid-list-item/asteroid-list-item';
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from 'react';
import { getAsteroidsData } from '../../services/asteroids';

export default ({ asteroidsList, setList, option, next, onAddToOrder }) => {
    
    const [hasMore, setHasMore] = useState(true);
    const getMore = async () => {
        console.log('get' + next);
        const list = await getAsteroidsData(next);
        setList(list);
    }

    useEffect(() => {
        if (!next) {
            setHasMore(false);
        }
    }, [next])

    if (!asteroidsList) {
        return (
            <div className={classes.loader}>
                <p className={classes.loader__text}>Loading...</p>
            </div>
        )
    }

    return (
            <InfiniteScroll
                dataLength={Object.keys(asteroidsList).length}
                next={getMore}
                hasMore={hasMore}
                loader={<h1 style={
                    {
                        bottom: '50px',
                        right: '60px',
                        position: 'absolute'
                    }}>
                        Loading...</h1>}
                endMessage={<h3>End</h3>}
                className={classes.list}
                scrollThreshold='95%'>
                {
                    asteroidsList.map((ast, i) => {
                        return <AsteroidListItem key={i} asteroid={ast} option={option} onAddToOrder={onAddToOrder} />
                    })
                }
            </InfiniteScroll>

    )
}