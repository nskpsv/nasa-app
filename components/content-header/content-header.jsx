import React from "react";
import IsDangerFilter from '../filter-items/is-danger/is-danger';
import ApproachOption from '../option-items/approach-distance/approach-distance';
import styles from './content-header.module.scss';
import { updateFilters, updateOptions } from "../../state/state";

export default ({ filters, options }) => {
    
    const onFilterClick = (filter) => {

        updateFilters({...filters, ...filter})
    };

    const onOptionClick = (option) => {
        updateOptions({...options, ...option})
    }

    return (
        <>
        <div className={styles.content_header_pad}></div>
        <header className={styles.content_header}>
            <h1 className={styles.content_header__title}>Ближайшие подлёты</h1>
            <div className={styles.splitter}></div>
            <div className={styles.content_header__display_settings}>
                <ApproachOption onClick={onOptionClick} state={options.approachDistance} />
                <IsDangerFilter onClick={onFilterClick} state={filters.isDanger} />
            </div>
        </header>
        </>
    )
}