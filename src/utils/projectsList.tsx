import { FaReact } from 'react-icons/fa'
import { ImHtmlFive } from 'react-icons/im'
import { IoLogoCss3 } from 'react-icons/io'
import { RiJavascriptFill } from 'react-icons/ri'
import { SiNestjs, SiTailwindcss } from 'react-icons/si'
import { BiLogoTypescript } from 'react-icons/bi'


export const projectList = [
    {
        name: "Pokevice",
        description: "Meu primeiro projeto usando requisições para apis, utilizando a famosa pokeApi",
        GHubUrl: "https://github.com/GabrielFrutuoso/PokeVice",
        webSiteUrl: "https://pokevice.netlify.app",
        techs: [
            {
                name: "HTML",
                icon: <ImHtmlFive size={20} />,
            },
            {
                name: "CSS",
                icon: <IoLogoCss3 size={20} />,
            },
            {
                name: "JavaScript",
                icon: <RiJavascriptFill size={20} />,
            }
        ]
    },
    {
        name: "RunnePedia",
        description: "Minha primeira aplicação com multi-páginas",
        GHubUrl: "https://github.com/GabrielFrutuoso/RunnePedia",
        webSiteUrl: "https://runnepedia.netlify.app",
        techs: [
            {
                name: "HTML",
                icon: <ImHtmlFive size={20} />,
            },
            {
                name: "CSS",
                icon: <IoLogoCss3 size={20} />,
            },
            {
                name: "JavaScript",
                icon: <RiJavascriptFill size={20} />,
            }
        ]
    },
    {
        name: "Weather-Now",
        description: "Uma aplicação de previsão do tempo, onde os dados são obtidos de uma api externa, utilizando OpenWeatherMap API",        
        GHubUrl: "https://github.com/GabrielFrutuoso/Weather-Now",
        webSiteUrl: "https://climabriel.netlify.app",
        techs: [
            {
                name: "HTML",
                icon: <ImHtmlFive size={20} />,
            },
            {
                name: "CSS",
                icon: <IoLogoCss3 size={20} />,
            },
            {
                name: "JavaScript",
                icon: <RiJavascriptFill size={20} />,
            }
        ]
    },
    {
        name: "ReactDex",
        description: "Minha primeira aplicação usando React e Tailwind CSS, denovo usando a pokeApi, para comparar as evoluções com a outra aplicação",
        GHubUrl: "https://github.com/GabrielFrutuoso/ReactDex",
        webSiteUrl: "https://react-n70eqkjqq-gabrielfrutuoso.vercel.app",
        techs: [
            {
                name: "React JS",
                icon: <FaReact size={20} />,
            },
            {
                name: "Tailwind",
                icon: <SiTailwindcss size={20} />,
            }
        ]
    },
    {
        name: "UniversiaTour-api",
        GHubUrl: "https://github.com/GabrielFrutuoso/UniversiaTour-api",
        webSiteUrl: "#",
        description: "#",
        techs: [
            {
                name: "Nest JS",
                icon: <SiNestjs size={20} />,
            },
            {
                name: "TypeScript",
                icon: <BiLogoTypescript size={20} />,
            }
        ]
    },
    {
        name: "UniversiaTour-client",
        GHubUrl: "https://github.com/GabrielFrutuoso/UniversiaTour-client",
        webSiteUrl: "#",
        description: "#",
        techs: [
            {
                name: "React JS",
                icon: <FaReact size={20} />,
            },
            {
                name: "Tailwind",
                icon: <SiTailwindcss size={20} />,
            },
            {
                name: "TypeScript",
                icon: <BiLogoTypescript size={20} />,
            }
        ]
    },    
]