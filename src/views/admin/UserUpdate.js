import CardUserUpdate from 'components/Cards/CardUserUpdate'
import { useFetch } from 'hooks/useFetch'
import React, { useEffect, useState } from 'react'

const UserUpdate = () => {
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
            data && < CardUserUpdate user = { data }
            />}</ >
        }

        export default UserUpdate