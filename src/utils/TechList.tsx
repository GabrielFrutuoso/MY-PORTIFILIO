import { FaGitAlt, FaGithub, FaReact } from "react-icons/fa";
import { ImHtmlFive } from "react-icons/im";
import { IoLogoCss3 } from "react-icons/io";
import { SiAxios, SiJavascript, SiMysql, SiNestjs, SiPrisma, SiTailwindcss, SiTypescript } from "react-icons/si";

export type TechListProps = {
    name: string;
    icon: JSX.Element;
}

export const techList = [
    {
        name: "HTML",
        icon: <ImHtmlFive size={60} color="white" />,
    },
    {
        name: "CSS",
        icon: <IoLogoCss3 size={60} color="white" />,
    },
    {
        name: "JavaScript",
        icon: <SiJavascript size={60} color="white" />,
    },
    {
        name: "TypeScript",
        icon: <SiTypescript size={60} color="white" />,
    },
    {
        name: "React",
        icon: <FaReact size={60} color="white" />,
    },
    {
        name: "Tailwind",
        icon: <SiTailwindcss size={60} color="white" />,
    },   
    {
        name: "Axios",
        icon: <SiAxios size={60} color="white" />,
    }, 
    {
        name: "Nest JS",
        icon: <SiNestjs size={60} color="white" />,
    },
    {
        name: "Prisma ORM",
        icon: <SiPrisma size={60} color="white" />,
    },
    {
        name: "MySQL",
        icon: <SiMysql size={60} color="white" />,
    },
    {
        name: "Git",
        icon: <FaGitAlt size={60} color="white" />,
    },
    {
        name: "Github",
        icon: <FaGithub size={60} color="white" />,
    }
]