import { Typography } from "@material-tailwind/react"
import { ProjectCard } from "./ProjectCard"
import { projectList } from "../utils/projectsList"

export const Projects = () => {

  console.log(projectList);
  

  return (
    <section className='min-h-screen flex flex-col gap-5 justify-center items-center'>
        <Typography placeholder={"title"} variant='h1' className="font-bold text-center text-highlight">Projetos</Typography>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {projectList.map((project) => (
            <ProjectCard project={project} />
          ))}

        </div>
    </section>
  )
}
