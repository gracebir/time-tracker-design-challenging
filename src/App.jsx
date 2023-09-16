import ProfileCard from './components/ProfileCard'
import TimeCrak from './components/TimeCrak'
import data from './data.json'

function App() {
  console.log(data)
  return (
    <div className='text-gray-200 font-rubik w-full bg-very-dark flex items-center min-h-screen'>
      <div className='max-w-7xl grid grid-cols-1 gap-8 lg:grid-cols-4 flex-1 mx-auto min-h-[55vh]'>
        <ProfileCard />
        <div className='lg:col-span-3 col-span-1 grid grid-cols-1 lg:grid-cols-3 gap-8'>
          <TimeCrak />
          <TimeCrak />
          <TimeCrak />
          <TimeCrak />
          <TimeCrak />
          <TimeCrak />
        </div>
      </div>
    </div>
  )
}

export default App
