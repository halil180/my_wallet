import React from 'react'
import { Outlet } from 'react-router-dom'
import NavigationBar from './NavigationBar'

function Root() {
    return (
        <>
            <NavigationBar />
            <Outlet />
        </>
    )
}

export default Root