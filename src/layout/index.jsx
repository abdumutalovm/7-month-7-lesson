import React from 'react'
import Header from '../componets/Header'

function Layout({ children }) {
    return (
        <div>
            <Header></Header>
            {children}
        </div>
    )
}

export default Layout