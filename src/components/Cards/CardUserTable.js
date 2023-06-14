import React, { useState, useEffect } from 'react'

import axios from 'axios'
import moment from 'moment'
import PropTypes from 'prop-types'

import TableUserDropdown from 'components/Dropdowns/TableUserDropdown'
import { toast } from 'react-toastify'
const CardUserTable = ({ color }) => {
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [allUsers, setAllUsers] = useState()

  const handleGetUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3002/users')
      const { data } = response.data
      setAllUsers(data)
    } catch (error) {
      console.log('#ERR :', error)
    }
  }
  useEffect(() => {
    handleGetUsers()
  }, [allUsers])

  // const handleDelete = (user) => {
  //   console.log('#USER : ', user)
  // }

  const handleDeleteUser = async (id) => {
    try {
      if (id) {
        const response = await axios.delete(`http://localhost:3002/users/${id}`)
        console.log('#RES-DEL :', response)
        if (response.status === 200) {
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
      }
    } catch (error) {
      console.log('#ERR:', error)
    }
  }
  return (
    <>
      <div
        className={
          'relative  flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded ' +
          (color === 'light' ? 'bg-white' : 'bg-lightBlue-900 text-white')
        }
      >
        <div className='px-4 py-3 mb-0 border-0 rounded-t '>
          <div className='flex flex-wrap items-center'>
            <div className='relative flex-grow w-full max-w-full px-4'>
              <h3
                className={
                  'font-semibold text-lg ' +
                  (color === 'light' ? 'text-blueGray-700' : 'text-white')
                }
              >
                Danh sách người dùng
              </h3>
            </div>
          </div>
        </div>
        <div className='block w-full overflow-x-auto'>
          {/* Projects table */}
          <table className='items-center w-full bg-transparent border-collapse'>
            <thead>
              <tr>
                <th
                  className={
                    'px-6 align-middle  border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                    (color === 'light'
                      ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                      : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
                  }
                >
                  Id
                </th>
                <th
                  className={
                    'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                    (color === 'light'
                      ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                      : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
                  }
                >
                  Username
                </th>
                <th
                  className={
                    'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                    (color === 'light'
                      ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                      : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
                  }
                ></th>
                <th
                  className={
                    'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                    (color === 'light'
                      ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                      : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
                  }
                >
                  Chức vụ
                </th>
                <th
                  className={
                    'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                    (color === 'light'
                      ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                      : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
                  }
                >
                  Ngày tạo
                </th>
                <th
                  className={
                    'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                    (color === 'light'
                      ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                      : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
                  }
                ></th>
              </tr>
            </thead>
            <tbody>
              {allUsers &&
                allUsers.map(
                  (item, index) =>
                    item.status && (
                      <tr>
                        {/* Data columns */}
                        <td className='p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap'>
                          <span
                            className={
                              'font-bold ' +
                              (color === 'light'
                                ? 'text-blueGray-600'
                                : 'text-white')
                            }
                          >
                            {item.id}
                          </span>
                        </td>
                        <td className='p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap'>
                          {item.username}
                        </td>
                        <td className='p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap'></td>

                        <td className='p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap'>
                          {item.role == 0 ? 'admin' : 'member'}
                        </td>

                        <td className='p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap'>
                          {moment
                            .utc(item.createdAt)
                            .utcOffset('+07:00')
                            .format('DD/MM/YYYY HH:mm:ss')}
                        </td>
                        <td className='p-4 px-6 text-xs text-right align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap'>
                          <TableUserDropdown
                            active={activeDropdown === index}
                            onToggle={() =>
                              setActiveDropdown(
                                activeDropdown === index ? null : index
                              )
                            }
                            onDelete={() => handleDeleteUser(item.id)}
                            user={item}
                          />
                        </td>
                      </tr>
                    )
                )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default CardUserTable

CardUserTable.defaultProps = {
  color: 'light'
}

CardUserTable.propTypes = {
  color: PropTypes.oneOf(['light', 'dark'])
}
