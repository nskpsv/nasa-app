import React from 'react';
import styles from './asteroid-list-item.module.scss';
import dangImg from './assets/dangerous.svg';
import noDangImg from './assets/non-dangerous.svg'

export default ({ asteroid, option, onAddToOrder }) => {

    return (
        <div className={styles.asteroid} onClick={() => {console.log(asteroid);}}>
            <p className={styles.asteroid__approach_date}>
                {asteroid.approachDate}
            </p>
            <div className={styles.asteroid__image}>
                <img src={asteroid.isDanger ? dangImg.src : noDangImg.src} />
            </div>
            <div className={styles.asteroid__spec}>
                <p id={styles.name} className={styles.asteroid__spec_item}>
                    {`Астероид ${asteroid.name}`}
                </p>
                <p className={styles.asteroid__spec_item}>
                    {`Ø ${asteroid.dia} м`}
                </p>
                <p className={styles.asteroid__spec_item}>
                    {`↔ ${option.approachDistance === 'km' ? asteroid.approachDistance.km : asteroid.approachDistance.lunar}`}
                </p>
                <p className={styles.asteroid__spec_item}>
                    {asteroid.isDanger
                        ? 'Опасен'
                        : 'Не опасен'}
                </p>
            </div>
            <button className={styles.asteroid__destroy_button} onClick={() => onAddToOrder({[asteroid.id]: asteroid})}>уничтожить</button>
        </div>
    )
}