import React from 'react'

const ProjectTag = ({ name }) => {

  return (
    <button className = "rounded-full border-2 px-5 text-xl cursor-pointer text-white bg-black hover:border-slate-500 hover:bg-gray-100 hover:text-black">
        {name}
    </button>
  )
}

export default ProjectTag