import classes from './measure-distance.module.scss';

export default ({ onClick, state }) => {

    return (
        <div className={classes.filter}>
            <label className={classes.filter__label}>Отображать расстояние:</label>
            <div className={classes.filter__values}>
                <a
                    className={`${classes.filter__value} ${state === 'км' ? classes.filter__value_active : null}`}
                    onClick={() => onClick({ measurDistance: 'км' })}>
                    в километрах
                </a>
                {' '}|{' '}
                <a className={`${classes.filter__value} ${state === 'л.о.' ? classes.filter__value_active : null}`}
                    onClick={() => onClick({ measurDistance: 'л.о.' })}>
                    в лунных орбитах
                </a>
            </div>
        </div>
    )
}