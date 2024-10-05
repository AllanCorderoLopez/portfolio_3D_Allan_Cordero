import React from 'react'

function HeroSection() {
  return (
    <div className="h-[18rem] mb-44 rounded-m relative flex flex-col justify-center antialiased">
    <div className="max-w-2xl h-1/2 p-4 mt-32 md:ml-40">

      <img src="https://res.cloudinary.com/dmppulrvj/image/upload/v1728150606/c81lhtctqaxcgrmjazeb.jpg" alt="" className="rounded-full w-20 h-26 mb-10" />
      <h1 className="relative z-10 text-lg justify-center item md:text-5xl text-4xl bg-clip-text text-transparent bg-white">
        Hello, <br />
        I am <span className="text-blue-500">Allan</span> Cordero, <br />
        Front End Developer
      </h1>

    <div className='flex gap-10'>
    <button onClick={() => window.open("mailto:allancor29@gmail.com")}
     className="relative z-30 mt-10 h-12 animate-shimmer items-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      Contact me
    </button>

    <button href="https://www.linkedin.com/in/allan-cordero-l%C3%B3pez/" onClick={() => window.open("https://www.linkedin.com/in/allan-cordero-3b0b3b1b9/")}
     className="relative z-30 mt-10 h-12 animate-shimmer items-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      LinkedIn
    </button>
    </div>

    
    </div>
  </div>
  )
}

export default HeroSection