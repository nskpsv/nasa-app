import MainHeader from '../pages/components/main-header'
import React from "react"

export default ({ children }) => {
   return (
      <React.Fragment>
         <MainHeader />
         <React.Fragment>
            {children}
         </React.Fragment>
      </React.Fragment>
   )
}