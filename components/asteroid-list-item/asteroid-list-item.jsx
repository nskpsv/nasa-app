import React from 'react';
import classes from './asteroid-list-item.module.scss';
import dangImg from './assets/dangerous.svg';
import noDangImg from './assets/non-dangerous.svg'

export default ({ asteroid }) => {

    return (
        <div className={classes.asteroid}>
            <p className={classes.asteroid__approach_date}>
                {asteroid.approachDate}
            </p>
            <div className={classes.asteroid__image}>
                <img src={asteroid.isDanger ? dangImg.src : noDangImg.src} />
            </div>
            <div className={classes.asteroid__spec}>
                <p id={classes.name} className={classes.asteroid__spec_item}>
                    {`Астероид ${asteroid.name}`}
                </p>
                <p className={classes.asteroid__spec_item}>
                    {`Ø ${asteroid.dia} м`}
                </p>
                <p className={classes.asteroid__spec_item}>
                    {`↔ ${asteroid.approachDistance?.km} км`}
                </p>
                <p className={classes.asteroid__spec_item}>
                    {asteroid.isDanger
                        ? 'Опасен'
                        : 'Не опасен'}
                </p>
            </div>
            <button className={classes.asteroid__destroy_button}>уничтожить</button>
        </div>
    )
}