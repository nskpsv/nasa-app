import React from "react";
import classes from '../../styles/modules/content-filters.module.scss';

export default () => {
    return (
        <>
            <div className={classes.filter}>
                <label className={classes.filter__label}>Отображать расстояние:
                    <a className={`${classes.filter__value} ${classes.filter__value_active}`}>в километрах</a>
                    {' '}|{' '}
                    <a className={classes.filter__value}>в лунных орбитах</a>
                </label>
            </div>
            <div className={classes.filter}>
                <label className={classes.filter__label}>
                    <input type='checkbox' name='danger'></input>
                    Показать только опасные
                </label>
            </div>
        </>
    )
}