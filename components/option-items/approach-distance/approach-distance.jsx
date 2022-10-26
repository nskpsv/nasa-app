import styles from './approach-distance.module.scss';

export default ({ onClick, state }) => {

    const splitter = <p className={styles.splitter}>|</p>;

    return (
        <div className={styles.option}>
            <label className={styles.option__label}>Отображать расстояние:</label>
            <div className={styles.option__values}>
                <p
                    className={`${styles.option__value} ${state === 'km' ? styles.option__value_active : null}`}
                    onClick={() => onClick({ approachDistance: 'km' })}>
                    в километрах
                </p>
                {splitter}
                <p className={`${styles.option__value} ${state === 'lunar' ? styles.option__value_active : null}`}
                    onClick={() => onClick({ approachDistance: 'lunar' })}>
                    в лунных орбитах
                </p>
            </div>
        </div>
    )
}