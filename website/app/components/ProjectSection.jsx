"use client"
import ProjectCard from './ProjectCard'


const projectData = [
    {
        id: 1,
        title: "UofA Planner",
        description: "Fullstack project catering to University of Alberta students, facilitating effective semester planning to enhance efficiency.",
        image: "/uofaplanner.png",
        tag: ["React", "Express", "Tailwind", "Ongoing"],
        gitUrl: "https://github.com/peterhuang569/UofAPlanner"
    },
    {
        id: 2,
        title: "Express.js API",
        description: "RESTful API to communicate between cloud server and http request",
        image: "/express.png",
        tag: ["Express", "MongoDB"],
        gitUrl: "https://github.com/peterhuang569/Express-Api"
    },
    {
        id: 3,
        title: "Personal Website",
        description: "Website to showcase who I am and my projects!",
        image: "/website.png",
        tag: ["Next.js", "Tailwind"],
        gitUrl: "https://github.com/peterhuang569/personal-website"
    }
]



const ProjectSection = () => {

  return (
    <>
        <h2 className = "text-black lg:text-6xl text-center font-extrabold mb-5 sm:text-5xl">Projects</h2>

        <div className = "grid grid-cols-3 space-x-4">
            {projectData.map(project => 
            <ProjectCard key={project.id} title = {project.title}  description = {project.description} imgUrl = {project.image} gitUrl = {project.gitUrl} tag={project.tag}/>)}
        </div>
        
    </>
    
  )
}

export default ProjectSection