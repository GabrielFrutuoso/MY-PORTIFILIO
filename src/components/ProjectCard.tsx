import { Chip, Typography } from "@material-tailwind/react"
import { FaCode, FaLink } from "react-icons/fa"

export const ProjectCard = ({project}: {project: any}) => {

    const alternate = project.id % 2 === 0 ? '' : 'md:flex-row-reverse'

  return (
        <div className={`flex items-center justify-center flex-wrap gap-5 md:gap-28 ${alternate}`}>
            <div className="w-[320px] h-[450px] md:w-[400px] md:h-[550px] flex justify-center">
                <iframe src={project.webSiteUrl} className="w-full h-full"></iframe>
            </div>

            <div className="flex flex-col gap-2 px-3">
                <Typography placeholder={"project name"} variant="h1" className="font-bold text-highlight">{project.name}</Typography>

                <div className="flex flex-wrap gap-2">
                  {project.techs.map((techs: any, index: number) => (
                        <Chip key={index} value={techs.name} icon={techs.icon} className='flex items-center gap-2 h-8 bg-primary/30 text-white'/>
                    ))}
                </div>

                <div className="max-w-[300px]">
                    <Typography placeholder={"project description"} variant="paragraph" className="text-white mt-4">{project.description}</Typography>
                </div>

                <div className="flex gap-4 self-end">
                    <a href={project.GHubUrl} target="_blank" className="flex items-center gap-2 p-2 rounded-md text-white bg-secondary"><FaCode size={20} /></a>
                    <a href={project.webSiteUrl} target="_blank" className="flex items-center gap-2 p-2 rounded-md text-white bg-secondary"><FaLink size={20} /></a>
                </div>
            </div>
        </div>
  )
}


                   