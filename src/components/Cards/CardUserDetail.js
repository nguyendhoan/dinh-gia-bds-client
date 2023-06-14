import { useFetch } from 'hooks/useFetch'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const CardUserDetail = (user) => {
    const [getUser, setGetUser] = useState()
    console.log(user)
    const { id } = useParams()
    console.log(id)

    const userInfor = useFetch(`${process.env.REACT_APP_API_URL}/users/${id}`)

    const getUserInfor = async() => {
        const data = await userInfor
        if (data[0]) {
            const singleUser = data[0].data
            setGetUser(singleUser)
        }
    }

    useEffect(() => {
        getUserInfor()
    })

    console.log(getUser)
    return ( <
        >
        <
        div className = 'relative flex flex-col w-full min-w-0 mb-6 break-words border-0 rounded-lg shadow-lg bg-blueGray-100' >
        <
        div className = 'px-6 py-6 mb-0 bg-white rounded-t' >
        <
        div className = 'flex justify-between text-center' >
        <
        h6 className = 'text-xl font-bold text-blueGray-700' >
        Thông tin người dùng <
        /h6> <
        button className = 'px-4 py-2 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-lightBlue-500 active:bg-lightBlue-600 hover:shadow-md focus:outline-none'
        type = 'button' >
        Cập nhật <
        /button> <
        /div> <
        /div> <
        div className = 'flex-auto px-4 py-10 pt-0 lg:px-10' >
        <
        form >
        <
        h6 className = 'mt-3 mb-6 text-sm font-bold uppercase text-blueGray-400' >
        Chi tiết <
        /h6> <
        div className = 'flex flex-wrap' >
        <
        div className = 'w-full px-4 lg:w-6/12' >
        <
        div className = 'relative w-full mb-3' >
        <
        label className = 'block mb-2 text-xs font-bold uppercase text-blueGray-600'
        htmlFor = 'grid-password' >
        Tên người dùng <
        /label>

        <
        input type = 'text'
        className = 'w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring'
        defaultValue = { getUser && getUser.username }
        disabled /
        >
        <
        /div> <
        /div> <
        div className = 'w-full px-4 lg:w-6/12' >
        <
        div className = 'relative w-full mb-3' >
        <
        label className = 'block mb-2 text-xs font-bold uppercase text-blueGray-600'
        htmlFor = 'grid-password' >
        Ngày tạo <
        /label> <
        input type = 'email'
        className = 'w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring'
        defaultValue = { getUser && getUser.createdAt }
        disabled /
        >
        <
        /div> <
        /div> <
        div className = 'w-full px-4 lg:w-6/12' >
        <
        div className = 'relative w-full mb-3' >
        <
        label className = 'block mb-2 text-xs font-bold uppercase text-blueGray-600'
        htmlFor = 'grid-password' >
        Chức vụ <
        /label> <
        input className = 'w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring'
        defaultValue = {
            getUser && (getUser.role == '0' ? 'admin' : 'member')
        }
        disabled /
        >
        <
        /div> <
        /div> <
        div className = 'w-full px-4 lg:w-6/12' >
        <
        div className = 'relative w-full mb-3' >
        <
        label className = 'block mb-2 text-xs font-bold uppercase text-blueGray-600'
        htmlFor = 'grid-password' >
        Last Name <
        /label> <
        input type = 'text'
        className = 'w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring'
        defaultValue = 'Jesse' /
        >
        <
        /div> <
        /div> <
        /div>

        <
        hr className = 'mt-6 border-b-1 border-blueGray-300' / >
        <
        /form> <
        /div> <
        /div> <
        />
    )
}

export default CardUserDetail