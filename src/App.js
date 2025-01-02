import React from 'react'
import Random from './Component/Random'
import Tag from './Component/Tag'


const App = () => {
  return (
    <div className='w-full  flex flex-col items-center background relative '>
      <h1 className='bg-white w-11/12 text-center mt-9 px-10 py-2 rounded-lg text-3xl font-bold'>RANDOM GIFS</h1>

      <div className='flex flex-col items-center w-full gap-y-10 mt-[30px]'>
        <Random/>
        <Tag/>
      </div>
    </div>
  )
}

export default App