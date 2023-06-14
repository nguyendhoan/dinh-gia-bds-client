import CardUser from 'components/Cards/CardUser'
import React from 'react'

function User() {
  return (
    <>
      <div className='flex flex-wrap'>
        <div className='w-full px-4 lg:w-full'>
          <CardUser />
        </div>
      </div>
    </>
  )
}

export default User
