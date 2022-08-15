import classes from '../../styles/modules/asteroid-list.module.scss';
import AsteroidListItem from './asteroid-list-item';

export default ({ asteroids }) => {
    if (!asteroids) {
        return <p>Loading...</p>
    }

    return (
        <section className={classes.list}>
            {asteroids.map(astr => {
                <AsteroidListItem className={classes.list__item}
                key={astr.id} asteroid={astr} />
            })}
        </section>
    )
}