import axios from 'axios'
import React, { useState } from 'react'
import { AddUserValidator } from 'validator'
import { ToastContainer, toast } from 'react-toastify'

// components

export default function CardUser() {
    const [userName, setUserName] = useState()
    const [passWord, setPassWord] = useState()
    const [rePassWord, setRePassWord] = useState()
    const [role, setRole] = useState()
    const [errMess, setErrMess] = useState()

    const handleUserNameChange = (e) => {
        e.preventDefault()
        setUserName(e.target.value)
    }
    const handlePassWordChange = (e) => {
        e.preventDefault()
        setPassWord(e.target.value)
    }
    const handleRePassWordChange = (e) => {
        e.preventDefault()
        setRePassWord(e.target.value)
    }
    const handleRoleChange = (e) => {
        setRole(e.target.value)
    }
    const handleSubmit = async() => {
        if (passWord !== rePassWord) {
            toast.error(' Mật khẩu không giống !!!', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light'
            })
            return
        } else {
            try {
                if (userName && passWord && rePassWord) {
                    const response = await axios.post(`${process.env.REACT_APP_API_URL}/users`, {
                        username: userName,
                        password: passWord,
                        role: role
                    })

                    if (response) {
                        const res = response.data
                        const status = res.statusCode
                        if (status) {
                            if (status === 200) {
                                toast.success(' Thêm thành công !!!', {
                                    position: 'top-right',
                                    autoClose: 5000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: 'light'
                                })
                            } else {
                                toast.error(' Thêm không thành công !!!', {
                                    position: 'top-right',
                                    autoClose: 5000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: 'light'
                                })
                            }
                        }
                    }

                    console.log('#RES:', response)
                }
            } catch (error) {
                console.log('#ERR:', error)
            }
        }
    }
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
        Thêm mới người dùng <
        /h6> <
        button className = 'px-4 py-2 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-lightBlue-500 active:bg-lightBlue-600 hover:shadow-md focus:outline-none'
        type = 'button'
        onClick = { handleSubmit } >
        Thêm <
        /button> <
        /div> <
        /div> <
        div className = 'flex-auto px-4 py-10 pt-0 lg:px-10' >
        <
        form >
        <
        h6 className = 'mt-3 mb-6 text-sm font-bold uppercase text-blueGray-400' >
        Thông tin người dùng <
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
        /label> <
        input type = 'text'
        className = 'w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring'
        value = { userName }
        onChange = { handleUserNameChange }
        /> <
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
        select onChange = { handleRoleChange }
        value = { role }
        className = 'w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring' >
        <
        option value = '' > Chọn chức vụ < /option> <
        option value = '0' > admin < /option> <
        option value = '1' > member < /option> <
        /select> <
        /div> <
        /div> <
        div className = 'w-full px-4 lg:w-6/12' >
        <
        div className = 'relative w-full mb-3' >
        <
        label className = 'block mb-2 text-xs font-bold uppercase text-blueGray-600'
        htmlFor = 'grid-password' >
        Mật khẩu <
        /label> <
        input type = 'password'
        className = 'w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring'
        value = { passWord }
        onChange = { handlePassWordChange }
        /> <
        /div> <
        /div> <
        div className = 'w-full px-4 lg:w-6/12' >
        <
        div className = 'relative w-full mb-3' >
        <
        label className = 'block mb-2 text-xs font-bold uppercase text-blueGray-600'
        htmlFor = 'grid-password' >
        Nhập lại mật khẩu <
        /label> <
        input type = 'password'
        className = 'w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring'
        value = { rePassWord }
        onChange = { handleRePassWordChange }
        /> <
        /div> <
        /div> <
        /div>

        <
        hr className = 'mt-6 border-b-1 border-blueGray-300' / >
        <
        /form> <
        /div> <
        /div> <
        ToastContainer / >
        <
        />
    )
}