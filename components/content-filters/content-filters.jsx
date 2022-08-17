import React from "react";
import classes from './content-filters.module.scss';
import IsDanger from '../filters/is-danger/is-danger';
import MeasureDistance from '../filters/measure-distance/measure-distance';

export default ({ filterProps: [filters, setFilters] }) => {

    const onFilterClick = (filter) => {
        setFilters(Object.assign({}, filters, filter))
    }

    return (
        <section className={classes.filters_list}>
            <MeasureDistance onClick={onFilterClick} state={filters.measurDistance}/>
            <IsDanger onClick={onFilterClick} state={filters.isDanger}/>
        </section>
    )
}