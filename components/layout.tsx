import Navbar from './navbar'
import Footer from './footer'
import React from 'react'


interface Props {
    children: React.ReactNode
}

const Layout: React.FunctionComponent<Props> = (props:Props) => {
    return <>
        <Navbar/>
                {props.children}
        <Footer/>

    </>
}

export default Layout;