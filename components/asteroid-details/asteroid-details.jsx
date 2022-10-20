import styles from './asteroid-details.module.scss';
import { useEffect } from 'react';
import { getAsteroidsData } from '../../services/asteroids';
import { addAsteroidInfo } from '../../utils/asteroids';

const AsteroidDetails = ({ asteroid, onClick, children, onAddAsteroidInfo, options }) => {

    useEffect(() => {
        if (!asteroid.listOfApproaches) {
            getAsteroidsData(asteroid.selfLink)
                .then((data => {
                    onAddAsteroidInfo(addAsteroidInfo(asteroid, data));
                }))
        }
    }, [])
    console.log(asteroid);
    return (
        <div className={styles.container}>
            <div className={styles.container__background} onClick={onClick}></div>
            <div className={styles.content}>
                <div className={styles.close_button} onClick={onClick}>
                    <div className={styles.close_button__line1}></div>
                    <div className={styles.close_button__line2}></div>
                </div>
                {children}
                <h4 className={styles.approach_list_header}>Список всех сближений</h4>
                <div className={styles.approach_list}>
                    {
                        asteroid.listOfApproaches
                            ? asteroid.listOfApproaches.map((date, i) => {
                                return (
                                    <div className={ asteroid.isDanger ? styles.approach_list__danger_item : styles.approach_list__item} key={i}>
                                        <div className={styles.item__specs}>
                                            <p className={styles.item__specs_title}>
                                                Дата сближения:
                                            </p>
                                            <p className={styles.item__specs_data}>
                                                {date.approachDate}
                                            </p>
                                        </div>
                                        <div className={styles.item__specs}>
                                            <p className={styles.item__specs_title}>
                                                Время максимального сближения:
                                            </p>
                                            <p className={styles.item__specs_data}>
                                                {date.approachTime}
                                            </p>
                                        </div>
                                        <div className={styles.item__specs}>
                                            <p className={styles.item__specs_title}>
                                                Скорость относительно Земли:
                                            </p>
                                            <p className={styles.item__specs_data}>
                                                {date.velocity}
                                            </p>
                                        </div>
                                        <div className={styles.item__specs}>
                                            <p className={styles.item__specs_title}>
                                                Минимальная дистанция:
                                            </p>
                                            <p className={styles.item__specs_data}>
                                                {`${options.approachDistance === 'km' ? date.approachDistance.km : date.approachDistance.lunar}`}
                                            </p>
                                        </div>
                                        <div className={styles.item__specs}>
                                            <p className={styles.item__specs_title}>
                                                Орбитальное тело:
                                            </p>
                                            <p className={styles.item__specs_data}>
                                                {date.orbitingBody}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                            : <p className={styles.approach_list__preloader}>Загрузка...</p>
                    }
                </div>
            </div>
        </div>

    )
}

export default AsteroidDetails;