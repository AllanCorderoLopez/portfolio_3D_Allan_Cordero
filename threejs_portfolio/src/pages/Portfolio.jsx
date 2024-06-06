import React from 'react'
import Beams from '../components/Beams'
function Portfolio() {
  return (
    <>
     <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Allan Cordero
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          I am a Frontend Developer with a passion for creating beautiful and functional user interfaces. I specialize in React, Next.js, and Tailwind CSS. 
        </p>


      </div>
      </div>

      <Beams/>

    </>

  )
}

export default Portfolio