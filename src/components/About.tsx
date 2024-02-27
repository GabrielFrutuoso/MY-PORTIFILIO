import { Avatar, Chip, Typography } from '@material-tailwind/react'
import { BiLogoTypescript } from 'react-icons/bi'
import { FaReact } from 'react-icons/fa'
import { ImHtmlFive } from 'react-icons/im'
import { IoLogoCss3 } from 'react-icons/io'
import { RiJavascriptFill } from 'react-icons/ri'
import { SiTailwindcss } from 'react-icons/si'

export const About = () => {
  return (
    <section className='min-h-screen flex justify-evenly items-center flex-wrap'>
        <div className='flex flex-col items-center'>
            <Avatar placeholder={"About"} variant='rounded' src='https://github.com/GabrielFrutuoso.png' className='w-56 h-56 md:w-72 md:h-72' />
            <Chip value="Desenvolvedor Front-end" size='lg' className='mt-4 bg-secondary text-white' />

            {/* <div className='w-96 mt-4 flex justify-center flex-wrap gap-4'>
                <Chip value="HTML" icon={<ImHtmlFive size={20} />} className='flex items-center gap-2 bg-deep-orange-500 text-white'/>
                <Chip value="CSS" icon={<IoLogoCss3 size={20} />} className='flex items-center gap-2 bg-blue-500 text-white'/>
                <Chip value="JavaScript" icon={<RiJavascriptFill size={20} />} className='flex items-center gap-2 bg-yellow-500 text-black'/>
                <Chip value="React JS" icon={<FaReact size={20} />} className='flex items-center gap-2 bg-light-blue-500 text-white'/>
                <Chip value="Tailwind" icon={<SiTailwindcss size={20} />} className='flex items-center gap-2 text-light-blue-500 bg-white'/>    
                <Chip value="typeScript" icon={<BiLogoTypescript size={20} />} className='flex items-center gap-2 bg-blue-600 text-white'/>
            </div> */}
        </div>
        <div className='flex flex-col'>
            <div className='flex flex-col max-w-[500px] p-2'>
                <Typography placeholder={"title"} variant='h1' className="font-bold text-highlight">Sobre mim</Typography>
                <Typography placeholder={"paragraph"} variant='paragraph' className='text-white'>
                Olá, me chamo Gabriel Frutuoso, tenho 19 anos, estudante de Técnico em Informática, sempre gostei de tecnologia, e quando começei a estudar programação, fiquei fascinado com as coisas que eu poderia fazer, sempre quero aprender novas tecnologias ou novas técnicas, com o intuito de aprimorar minhas habilidades.
                <br/>
                <br/>
                Estou buscando minha primeira oportunidade no mercado de trabalho, seja com estagiário ou desenvolvedor junior.
                </Typography>
            </div>    
            <div className='flex flex-col max-w-[500px] p-2'>
                <Typography placeholder={"title"} variant='h1' className="font-bold text-highlight">Experiencias</Typography>
                <Typography placeholder={"paragraph"} variant='paragraph' className='text-white'>
                No fim de 2023 participei de um bootcamp full stack focado em Java, na qual aprendi HTML, CSS e JavaScript, além de Java, MySql, e Spring Boot. No fim desse Bootcamp participei de um projeto em equipe, na qual, minha função era criar o front end da aplicação, criando páginas com um visual agradável e responsivo, além de implementar formulários para a interação com o back end.
                <br/>
                <br/>
                Além de sempre desenvolver projetos, com o propósito de aprimorar e aprender novas técnicas e tecnologias
                </Typography>
            </div>                       
        </div>

    </section>
  )
}
