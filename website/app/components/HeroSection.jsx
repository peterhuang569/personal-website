import React from 'react'

export const HeroSection = () => {
  return (
    <section>
        <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className="text-white text-center mb-5 text-4xl sm:text-5xl lg:text-7xl font-extrabold ">
                    Hello, I'm  
                    
                    <span className = "text-transparent bg-clip-text bg-gradient-to-br from-slate-200 via-slate-500 to-slate-700"> 
                        {" "}Peter 
                    </span>
                </h1>
                <p className = "text-white text-base sm:text-4px lg:text-xl">
                    test-test
                </p>
                <div>
                    <button className="px-6 py-3 w-full sm:w-fit sm:mt-1 rounded-full mr-4 bg-gradient-to-br from-slate-900 via-slate-700 to-slate-400 to-white-100 text-white border border-white">
                        Contact Me
                    </button>
                    <button className="px-6 py-3 w-full sm:w-fit sm:mt-1 rounded-full mr-4 bg-transparent hover:bg-slate-200 text-white border border-white">
                        Download Resume
                    </button>
                </div>

            </div>
        </div>        
            <div className="col-span-5"><div/>
        </div>


    </section>
  )
}
