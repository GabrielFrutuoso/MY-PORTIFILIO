import { FaReact } from 'react-icons/fa'
import { ImHtmlFive } from 'react-icons/im'
import { IoLogoCss3 } from 'react-icons/io'
import { RiJavascriptFill } from 'react-icons/ri'
import { SiNestjs, SiTailwindcss } from 'react-icons/si'
import { BiLogoTypescript } from 'react-icons/bi'

export const projectList = [
    {   
        id: 1,
        name: "Pokevice",
        description: "Meu primeiro projeto trabalhando com requisições HTTP para API´s externas o DOM (Document Object Model) para manuipular elementos HTML com JavaScript, buscando os dados do pokemon escolhido pelo usario.",
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
        id: 2,
        name: "RunnePedia",
        description: "Minha primeira aplicação com multi-páginas. Essa aplicação busca informações dos personagens do famoso jogo League of Legends, ao clicar no card de algum personagem, o usuário será redirecionaso para uma nova página com as informações desse personagem.",
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
        id: 3,
        name: "Weather-Now",
        description: "Uma aplicação de previsão do tempo, onde os dados são obtidos de uma api externa, utilizando OpenWeatherMap API.",        
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
    {   id: 4,
        name: "ReactDex",
        description: "Minha primeira aplicação usando React e Tailwind CSS, denovo usando a pokeApi, para comparar as evoluções com a outra aplicação.",
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
    {   id: 5,
        name: "UniversiaTour-api",
        GHubUrl: "https://github.com/GabrielFrutuoso/UniversiaTour-api",
        webSiteUrl: "https://universiatour-api.onrender.com/destiny",
        description: "Uma api para uma aplicação de viagens feita em Nest JS com autenticação JWT, onde o usuário pode ver informações sobre pontos turísticos e criar itinerários na página de perfil.",
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
    {   id: 6,
        name: "UniversiaTour-client",
        GHubUrl: "https://github.com/GabrielFrutuoso/UniversiaTour-client",
        webSiteUrl: "https://universia-tour-client.vercel.app",
        description: "Uma aplicação simulando uma página de viagens onde o usuário pode ver informações sobre pontos turísticos e criar itinerários na página de perfil.",
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
    {   id: 7,
        name: "FastURL-client",
        GHubUrl: "https://github.com/GabrielFrutuoso/FastURL-client",
        webSiteUrl: "https://fast-url-client.vercel.app",
        description: "Um projeto de ecurtador de URLs, onde o usuário insere uma URL e o sistema gera uma URL encurtada, usando uma API de encurtamento feita por mim mesmo.",
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