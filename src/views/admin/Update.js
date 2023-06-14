import CardUpdate from 'components/Cards/CardUpdate'
import React from 'react'
import { useFetch } from 'hooks/useFetch'
import { useState, useEffect } from 'react'

function Update() {
  const [records] = useFetch('http://localhost:3002/real_estate')

  const [data, setdata] = useState([])

  useEffect(() => {
    if (records) {
      setdata(records.data)
    }
  }, [records, data])

  return (
    <>
      <div className='flex flex-wrap'>
        <div className='w-full px-4 lg:w-full'>
          {data && <CardUpdate record={data} />}
        </div>
      </div>
    </>
  )
}

export default Update
