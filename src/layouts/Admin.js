import React, { createContext, useEffect, useState } from 'react'

import { Switch, Route, Redirect } from 'react-router-dom'

// components

import AdminNavbar from 'components/Navbars/AdminNavbar.js'
import Sidebar from 'components/Sidebar/Sidebar.js'
import HeaderStats from 'components/Headers/HeaderStats.js'
import FooterAdmin from 'components/Footers/FooterAdmin.js'

// views

import Dashboard from 'views/admin/Dashboard.js'
import Maps from 'views/admin/Maps.js'
import Settings from 'views/admin/Settings.js'
import Tables from 'views/admin/Tables.js'
import Realestate from 'views/admin/Realestate'
import Details from 'views/admin/Detail'
import Update from 'views/admin/Update'
import UserTable from 'views/admin/UserTable'
import User from 'views/admin/User'
import jwt from 'jsonwebtoken'
import axios from 'axios'
import CardUserDetail from 'components/Cards/CardUserDetail'
import UserDetail from 'views/admin/UserDetail'
import UserUpdate from 'views/admin/UserUpdate'
import { AuthProvider } from 'context/AuthContext'
import { withPageProtected as Admin } from '../context/withPageProtected'

export const UserContext = createContext()

export default Admin(() => {
    const [userName, setUserName] = useState()

    const handleGetUser = async() => {
        try {
            const access_token = localStorage.getItem('accessToken')
            const decoded = jwt.decode(access_token)
            if (decoded) {
                try {
                    const response = await axios.get(
                        `${process.env.REACT_APP_API_URL}/users/${decoded.sub}`
                    )
                    const data = response.data.data

                    setUserName(data.username)
                } catch (error) {
                    console.log('#ERR :', error)
                }
            }
        } catch (error) {
            console.log('#ERR:', error)
        }
    }
    useEffect(() => {
        handleGetUser()
    }, [])

    console.log('#TEST :', userName)

    return ( <
        >
        <
        UserContext.Provider value = { userName } >
        <
        Sidebar / >
        <
        div className = 'relative md:ml-64 bg-blueGray-100' >
        <
        AdminNavbar / > { /* Header */ } <
        HeaderStats / >
        <
        div className = 'w-full px-4 mx-auto -m-24 md:px-10' > {
            userName === 'admin' ? ( <
                Switch >
                <
                Route path = '/admin/realestate'
                exact component = { Realestate }
                /> <
                Route path = '/admin/tables'
                exact component = { Tables }
                /> <
                Route exact path = '/admin/tables/detail/:id'
                component = { Details }
                />

                <
                Route path = '/admin/tables/detail/update/:id'
                component = { Update }
                />

                <
                Route path = '/admin/users/table'
                exact component = { UserTable }
                />

                <
                Route path = '/admin/users/'
                exact component = { User }
                /> <
                Route exact path = '/admin/users/table/detail/:id'
                component = { UserDetail }
                /> <
                Route exact path = '/admin/users/table/update/:id'
                component = { UserUpdate }
                /> <
                /Switch>
            ) : ( <
                Switch >
                <
                Route path = '/admin/realestate'
                exact component = { Realestate }
                /> <
                Route path = '/admin/tables'
                exact component = { Tables }
                /> <
                Route exact path = '/admin/tables/detail/:id'
                component = { Details }
                /> <
                Route path = '/admin/tables/detail/update/:id'
                component = { Update }
                /> <
                Redirect to = "/admin" / >
                <
                /Switch>
            )
        }

        <
        FooterAdmin / >
        <
        /div> <
        /div> <
        /UserContext.Provider> <
        />
    )
})