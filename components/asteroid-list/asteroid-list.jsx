import classes from './asteroid-list.module.scss';
import AsteroidListItem from '../asteroid-list-item/asteroid-list-item';
import { prepareDataForListItem } from '../../utils/asteroids';

export default ({ asteroidsList }) => {

    if (!asteroidsList) {
        return (
            <div className={classes.loader}>
                <p className={classes.loader__text}>Loading...</p>
            </div>
        )
    }

    return (
        <section className={classes.list}>
            {
                Object
                    .keys(asteroidsList)
                    .map(key => {
                        return <AsteroidListItem key={asteroidsList[key].id} asteroid={prepareDataForListItem(asteroidsList[key])} />
                    })
            }
        </section>
    )
}