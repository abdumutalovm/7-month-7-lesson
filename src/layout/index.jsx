import React from 'react'

function Layout({ children }) {
    return (
        <div>
            <header>Header Section</header>
            {children}
        </div>
    )
}

export default Layout