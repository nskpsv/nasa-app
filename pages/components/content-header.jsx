import React from "react";
import ContentFilters from '../components/content-filters';
import classes from '../../styles/modules/content-header.module.scss';

export default () => {
    return (
        <>
            <h1 className={classes.content_header__title}>Ближайшие подлёты</h1>
            <section>
                <ContentFilters />
            </section>
        </>
    )
}