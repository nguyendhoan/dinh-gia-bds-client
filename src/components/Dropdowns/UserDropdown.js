import React, { useState,useContext } from 'react'
import { createPopper } from '@popperjs/core'
import { Redirect } from 'react-router-dom'

import { UserContext } from 'layouts/Admin'

const UserDropdown = () => {
  const user = useContext(UserContext)
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false)
  const [isLogout, setIsLogout] = useState(false)
  const btnDropdownRef = React.createRef()
  const popoverDropdownRef = React.createRef()

  const handleLogout = () => {
    localStorage.removeItem('accessToken')
    setIsLogout(!isLogout)
  }
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: 'bottom-start'
    })
    setDropdownPopoverShow(true)
  }
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false)
  }

  return (
    <>
      {isLogout && <Redirect from='*' to='/auth/' />}
      <a
        className='block text-blueGray-500'
        href='#pablo'
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault()
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover()
        }}
      >
        <div className='flex items-center'>
          <span className='inline-flex items-center justify-center w-12 h-12 text-sm text-white rounded-full bg-blueGray-200'>
            <img
              alt='...'
              className='w-full align-middle border-none rounded-full shadow-lg'
              src={require('assets/img/team-1-800x800.jpg').default}
            />
          </span>
        </div>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? 'block ' : 'hidden ') +
          'bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48'
        }
      >
        <a
          href='#pablo'
          className={
            'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700'
          }
          onClick={(e) => e.preventDefault()}
        >
          Action
        </a>
        <a
          href='#pablo'
          className={
            'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700'
          }
          onClick={(e) => e.preventDefault()}
        >
          Another action
        </a>
        <a
          href='#pablo'
          className={
            'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700'
          }
          onClick={(e) => e.preventDefault()}
        >
          Something else here
        </a>
        <div className='h-0 my-2 border border-solid border-blueGray-100' />
        <a
          className={
            'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 cursor-pointer'
          }
          onClick={handleLogout}
        >
          Log out
        </a>
      </div>
      <a
        className='hidden pl-3 text-sm font-semibold text-white uppercase lg:inline-block'
        href='#pablo'
        onClick={(e) => {
          e.preventDefault()
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover()
        }}
      >
        {user}
      </a>
    </>
  )
}

export default UserDropdown
