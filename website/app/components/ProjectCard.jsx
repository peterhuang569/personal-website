import React from 'react'

const ProjectCard = ( {imgUrl, title, description }) => {
  return (
    <div>
        <div className = "h-52 md:h-72 rounded-t-xl border-8 border-black" style = {{background: `url(${imgUrl})`, backgroundSize: "cover"}}> 
        </div>
        
        <div className = "text-black rounded-t-xl">
            <h5>
                {title}
            </h5>
            <p>
                {description}
            </p>
            
        </div>
    </div>
  )
}

export default ProjectCard