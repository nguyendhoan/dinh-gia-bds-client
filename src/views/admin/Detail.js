import React from 'react'

// components

import CardDetail from 'components/Cards/CardDetail.js'
import { useFetch } from 'hooks/useFetch'
import { useState, useEffect } from 'react'

export default function Details() {
  const [records] = useFetch('http://localhost:3002/real_estate')

  const [data, setdata] = useState([])
  useEffect(() => {
    if (records) {
      setdata(records.data)
    }
  }, [records, data])

  return (
    <>
      <div style={{ height: '61.6vh' }} className='flex flex-wrap mt-4 '>
        <div className='w-full px-4 mb-12'>
          <CardDetail record={data} />
        </div>
      </div>
    </>
  )
}
