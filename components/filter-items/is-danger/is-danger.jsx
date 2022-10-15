import styles from './is-danger.module.scss';

export default ({ state, onClick }) => {

    return (
        <div className={styles.filter}>
                <input
                    className={styles.filter__value}
                    id='danger'
                    type='checkbox'
                    checked={state}
                    onChange={(e) => onClick({ isDanger: !state })}>
                </input>
                <label className={styles.filter__label} htmlFor='danger'>
                Показать только опасные
                </label>
        </div>
    )
}