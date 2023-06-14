import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import TableDropdown from 'components/Dropdowns/TableDropdown.js'
import { useFetch } from 'hooks/useFetch'

export default function CardTable({ color }) {
    const [data, setData] = useState([])
    const [disName, setDisName] = useState('')
    const [wardName, setWardName] = useState('')
    const [records, isPending, error, refreshData] = useFetch(
        `${process.env.REACT_APP_API_URL}/real_estate`
    )
    const [getProvinceCode] = useFetch(`${process.env.REACT_APP_API_URL}/provinces`)
    const [districts, setDistricts] = useState('')
    const [activeDropdown, setActiveDropdown] = useState(null)

    console.log('#Provinces :', getProvinceCode)

    useEffect(() => {
        if (records) {
            console.log(records)
            setData(records.data)
        }
    }, [records])

    const handleGetWard = async(discode, wardcode) => {
        const resWard = await fetch(`${process.env.REACT_APP_API_URL}/wards/${discode}`)
        const jsonWard = await resWard.json()
        const data = jsonWard.data
        const wardName = data.find((ward) => ward.code == wardcode)

        return setWardName(wardName.name)
    }
    const handleGetDis = async(proCode, discode, wardcode) => {
        const resDis = await fetch(`${process.env.REACT_APP_API_URL}/districts/${proCode}`)
        const jsonDis = await resDis.json()
        const data = jsonDis.data
        const disName = data.find((dis) => dis.code == discode)
        handleGetWard(discode, wardcode)
        return setDisName(disName.name)
    }

    const handleGetLocation = (proCode, discode, wardcode, duong, so_nha) => {
        if (getProvinceCode) {
            const proName = getProvinceCode.data.find((pro) => pro.code == proCode)
            if (proName) {
                handleGetDis(proCode, discode, wardcode)
                return `${so_nha},${duong},${wardName},${disName},${proName.name} `
            }
        }
    }

    // DELETE
    const deleteRecord = async(id) => {
        try {
            if (id) {
                const res = await fetch(`${process.env.REACT_APP_API_URL}/real_estate/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })

                if (res.status === 200) {
                    toast.success(' Delete Success !!', {
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

                refreshData()
            } else {
                return
            }
        } catch (error) {
            console.log('#ERR :', error)
        }
    }

    const handleDelete = (id) => {
        deleteRecord(id)
        console.log('#DATA DELETE :', data)
    }

    return ( <
        >
        <
        div className = {
            'relative  flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded ' +
            (color === 'light' ? 'bg-white' : 'bg-lightBlue-900 text-white')
        } >
        <
        div className = 'px-4 py-3 mb-0 border-0 rounded-t ' >
        <
        div className = 'flex flex-wrap items-center' >
        <
        div className = 'relative flex-grow w-full max-w-full px-4' >
        <
        h3 className = {
            'font-semibold text-lg ' +
            (color === 'light' ? 'text-blueGray-700' : 'text-white')
        } >
        Danh sách định giá <
        /h3> <
        /div> <
        /div> <
        /div> <
        div className = 'block w-full overflow-x-auto' > { /* Projects table */ } <
        table className = 'items-center w-full bg-transparent border-collapse' >
        <
        thead >
        <
        tr >
        <
        th className = {
            'px-6 align-middle  border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
            (color === 'light' ?
                'bg-blueGray-50 text-blueGray-500 border-blueGray-100' :
                'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
        } >
        Id <
        /th> <
        th className = {
            'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
            (color === 'light' ?
                'bg-blueGray-50 text-blueGray-500 border-blueGray-100' :
                'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
        } >
        Tổng giá trị <
        /th> <
        th className = {
            'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
            (color === 'light' ?
                'bg-blueGray-50 text-blueGray-500 border-blueGray-100' :
                'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
        } >
        Loại nhà ở <
        /th> <
        th className = {
            'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
            (color === 'light' ?
                'bg-blueGray-50 text-blueGray-500 border-blueGray-100' :
                'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
        } >
        Vị trí <
        /th> <
        th className = {
            'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
            (color === 'light' ?
                'bg-blueGray-50 text-blueGray-500 border-blueGray-100' :
                'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
        } >
        Ngày tạo <
        /th> <
        th className = {
            'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
            (color === 'light' ?
                'bg-blueGray-50 text-blueGray-500 border-blueGray-100' :
                'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
        } >
        < /th> <
        /tr> <
        /thead> <
        tbody > {
            data &&
            data.map(
                (item, index) =>
                item.trang_thai && ( <
                    tr key = { index } > { /* Data columns */ } <
                    td className = 'p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap' >
                    <
                    span className = {
                        'font-bold ' +
                        (color === 'light' ?
                            'text-blueGray-600' :
                            'text-white')
                    } >
                    { item.id } <
                    /span> <
                    /td> <
                    td className = 'p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap' > { item.tong_gia_tri }
                    VNĐ <
                    /td> <
                    td className = 'p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap' > {
                        item.loai_tai_san == 0 ?
                        'Nhà ở' :
                            item.loai_tai_san == 1 ?
                            'Văn phòng' :
                            'Trung tâm thương mại'
                    } <
                    /td> <
                    td className = 'p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap' > {
                        handleGetLocation(
                            item.tinh,
                            item.quan,
                            item.phuong,
                            item.duong,
                            item.so_nha
                        )
                    } <
                    /td> <
                    td className = 'p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap' > {
                        moment
                        .utc(item.createdAt)
                        .utcOffset('+07:00')
                        .format('DD/MM/YYYY HH:mm:ss')
                    } <
                    /td> <
                    td className = 'p-4 px-6 text-xs text-right align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap' >
                    <
                    TableDropdown active = { activeDropdown === index }
                    onToggle = {
                        () =>
                        setActiveDropdown(
                            activeDropdown === index ? null : index
                        )
                    }
                    onDelete = {
                        () => handleDelete(item.id) }
                    record = { item }
                    /> <
                    /td> <
                    /tr>
                )
            )
        } <
        /tbody> <
        /table> <
        /div> <
        /div> <
        />
    )
}

CardTable.defaultProps = {
    color: 'light'
}

CardTable.propTypes = {
    color: PropTypes.oneOf(['light', 'dark'])
}