import { Card, CardBody, CardFooter, CardHeader, Typography } from "@material-tailwind/react"
import { FaCode, FaLink } from "react-icons/fa"

export const ProjectCard = () => {
  return (
    <Card placeholder={"ProjectCard"} className="max-w-[24rem] overflow-hidden bg-secondary">
        <CardHeader
        placeholder={"ProjectCardHeader"}
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
        >
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" className="rounded-none" />
        </CardHeader>
        <CardBody placeholder={"ProjectCardBody"}>
            <Typography placeholder={"ProjectCardTitle"} variant="h4" className="text-white">Projeto</Typography>
            <Typography placeholder={"ProjectCardTitle"} variant="paragraph" className="text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque error reprehenderit esse ipsum, soluta perspiciatis in itaque facilis, deleniti, excepturi accusamus. Quisquam cumque, harum ullam molestiae quas laborum vitae praesentium.</Typography>
        </CardBody>
        <CardFooter placeholder={"ProjectCardFooter"} className="justify-end flex gap-3">
            <a>
                <FaLink size={20} color="white" />
            </a>
            <a>
                <FaCode size={20} color="white" />
            </a>            
        </CardFooter>
    </Card>
  )
}
