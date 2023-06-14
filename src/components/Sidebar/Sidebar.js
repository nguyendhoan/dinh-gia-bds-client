/*eslint-disable*/
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import NotificationDropdown from 'components/Dropdowns/NotificationDropdown.js'
import UserDropdown from 'components/Dropdowns/UserDropdown.js'
import RealEstateDropdown from 'components/Dropdowns/RealEstateDropdown'
import UsersAdminDropdown from 'components/Dropdowns/UsersAdminDropdown'
import { UserContext } from 'layouts/Admin'

const MAIN_TITLE = process.env.REACT_APP_MAIN_TITLE

export default function Sidebar() {
  console.log(MAIN_TITLE)
  const [collapseShow, setCollapseShow] = React.useState('hidden')
  const user = useContext(UserContext)

  const [isOpen, setIsOpen] = useState(true)
  const [userIsOpen, setUserIsOpen] = useState(true)
  const handleOpen = () => {
    setIsOpen((prev) => !prev)
  }
  const handleUserOpen = () => {
    setUserIsOpen((prev) => !prev)
  }
  return (
    <>
      <nav className='relative z-10 flex flex-wrap items-center justify-between px-6 py-4 bg-white shadow-xl md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden md:w-64'>
        <div className='flex flex-wrap items-center justify-between w-full px-0 mx-auto md:flex-col md:items-stretch md:min-h-full md:flex-nowrap'>
          {/* Toggler */}
          <button
            className='px-3 py-1 text-xl leading-none text-black bg-transparent border border-transparent border-solid rounded opacity-50 cursor-pointer md:hidden'
            type='button'
            onClick={() => setCollapseShow('bg-white m-2 py-3 px-6')}
          >
            <i className='fas fa-bars'></i>
          </button>
          {/* Brand */}
          <Link
            className='flex items-center w-full h-8 p-4 px-0 mr-0 text-sm font-bold text-left uppercase justify-items-center md:block md:pb-2 text-blueGray-600 whitespace-nowrap'
            to='/admin'
          >
            <h4 className='text-xl text-center'>{MAIN_TITLE}</h4>
          </Link>
          {/* User */}
          <ul className='flex flex-wrap items-center list-none md:hidden'>
            <li className='relative inline-block'>
              <NotificationDropdown />
            </li>
            <li className='relative inline-block'>
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              'md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded ' +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className='block pb-4 mb-4 border-b border-solid md:min-w-full md:hidden border-blueGray-200'>
              <div className='flex flex-wrap'>
                <div className='w-6/12'>
                  <Link
                    className='inline-block p-4 px-0 mr-0 text-sm font-bold text-left uppercase md:block md:pb-2 text-blueGray-600 whitespace-nowrap'
                    to='/'
                  >
                    Notus React
                  </Link>
                </div>
                <div className='flex justify-end w-6/12'>
                  <button
                    type='button'
                    className='px-3 py-1 text-xl leading-none text-black bg-transparent border border-transparent border-solid rounded opacity-50 cursor-pointer md:hidden'
                    onClick={() => setCollapseShow('hidden')}
                  >
                    <i className='fas fa-times'></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className='mt-6 mb-4 md:hidden'>
              <div className='pt-0 mb-3'>
                <input
                  type='text'
                  placeholder='Search'
                  className='w-full h-12 px-3 py-2 text-base font-normal leading-snug bg-white border border-0 border-solid rounded shadow-none outline-none border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 focus:outline-none'
                />
              </div>
            </form>

            {/* Divider */}
            <hr className='my-4 md:min-w-full' />
            {/* Heading */}
            {/* Navigation */}
            <ul className='flex flex-col list-none md:flex-col md:min-w-full'>
              <li
                className='flex items-center justify-around w-full cursor-pointer '
                onClick={handleOpen}
              >
                <i className={'fas fa-layer-group mr-2'}></i>{' '}
                <p className='font-semibold '>Thông tin khảo sát</p>
                {isOpen ? (
                  <i
                    style={{ paddingLeft: '30px' }}
                    className='pl-4 fas fa-chevron-up'
                  ></i>
                ) : (
                  <i
                    style={{ paddingLeft: '30px' }}
                    className='pl-4 fas fa-chevron-down'
                  ></i>
                )}
              </li>
              {isOpen && <RealEstateDropdown />}
              {user === 'admin' && (
                <li
                  className='flex items-center justify-around w-full mt-6 cursor-pointer '
                  onClick={handleUserOpen}
                >
                  <i className={'fas fa-users mr-2  '}></i>{' '}
                  <p className='font-semibold'>Quản lý người dùng</p>
                  {userIsOpen ? (
                    <i className='pl-4 fas fa-chevron-up'></i>
                  ) : (
                    <i className='pl-4 fas fa-chevron-down'></i>
                  )}
                </li>
              )}
              {userIsOpen && user === 'admin' && <UsersAdminDropdown />}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
