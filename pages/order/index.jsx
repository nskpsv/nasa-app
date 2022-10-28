import styles from './order.module.scss';
import AsteroidDescription from '../../components/asteroid-description/asteroid-description';
import asteroidImg from '../../resources/images/asteroid.svg';
import { ending } from '../../utils/common';
import { clearOrder } from '../../state/state';
import { useRef } from 'react';
import bruce from '../../resources/images/bruce.png';
import rocket from '../../resources/images/roсket.png';

export default ({ state: { order, asteroidsMap, options } }) => {

    const progress = useRef(null);
    const brigade = useRef(null);

    const orderTheBruceWillisBrigade = () => {

        progress.current.style.width = '100%';
        brigade.current.style.display = 'block';

        setTimeout(() => { clearOrder(); }, order.length * 1100);
    };

    return (
        <main className={styles.order_layout}>
            <section className={styles.order}>
                {
                    order &&
                    <div className={styles.scale}>
                        <div className={styles.scale__progress} style={{ transitionDuration: `${order.length}s` }} ref={progress}>
                            <div className={styles.bruce_brigade } ref={brigade}>
                                <div className={styles.rocket} style={{ background: `url(${rocket.src}) center / contain no-repeat` }}></div>
                                <div className={styles.bruce} style={{ background: `url(${bruce.src}) left 3px top 7px / contain no-repeat` }}></div>
                            </div>
                        </div>
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