import classes from './is-danger.module.scss';

export default () => {

    return (
        <div className={classes.filter}>
                <input
                    className={classes.filter__value}
                    id='danger'
                    type='checkbox'
                    onClick={(e) => onFilterClick({ isDangerous: e.target.checked })}>
                </input>
                <label className={classes.filter__label} for='danger'>
                Показать только опасные
                </label>
        </div>
    )
}