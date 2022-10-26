import styles from './asteroid-description.module.scss';
import dangImg from '../../resources/images/dangerous-asteroid.svg';
import notDangImg from '../../resources/images/non-dangerous-asteroid.svg';
import { addToOrder, deleteFromOrder } from '../../state/state';

const AsteroidDescription = ({ asteroid, options }) => {

    const onDestroy = (e) => {
        e.stopPropagation();
        addToOrder(asteroid.id);
    };

    const onCancel = (e) => {
        e.stopPropagation();
        deleteFromOrder(asteroid.id);
    }

    return (
        <div className={styles.asteroid}>
            <section className={styles.approach_date_section}>
                <p className={styles.approach_date}>
                    {asteroid.approachDate}
                </p>
            </section>
            <section className={styles.meta_section}>
                <div className={styles.meta__image}>
                    <img src={asteroid.isDanger ? dangImg.src : notDangImg.src} />
                </div>
                <div className={styles.meta__specs}>
                    <p id={styles.name} className={styles.meta__spec_item}>
                        {`Астероид ${asteroid.name}`}
                    </p>
                    <p className={styles.meta__spec_item}>
                        {`Ø ${asteroid.dia} м`}
                    </p>
                    <p className={styles.meta__spec_item}>
                        {`↔ ${options.approachDistance === 'km' ? asteroid.approachDistance.km : asteroid.approachDistance.lunar}`}
                    </p>
                    <p className={styles.meta__spec_item}>
                        {asteroid.isDanger
                            ? 'Опасен'
                            : 'Не опасен'}
                    </p>
                </div>
            </section>
            <section className={styles.buttons}>
                {
                    asteroid.isOrdered
                    ? <button className={styles.buttons__cancel} onClick={onCancel}>отменить</button>
                    : <button className={styles.buttons__destroy} onClick={onDestroy}>уничтожить</button>
                }
                
            </section>
        </div>
    )
};

export default AsteroidDescription;