import CardUserTable from 'components/Cards/CardUserTable'
import React from 'react'

function UserTable() {
  return (
    <>
      <div className='flex flex-wrap'>
        <div className='w-full px-4 lg:w-full'>
          <CardUserTable />
        </div>
      </div>
    </>
  )
}

export default UserTable
