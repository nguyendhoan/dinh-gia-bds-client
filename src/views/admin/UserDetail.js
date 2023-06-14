import CardUserDetail from 'components/Cards/CardUserDetail'
import { useFetch } from 'hooks/useFetch'
import React, { useState, useEffect } from 'react'

const UserDetail = () => {
        const [data, setData] = useState()
        const [users] = useFetch(`${process.env.REACT_APP_API_URL}/users`)
            //   console.log('#ALLUSERS## :', users)

        const getUsers = async() => {
            const data = await users
            if (data) {
                const allUser = data.data
                setData(allUser)
            }
        }

        {
            data && console.log('#DATA :', data)
        }

        useEffect(() => {
            getUsers()
        })

        return < > {
            data && < CardUserDetail user = { data }
            />}</ >
        }

        export default UserDetail