import React from "react"
import styles from './content-layout.module.scss';
import ContentHeader from "../../components/content-header/content-header"

export default ({ children, filterProps, optionProps }) => {
    
    return (
        <section className={styles.wrapper}>
            <ContentHeader filterProps={filterProps} optionProps={optionProps} />
            <>
                {children}
            </>
        </section>
    )
}