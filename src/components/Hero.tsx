import { Typography } from '@material-tailwind/react'
import background from '../assets/backGround.gif'
import { VscGithubAlt } from 'react-icons/vsc'
import { FaLinkedinIn } from 'react-icons/fa'
export const Hero = () => {
  return (
    <div className='relative flex justify-center items-center w-full h-screen' id='home'>
        <img src={background} className='absolute top-0 left-0 w-full h-full object-cover' />

        <div className='flex flex-col items-center z-10'>
            <Typography placeholder={"title"} variant='h1' className="font-bold text-white text-center">Olá, bem vindo ao meu <span className='text-highlight'>portifólio</span></Typography>
            <Typography placeholder={"subtitle"} variant='paragraph' className="font-bold text-white text-center" style={{ textShadow: '2px 2px 4px #000000' }}>Estou empolgado para mostrar um pouco sobre mim, minhas <a className='text-highlight'>habilidades</a>, <a className='text-highlight'>projetos</a>  e minhas <a className='text-highlight'>experiências</a>.</Typography>

            <div className='flex gap-4 mt-6'>
                <a href="https://github.com/GabrielFrutuoso" target='_blank' className="flex items-center gap-2 text-white bg-secondary p-2 rounded-md">
                <VscGithubAlt size={20} color='white' />
                <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/gabriel-frutuoso-contato" target='_blank' className="flex items-center gap-2 text-white bg-secondary p-2 rounded-md">
                <FaLinkedinIn size={20} color='white' />
                <span>Linkedin</span>
                </a>
            </div>
        </div>
    </div>
  )
}
