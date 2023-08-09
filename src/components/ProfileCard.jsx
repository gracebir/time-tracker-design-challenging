import React from 'react'
import jeremy from '../assets/images/image-jeremy.png'

const ProfileCard = () => {
  return (
    <div className="w-full bg-dark-blue rounded-xl h-full">
      <div className='bg-blue-color rounded-xl px-8 py-6 flex flex-row gap-4 items-center lg:items-start lg:flex-col lg:h-[70%] pb-6'>
        <img className='lg:w-28 w-20 h-20 lg:h-28 border-[4px] rounded-full' src={jeremy} alt="jeremy" />
        <div className='flex flex-col lg:gap-2'>
            <span className='text-pale-blue'>Report by</span>
            <h1 className='lg:text-5xl text-2xl font-light'>Jeremy Robson</h1>
        </div>
      </div>
      <div className='flex flex-row justify-between lg:flex-col items-start px-8 py-6'>
        <button className='text-desaturated-blue text-lg hover:text-gray-200 duration-200'>Daily</button>
        <button className='text-desaturated-blue text-lg hover:text-gray-200 duration-200'>Weekly</button>
        <button className='text-desaturated-blue text-lg hover:text-gray-200 duration-200'>Monthly</button>
      </div>
    </div>
  )
}

export default ProfileCard
