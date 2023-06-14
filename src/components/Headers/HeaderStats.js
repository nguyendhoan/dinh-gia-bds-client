import React from 'react'

// components

import CardStats from 'components/Cards/CardStats.js'

export default function HeaderStats() {
  return (
    <>
      {/* Header */}
      <div className='relative pt-12 pb-32 bg-lightBlue-600 md:pt-32'>
        <div className='w-full px-4 mx-auto md:px-10'>
          <div>
            {/* Card stats */}
            <div className='flex flex-wrap'>
              <div className='w-full px-4 lg:w-6/12 xl:w-3/12'>
                <CardStats
                  statSubtitle='SỐ HỒ SƠ ĐÃ KHẢO SÁT'
                  statTitle='350,897'
                  statArrow='up'
                  statPercent='3.48'
                  statPercentColor='text-emerald-500'
                  statDescripiron='So với tháng trước'
                  statIconName='fas fa-search-dollar'
                  statIconColor='bg-red-500'
                />
              </div>
              <div className='w-full px-4 lg:w-6/12 xl:w-3/12'>
                <CardStats
                  statSubtitle='SỐ HỒ SƠ ĐÃ XÁC THỰC'
                  statTitle='2,356'
                  statArrow='down'
                  statPercent='3.48'
                  statPercentColor='text-red-500'
                  statDescripiron='So với tuần trước'
                  statIconName='fas fa-check'
                  statIconColor='bg-orange-500'
                />
              </div>
              <div className='w-full px-4 lg:w-6/12 xl:w-3/12'>
                <CardStats
                  statSubtitle='SỐ HỒ SƠ CHƯA XÁC THỰC'
                  statTitle='924'
                  statArrow='down'
                  statPercent='1.10'
                  statPercentColor='text-orange-500'
                  statDescripiron='So với hôm qua'
                  statIconName='fas fa-exclamation'
                  statIconColor='bg-red-500'
                />
              </div>
              <div className='w-full px-4 lg:w-6/12 xl:w-3/12'>
                <CardStats
                  statSubtitle='SỐ HỒ SƠ ĐÃ XÁC THỰC TRONG THÁNG'
                  statTitle='49,65%'
                  statArrow='up'
                  statPercent='12'
                  statPercentColor='text-emerald-500'
                  statDescripiron='So với tháng trước'
                  statIconName='fas fa-money-check-alt'
                  statIconColor='bg-lightBlue-500'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
