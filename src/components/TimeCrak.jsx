import React from 'react'

const TimeCrak = ({ icon, current, previous, title, timeFrame, bgColor }) => {
  return (
    <div className={`rounded-xl w-full ${bgColor} min-h-[20vh] relative col-span-1`}>
      <div className='flex justify-end'>
        <img src={icon} className='h-20 mr-5' alt={title} />
      </div>
      <div className='bg-dark-blue flex flex-col justify-between hover:bg-desaturated-blue absolute bottom-0 px-8 py-6 right-0 rounded-xl z-50 left-0 top-12'>
        <div className='grid grid-cols-2 gap-0 lg:gap-8 w-full'>
          <span className='font-medium'>{title}</span>
          <div className='flex justify-end'>
            <span className='float-left font-medium text-xl tracking-widest'>...</span>
          </div>
          <h3 className='text-3xl lg:text-5xl font-light'>{current}</h3>
          <div className='flex justify-end items-center'>
            <span className='block lg:hidden text-pale-blue'>Last {timeFrame} - {previous}</span>
          </div>
        </div>
        <span className='hidden lg:block text-desaturated-blue'>Last {timeFrame} - {previous}</span>
      </div>
    </div>
  )
}

export default TimeCrak
