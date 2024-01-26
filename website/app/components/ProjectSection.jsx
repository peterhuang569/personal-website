import React from 'react'
import ProjectCard from './ProjectCard'

const projectData = [
    {
        id: 1,
        title: "test",
        description: "test",
        image: "/1.png",
        tag: ["test", "test"]
    },
    {
        id: 2,
        title: "test",
        description: "test",
        image: "/2.png",
        tag: ["test", "test"]
    },
    {
        id: 3,
        title: "test",
        description: "test",
        image: "/3.png",
        tag: ["test", "test"]
    }
]



const ProjectSection = () => {
  return (
    <>
        <h2>Projects</h2>
        <div>{projectData.map(project => <ProjectCard key={project.id} title = {project.title}  description = {project.description} imgUrl = {project.image}/>)}</div>
    </>
    
  )
}

export default ProjectSection