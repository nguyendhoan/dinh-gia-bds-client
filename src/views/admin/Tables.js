import React from 'react'

// components

import CardTable from 'components/Cards/CardTable.js'

export default function Tables() {
  return (
    <>
      <div className='flex flex-wrap flex-grow mt-4'>
        <div className='w-full h-screen px-4 mb-12'>
          <CardTable />
        </div>
      </div>
    </>
  )
}
