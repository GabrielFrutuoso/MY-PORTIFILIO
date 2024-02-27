import { Card, CardBody, CardFooter, CardHeader, Chip, Typography } from "@material-tailwind/react"
import { FaCode, FaLink } from "react-icons/fa"
import { ImHtmlFive } from 'react-icons/im'
import { IoLogoCss3 } from 'react-icons/io'
import { RiJavascriptFill } from 'react-icons/ri'

export const ProjectCard = () => {
  return (
        <Card placeholder={"card"} className="!rounded-md !p-2 bg-secondary text-white">
            <CardHeader placeholder={"card"} floated={false} shadow={false} className="!bg-transparent !pt-0 text-white">
                <Typography placeholder={"title"} variant="h4" className="font-bold text-highlight">Nome do projeto</Typography>
            </CardHeader>
            <CardBody placeholder={"card"} className="!p-0 w-80">
                <div className="flex flex-wrap gap-3 my-3">
                    <Chip value="HTML" icon={<ImHtmlFive size={20} />} className='flex items-center gap-2 bg-secondary text-white'/>
                    <Chip value="CSS" icon={<IoLogoCss3 size={20} />} className='flex items-center gap-2 bg-secondary text-white !w-auto'/>
                    <Chip value="JavaScript" icon={<RiJavascriptFill size={20} />} className='flex items-center gap-2 bg-secondary text-white'/>          
                </div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, maxime iure a debitis ipsum, ex nam ratione dolore facere quo illum recusandae doloribus adipisci? Asperiores velit distinctio esse quasi alias!
            </CardBody>
            <CardFooter placeholder={"card"} className="flex justify-end gap-4 !p-0">
                <a href="" className="flex items-center gap-2 p-1 rounded-md text-white"><FaCode size={20} /></a>
                <a href="" className="flex items-center gap-2 p-1 rounded-md text-white"><FaLink size={20} /></a>
            </CardFooter>
        </Card>
  )
}
