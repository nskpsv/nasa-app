import React from "react";
import IsDangerFilter from '../filter-items/is-danger/is-danger';
import ApproachOption from '../option-items/approach-distance/approach-distance';
import styles from './content-header.module.scss';

export default ({ filterProps, optionProps }) => {

    const [filters, setFilters] = filterProps;
    const [options, setOptions] = optionProps;

    const onFilterClick = (filter) => {
        setFilters(Object.assign({}, filters, filter))
    };

    const onOptionClick = (option) => {
        setOptions(Object.assign({}, options, option))
    }

    return (
        <header className={styles.content_header}>
            <h1 className={styles.content_header__title}>Ближайшие подлёты</h1>
            <div className={styles.content_header__display_settings}>
                <ApproachOption onClick={onOptionClick} state={options.approachDistance} />
                <IsDangerFilter onClick={onFilterClick} state={filters.isDanger} />
            </div>
        </header>
    )
}