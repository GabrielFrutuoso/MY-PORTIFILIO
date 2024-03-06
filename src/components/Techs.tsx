import { Typography } from "@material-tailwind/react"
import { TechIcon } from "./TechIcon"
import { techList } from "../utils/TechList"
import { motion } from 'framer-motion'
import { upToDownReveal } from "../animations/upToDownReveal"
import { lateralReveal } from "../animations/lateralReveal"
export const Techs = () => {
  return (
    <div className="min-h-screen flex flex-wrap justify-around items-center">
        <div className="flex flex-col items-center gap-3 max-w-[400px]">
            <motion.div
            variants={lateralReveal}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut"}}
            initial="hidden"
            whileInView="visible"
            >
                <Typography placeholder={"title"} variant="h1" className="font-bold text-highlight text-center">Tecnologias que costumo usar</Typography>
            </motion.div>

            <motion.div
            variants={lateralReveal}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut"}}
            initial="hidden"
            whileInView="visible"
            >            
            <Typography placeholder={"title"} variant="paragraph" className="font-bold text-white text-center">Numa profissão tão dinâmica, e sempre cheia de inovações e novas tecnologias, é crucial ter conhecimento em tecnologias utilizadaspelo mercado, além de ficar de olho em <strong className="text-highlight">bibliotecas</strong> e <strong className="text-highlight">frameworks</strong> que podem se tornar tendência entre os desenvolvedores.</Typography>  
            </motion.div>
              
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-[400px]">
            {techList.map((tech, index) => (
            <motion.div
            variants={upToDownReveal}
            transition={{ duration: 0.5, delay: 0.2 * index, ease: "easeInOut"}}
            initial="hidden"
            whileInView="visible"
            >
                <TechIcon key={index} name={tech.name} icon={tech.icon} />     
            </motion.div>                
            ))}
            
        </div>
    </div>
  )
}
