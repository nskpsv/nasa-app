import React from "react";
import ContentFilters from '../content-filters/content-filters';
import classes from './content-header.module.scss';

export default ({ filterProps }) => {
    return (
        <header className={classes.content_header}>
            <h1 className={classes.content_header__title}>Ближайшие подлёты</h1>
                <ContentFilters filterProps={filterProps} />
        </header>
    )
}