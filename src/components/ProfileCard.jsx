import React from 'react'
import jeremy from '../assets/images/image-jeremy.png'
import { timeFrames } from '../utils/data'

const ProfileCard = ({ setTimeframe, timeframe}) => {
  const handleClick = (timeframe) => {
    setTimeframe(timeframe)
  }
  return (
    <div className="w-full bg-dark-blue flex-1 rounded-xl h-full col-span-1 lg:col-span-1">
      <div className='bg-blue-color rounded-xl px-8 py-6 flex flex-row gap-4 items-center lg:items-start lg:flex-col lg:h-[70%] pb-6'>
        <img className='lg:w-28 w-20 h-20 lg:h-28 border-[4px] rounded-full' src={jeremy} alt="jeremy" />
        <div className='flex flex-col lg:gap-2'>
            <span className='text-pale-blue'>Report for</span>
            <h1 className='lg:text-5xl text-2xl font-light'>Jeremy Robson</h1>
        </div>
      </div>
      <div className='flex flex-row justify-between lg:flex-col items-start px-8 py-6'>
        {
          timeFrames.map((frame) => (
            <button 
            key={frame.title} 
            onClick={()=> handleClick(frame.title)} 
            className={`${frame.title === timeframe ? "text-dark-blue":"text-desaturated-blue"} text-lg hover:text-gray-200 duration-200`}>
              {frame.desc}
            </button>
          ))
        }
      </div>
    </div>
  )
}

export default ProfileCard
