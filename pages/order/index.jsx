import styles from './order.module.scss';
import AsteroidDescription from '../../components/asteroid-description/asteroid-description';
import asteroidImg from '../../resources/images/asteroid.svg';
import { ending } from '../../utils/common';
import { clearOrder } from '../../state/state';
import { useRef } from 'react';

export default ({ state: { order, asteroidsMap, options } }) => {

    const progress = useRef(null);

    const orderTheBruceWillisBrigade = () => {

        new Promise(resolve => {
            progress.current.style.width = '100%';

            setTimeout(() => { resolve() }, order.length * 1100);
        }).then(() => clearOrder());
    };

    return (
        <main className={styles.order_layout}>
            <section className={styles.order}>
                {
                    order &&
                    <div className={styles.scale}>
                        <div className={styles.scale__progress} style={{ transitionDuration: `${order.length}s` }} ref={progress}></div>
                        {
                            order.map((_, i) => <img className={styles.scale__item} src={asteroidImg.src} key={i} />)
                        }
                    </div>
                }
                <div className={styles.controls}>
                    <p className={styles.controls__count}>
                        У вас в заказе <span className={styles.controls__count_number}>{order ? order.length : 0}</span> астероид{order ? ending(order.length) : 'ов'}
                    </p>
                    <div className={styles.controls__buttons}>
                        <button className={styles.destroy_button} disabled={!order} onClick={orderTheBruceWillisBrigade}>Отправить заказ</button>
                        <button className={styles.clear_button} disabled={!order} onClick={clearOrder}>Отчистить заказ</button>
                    </div>
                </div>
            </section>
            <section className={styles.asteroids}>
                {
                    order &&
                    order.map(id => <div className={styles.asteroid} key={id}>
                        <AsteroidDescription asteroid={asteroidsMap[id]} options={options} />
                    </div>)
                }
            </section>
        </main>
    )
}