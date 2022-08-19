import classes from './is-danger.module.scss';

export default ({ state, onClick }) => {

    return (
        <div className={classes.filter}>
                <input
                    className={classes.filter__value}
                    id='danger'
                    type='checkbox'
                    checked={state}
                    onChange={(e) => onClick({ isDanger: !state })}>
                </input>
                <label className={classes.filter__label} htmlFor='danger'>
                Показать только опасные
                </label>
        </div>
    )
}