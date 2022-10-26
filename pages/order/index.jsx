import styles from './order.module.scss';
import AsteroidDescription from '../../components/asteroid-description/asteroid-description';
import asteroidImg from '../../resources/images/asteroid.svg';
import { ending } from '../../utils/common';

export default ({ state: { order, asteroidsMap, options, filters } }) => {

    return (
        <main className={styles.order_layout}>
            <section className={styles.order}>
                <div className={styles.scale}>
                    {
                        order.map((_, i) => <img className={styles.scale__item} src={asteroidImg.src} key={i} />)
                    }
                </div>
                <div className={styles.controls}>
                    <p className={styles.controls__count}>
                        У вас в заказе <span className={styles.controls__count_number}>{order.length}</span> астероид{ending(order.length)}
                    </p>
                    <div className={styles.controls__buttons}>
                        <button className={styles.destroy_button}>Отправить заказ</button>
                        <button className={styles.clear_button}>Отчистить заказ</button>
                    </div>
                </div>
            </section>
            <section className={styles.asteroids}>
                {
                    order.length
                        ? order.map(id => <div className={styles.asteroid} key={id}>
                            <AsteroidDescription asteroid={asteroidsMap[id]} options={options} />
                        </div>)
                        : <p className={styles['no-order']}>Тут пока пусто...</p>
                }
            </section>
        </main>
    )
}