import React from 'react'
import work from '../assets/images/icon-work.svg'

const TimeCrak = ({ }) => {
  return (
    <div className={`rounded-xl w-full bg-work-color min-h-[20vh] relative col-span-1`}>
      <div className='flex justify-end'>
        <img src={work} className='h-20 mr-5 ' alt="" />
      </div>
      <div className='bg-dark-blue flex flex-col justify-between hover:bg-desaturated-blue absolute bottom-0 px-8 py-6 right-0 rounded-xl z-50 left-0 top-12'>
        <div className='grid grid-cols-2 gap-0 lg:gap-8 w-full'>
          <span className='font-medium'>work</span>
          <div className='flex justify-end'>
            <span className='float-left font-medium text-xl tracking-widest'>...</span>
          </div>
          <h3 className='text-3xl lg:text-5xl font-light'>32hrs</h3>
          <div className='flex justify-end items-center'>
            <span className='block lg:hidden text-pale-blue'>Last week - 36hrs</span>
          </div>
        </div>
        <span className='hidden lg:block text-desaturated-blue'>Last week - 36hrs</span>
      </div>
    </div>
  )
}

export default TimeCrak
