import classes from './approach-distance.module.scss';

export default ({ onClick, state }) => {

    return (
        <div className={classes.option}>
            <label className={classes.option__label}>Отображать расстояние:</label>
            <div className={classes.option__values}>
                <a
                    className={`${classes.option__value} ${state === 'km' ? classes.option__value_active : null}`}
                    onClick={() => onClick({ approachDistance: 'km' })}>
                    в километрах
                </a>
                {' '}|{' '}
                <a className={`${classes.option__value} ${state === 'lunar' ? classes.option__value_active : null}`}
                    onClick={() => onClick({ approachDistance: 'lunar' })}>
                    в лунных орбитах
                </a>
            </div>
        </div>
    )
}