import React from 'react';
import classes from './asteroid-list-item.module.scss';

export default ({ asteroid }) => {
    return (
        <div className={classes.asteroid}>
            <div className={classes.asteroid__image}>
                <img src={asteroid.img} />
            </div>
            <p className={classes.asteroid__spec_date}>
                {asteroid.close_approach_data.close_approach_date}
            </p>
            <p className={classes.asteroid__spec_name}>
                {`Астероид ${asteroid.name}`}
            </p>
            <p className={classes.asteroid__spec_dia}>
                {`Ø ${asteroid.estimated_diameter} м`}
            </p>
            <p className={classes.asteroid__spec_dist}>
                {`↔ ${asteroid.close_approach_data.miss_distance.kilometers} км`}
            </p>
            <p className={classes.asteroid__spec_dang}>
                {asteroid.is_potentially_hazardous_asteroid
                ? 'Опасен'
                : 'Не опасен'}
            </p>
            <button className={classes.asteroid__destroy_button}>уничтожить</button>
        </div>
    )
}