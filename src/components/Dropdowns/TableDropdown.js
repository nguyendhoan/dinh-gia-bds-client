import React, { useContext } from 'react'
import { createPopper } from '@popperjs/core'
import { Link } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { UserContext } from 'layouts/Admin'

const TableDropdown = ({ active, onToggle, onDelete, record }) => {
  const user = useContext(UserContext)
  // dropdown props
  const btnDropdownRef = React.createRef()
  const popoverDropdownRef = React.createRef()

  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: 'left-start'
    })
    onToggle()
  }

  const closeDropdownPopover = () => {
    onToggle()
  }

  const handleDelete = (e) => {
    e.preventDefault()
    onDelete()
    closeDropdownPopover()
  }

  return (
    <>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
      <ToastContainer />
      <a
        className='px-3 py-1 text-blueGray-500'
        href='#pablo'
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault()
          active ? closeDropdownPopover() : openDropdownPopover()
        }}
      >
        <i className='fas fa-ellipsis-v'></i>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (active ? 'block ' : 'hidden ') +
          'bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48'
        }
      >
        {user === 'admin' && (
          <a
            href='#pablo'
            className={
              'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700'
            }
            onClick={handleDelete}
          >
            Delete
          </a>
        )}

        {record && user === 'admin' && (
          <Link
            className={
              'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700'
            }
            to={`/admin/tables/detail/update/${record.id}`}
          >
            Update
          </Link>
        )}
        {record && (
          <Link
            className={
              'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700'
            }
            to={`/admin/tables/detail/${record.id}`}
          >
            Detail
          </Link>
        )}
      </div>
    </>
  )
}

export default TableDropdown
