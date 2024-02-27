import { FaReact } from 'react-icons/fa'
import { ImHtmlFive } from 'react-icons/im'
import { IoLogoCss3 } from 'react-icons/io'
import { RiJavascriptFill } from 'react-icons/ri'
import { SiNestjs, SiTailwindcss } from 'react-icons/si'
import { BiLogoTypescript } from 'react-icons/bi'


export const projectList = [
    {
        name: "Pokevice",
        descripion: "Meu primeiro projeto usando requisições para apis, utilizando a famosa pokeApi",
        GHubUrl: "https://github.com/gabrielfrutuoso",
        webSiteUrl: "https://pokevice.netlify.app",
        techs: [
            {
                name: "HTML",
                icon: <ImHtmlFive />,
            },
            {
                name: "CSS",
                icon: <IoLogoCss3 />,
            },
            {
                name: "JavaScript",
                icon: <RiJavascriptFill />,
            }
        ]
    },
    {
        name: "RunnePedia",
        description: "Minha primeira aplicação com multi-páginas",
        GHubUrl: "https://github.com/gabrielfrutuoso",
        webSiteUrl: "https://runnepedia.netlify.app",
        techs: [
            {
                name: "HTML",
                icon: <ImHtmlFive />,
            },
            {
                name: "CSS",
                icon: <IoLogoCss3 />,
            },
            {
                name: "JavaScript",
                icon: <RiJavascriptFill />,
            }
        ]
    },
    {
        name: "Weather-Now",
        description: "Uma aplicação de previsão do tempo, com a API do OpenWeatherMap",        
        GHubUrl: "https://github.com/gabrielfrutuoso",
        webSiteUrl: "https://climabriel.netlify.app",
        techs: [
            {
                name: "HTML",
                icon: <ImHtmlFive />,
            },
            {
                name: "CSS",
                icon: <IoLogoCss3 />,
            },
            {
                name: "JavaScript",
                icon: <RiJavascriptFill />,
            }
        ]
    },
    {
        name: "ReactDex",
        description: "Minha primeira aplicação usando React e Tailwind CSS, denovo usando a pokeApi, para comparar as evoluções com a outra aplicação",
        GHubUrl: "https://github.com/gabrielfrutuoso",
        webSiteUrl: "https://react-n70eqkjqq-gabrielfrutuoso.vercel.app",
        techs: [
            {
                name: "React JS",
                icon: <FaReact />,
            },
            {
                name: "Tailwind",
                icon: <SiTailwindcss />,
            }
        ]
    },
    {
        name: "UniversiaTour-api",
        GHubUrl: "https://github.com/gabrielfrutuoso",
        webSiteUrl: "#",
        description: "#",
        techs: [
            {
                name: "Nest JS",
                icon: <SiNestjs />,
            },
            {
                name: "TypeScript",
                icon: <BiLogoTypescript />,
            }
        ]
    },
    {
        name: "UniversiaTour-client",
        GHubUrl: "https://github.com/gabrielfrutuoso",
        webSiteUrl: "#",
        description: "#",
        techs: [
            {
                name: "React JS",
                icon: <FaReact />,
            },
            {
                name: "Tailwind",
                icon: <SiTailwindcss />,
            },
            {
                name: "TypeScript",
                icon: <BiLogoTypescript />,
            }
        ]
    },    
]