import { Typography } from "@material-tailwind/react"
import { motion } from 'framer-motion'
import { upToDownReveal } from "../animations/upToDownReveal"

export const Contact = () => {
  return (
    <div className='min-h-screen flex flex-wrap gap-5 justify-evenly items-center'>
        <div className="flex flex-col items-center gap-6 w-96">

          <motion.div
          variants={upToDownReveal}
          transition={{ duration: 0.75, ease: "easeInOut" }}
          initial="hidden"
          whileInView="visible"
          >
            <Typography placeholder={"title"} variant='h2' className="font-bold text-center text-white">Gostou do que viu? tem alguma <strong className='text-highlight'>dívida?</strong></Typography>            
          </motion.div>
          
          <motion.div
          variants={upToDownReveal}
          transition={{ duration: 0.75, ease: "easeInOut", delay: 0.25 }}
          initial="hidden"
          whileInView="visible"          
          >
          <Typography placeholder={"title"} variant='h4' className="font-bold text-center text-white">Entre em contato <strong className='text-highlight'>comigo!</strong>.</Typography>            

            <Typography placeholder={"title"} variant='h4' className="text-center text-white my-4">GabrielFrutuoso_contato@hotmail.com</Typography>
          </motion.div>
        </div>
    </div>
  )
}
