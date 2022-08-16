import React from "react"
import classes from './content-layout.module.scss';
import ContentHeader from "../../components/content-header/content-header"

export default ({ children }) => {
    return (
        <section className={classes.wrapper}>
            <ContentHeader />
            <>
                {children}
            </>
        </section>
    )
}