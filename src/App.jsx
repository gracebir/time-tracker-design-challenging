import { useEffect, useState } from 'react'
import ProfileCard from './components/ProfileCard'
import TimeCrak from './components/TimeCrak'
import data from './data.json'
import { staticTimeAssets } from './utils/data'

function App() {
  const [times, setTimes] = useState([])
  const [timeframe, setTimeframe] = useState("weekly")
  
  const fetchData = () => {
    const databyTimeFrame = data.map((time) => {
      let newTimeframe = time.timeframes[timeframe]
      return newTimeframe
    })
    setTimes(databyTimeFrame)
  }

  useEffect(() => {
    fetchData()
  }, [timeframe])
  
  return (
    <div className='text-gray-200 font-rubik w-full bg-very-dark flex items-center min-h-screen'>
      <div className='max-w-7xl grid grid-cols-1 gap-8 lg:grid-cols-4 flex-1 mx-auto min-h-[55vh]'>
        <ProfileCard setTimeframe={setTimeframe} />
        <div className='lg:col-span-3 col-span-1 grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {times.map((time, index) => (
            <TimeCrak
              bgColor={staticTimeAssets[index].bgColor}
              icon={staticTimeAssets[index].icon}
              key={time.title}
              current={time.current}
              previous={time.previous}
              timeFrame={timeframe}
              title={staticTimeAssets[index].title} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
