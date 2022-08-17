import React from "react"
import classes from './content-layout.module.scss';
import ContentHeader from "../../components/content-header/content-header"

export default ({ children, filterProps }) => {
    
    return (
        <section className={classes.wrapper}>
            <ContentHeader filterProps={filterProps} />
            <>
                {children}
            </>
        </section>
    )
}