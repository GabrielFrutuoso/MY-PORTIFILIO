import { Typography } from "@material-tailwind/react"
import { ProjectCard } from "./ProjectCard"
import { projectList } from "../utils/projectsList"
import { motion } from 'framer-motion'
import { lateralReveal } from "../animations/lateralReveal"

export const Projects = () => {

  console.log(projectList);
  

  return (
    <section className='min-h-screen flex flex-col gap-5 justify-center items-center py-10'>
        <Typography placeholder={"title"} variant='h1' className="font-bold text-center text-highlight">Projetos</Typography>

        <div className="flex flex-col gap-[120px]">
          {projectList.map((project) => (
            <motion.div
            variants={lateralReveal}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut"}}
            initial="hidden"
            whileInView="visible"
            className="w-full"
            >
              <ProjectCard project={project} key={project.id} />              
            </motion.div>
          ))}

        </div>
    </section>
  )
}
