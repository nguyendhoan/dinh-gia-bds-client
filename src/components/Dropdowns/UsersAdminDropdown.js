import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

function UsersAdminDropdown() {
  console.log(window.location.href)
  console.log(window.location.href.indexOf('/admin/users/table'))
  return (
    <div className='pl-10'>
      <NavLink
        className='flex items-center mt-5 font-semibold '
        to='/admin/users/'
        activeClassName='active-link'
        exact
      >
        Thêm mới
      </NavLink>

      <NavLink
        className='flex items-center mt-5 font-semibold '
        to='/admin/users/table'
        activeClassName='active-link'
      >
        Danh sách
      </NavLink>
    </div>
  )
}

export default UsersAdminDropdown
