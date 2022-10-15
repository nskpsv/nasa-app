import styles from './approach-distance.module.scss';

export default ({ onClick, state }) => {

    return (
        <div className={styles.option}>
            <label className={styles.option__label}>Отображать расстояние:</label>
            <div className={styles.option__values}>
                <a
                    className={`${styles.option__value} ${state === 'km' ? styles.option__value_active : null}`}
                    onClick={() => onClick({ approachDistance: 'km' })}>
                    в километрах
                </a>
                {' '}|{' '}
                <a className={`${styles.option__value} ${state === 'lunar' ? styles.option__value_active : null}`}
                    onClick={() => onClick({ approachDistance: 'lunar' })}>
                    в лунных орбитах
                </a>
            </div>
        </div>
    )
}