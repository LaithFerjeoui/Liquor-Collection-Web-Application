import React from 'react'
import Header from './Header'

const Layout = ({ children }) => {
    return (
        <div className='overflow-x-clip'>
            <Header />
            {children}
        </div>
    )
}

export default Layout