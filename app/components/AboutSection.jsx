import React from 'react'
import Image from 'next/image'


const AboutSection = () => {
    
  return (
    <section className = "text-white">
        <div className="md:grid md:grid-cols-2 gap-8 item-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image src="/about-image.png" alt="profile" width={500} height={500} className="w-full rounded-lg shadow-2xl" />
            <div className = "border border-2 border-white rounded-lg">    
                <h2 className = "text-center text-5xl font-bold text-white mb-4 my-3">
                    About Me
                </h2>
                <p className = "text-center text-base lg:text-2xl text-white mx-6"> 
                I`'`m currently navigating the exciting landscape of my second year as a Computer Science student. My journey through my degree has ignited a fascination for Fullstack Development, both the front-end and back-end intricacies of web applications.
                </p>

                <div className = "flex justify-center mt-8">
                    <span className = "items-center mr-3 text-3xl font-extrabold hover:text-gray-400 text-white border-b border-white">
                        Skills
                    </span>
                </div>
                <div className = "flex flex-auto">
                    <div className='text-white mx-8 my-6 text-lg'>
                        - Python <br></br> - JavaScript <br></br> -TypeScript <br></br> - C <br></br>  -CSS <br></br> - HTML <br></br> - React.js <br></br> - Next.js <br></br> - Vite.js <br></br> - Express.js <br></br> - mySQL <br></br>
                    </div>
                    <div className='text-white mx-8 my-6 text-lg'>
                        - MongoDB<br></br> - NumPy<br></br> -Pandas<br></br> - Node.js<br></br>  - BeautifulSoup
                    </div>
                </div>

                
            </div>
        </div>
    </section>
  )
}

export default AboutSection