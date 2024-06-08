import React from 'react'
import Beams from '../components/Beams'
import TabsDemo from '../components/TabsDemo'
function Project() {
  return (
    <div className='h-full w-full rounded-md bg-black relative flex flex-col  antialiased'>
         <h1 className=' relative z-30 mt-20 ml-44 text-white justify-start items-start text-4xl font-sans font-bold '> My Projects</h1>

     <div id='projects'  className="h-full w-full rounded-md bg-black relative flex flex-col items-center justify-center antialiased">
     <TabsDemo/>

      </div>

    </div>

  )
}

export default Project