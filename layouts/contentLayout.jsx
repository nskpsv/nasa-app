import React from "react"
import ContentHeader from "../pages/components/content-header"

export default ({ children }) => {
    return (
        <>
            <header>
                <ContentHeader />
            </header>
            <>
                {children}
            </>
        </>
    )
}