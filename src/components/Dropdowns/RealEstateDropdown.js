import React from 'react'
import { Link } from 'react-router-dom'

function RealEstateDropdown() {
  return (
    <div className='pl-10'>
      <Link
        to='/admin/realestate'
        className={
          'py-5 font-semibold flex items-center ' +
          (window.location.href.indexOf('/admin/realestate') !== -1
            ? 'text-lightBlue-500 hover:text-lightBlue-600'
            : 'text-blueGray-700 hover:text-blueGray-500')
        }
      >
        Thêm mới
      </Link>

      <Link
        to='/admin/tables'
        className={
          ' font-semibold flex items-center ' +
          (window.location.href.indexOf('/admin/tables') !== -1
            ? 'text-lightBlue-500 hover:text-lightBlue-600'
            : 'text-blueGray-700 hover:text-blueGray-500')
        }
      >
        Danh sách
      </Link>
    </div>
  )
}

export default RealEstateDropdown
