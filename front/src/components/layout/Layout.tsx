import React, { FC, ReactNode } from 'react'
import Navbar from './navbar/Navbar'

interface Props {
    children?: JSX.Element
    // any props that come into the component
}

const Layout: FC<Props> = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            {/* <Footer/> */}
        </>
    )
}

export default Layout
