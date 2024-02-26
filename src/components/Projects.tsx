import { Typography } from "@material-tailwind/react"
import { ProjectCard } from "./ProjectCard"

export const Projects = () => {
  return (
    <div className='h-screen flex flex-col gap-5 justify-center items-center'>
        <Typography placeholder={"title"} variant='h1' className="font-bold text-center text-highlight">Projetos</Typography>

        <div className=" bg-secondary">
            <ProjectCard />
        </div>
    </div>
  )
}
