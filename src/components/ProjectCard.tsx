import { Card, CardBody, CardFooter, CardHeader, Chip, Typography } from "@material-tailwind/react"
import { FaCode, FaLink } from "react-icons/fa"

export const ProjectCard = ({project}: any) => {
  return (
        <Card placeholder={"card"} className="!rounded-md !p-2 bg-secondary text-white">
            <CardHeader placeholder={"card"} floated={false} shadow={false} className="!bg-transparent !pt-0 text-white">
                <Typography placeholder={"title"} variant="h4" className="font-bold text-highlight">{project.name}</Typography>
            </CardHeader>
            <CardBody placeholder={"card"} className="!p-0 w-80 h-48">
                <div className="flex flex-wrap item-start gap-3 w-full h-[80px]">
                    {project.techs.map((techs: any, index: number) => (
                        <Chip key={index} value={techs.name} icon={techs.icon} className='flex items-center gap-2 h-8 bg-primary/30 text-white'/>
                    ))}         
                </div>
                {project.description}
            </CardBody>
            <CardFooter placeholder={"card"} className="flex justify-end gap-4 !p-0">
                <a href={project.GHubUrl} target="_blank" className="flex items-center gap-2 p-1 rounded-md text-white"><FaCode size={20} /></a>
                <a href={project.webSiteUrl} target="_blank" className="flex items-center gap-2 p-1 rounded-md text-white"><FaLink size={20} /></a>
            </CardFooter>
        </Card>
  )
}
