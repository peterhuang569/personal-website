import React from 'react'
import Link from "next/link";
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline'
import ProjectTag from './ProjectTag';

const ProjectCard = ( {imgUrl, title, description, gitUrl, tag}) => {
  return (
    <div>
        <div className = "h-52 md:h-72 rounded-t-xl border-4 border-slate-500 relative group " 
        style = {{background: `url(${imgUrl})`, backgroundSize: "contain"}}> 
          <div className = "overlay flex items-center justify-center absolute top-0 left-0 w-full h-full bg-black bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
            <Link href={ gitUrl } className = "h-14 w-14 border-2 relative rounded-full border-slate-500 hover:border-white">
              <CodeBracketIcon className = "w-10 h-10 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover:text-white group/link"/>
            </Link>
          </div>
        </div>


        <div className="my-3">
          {tag.map(tagName => (
            <ProjectTag key={tagName} name={tagName} />
          ))}
        </div>
                


        <div className = "text-black rounded-t-xl mt-3">
            <h5 className = "text-2xl font-semibold mb-2">
                {title}
            </h5>
            <p className = "text-black text-lg text-left mr-3">
                {description}
            </p>
        </div>


    </div>
  )
}

export default ProjectCard