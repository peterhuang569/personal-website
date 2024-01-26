import React from 'react'
import Image from 'next/image'


const AboutSection = () => {
    
  return (
    <section className = "text-white">
        <div className="md:grid md:grid-cols-2 gap-8 item-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image src="/about-image.png" alt="profile" width={500} height={500} className="w-full rounded-lg shadow-2xl" />
            <div>   
                <h2 className = "text-4xl font-bold text-white mb-4">
                    About Me
                </h2>
                <p className = "text-base lg:text-lg text-white"> 
                    Desc asjdlfkjfkfkfkfkfkfkfkjfkjfjkfjkfkjfkjfkjfkjfkjfjkfkjfkjfkjfkj
                </p>

                <div className = "flex flex-row mt-8">
                    <span className = "mr-3 font-semibold hover:text-gray-400 text-white border-b border-white">
                        Skills
                    </span>
                </div>
                <div className='text-white bg-slate-800'>
                    hi 
                    asd
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection