import { Button, Typography } from "@material-tailwind/react"
import { motion } from 'framer-motion'
import { upToDownReveal } from "../animations/upToDownReveal"

export const Contact = () => {
  return (
    <div className='min-h-screen flex flex-wrap gap-5 justify-evenly items-center'>
        <div className="flex flex-col gap-6 w-96">

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
            <Typography placeholder={"title"} variant='h4' className="font-bold text-center text-white">Entre em contato <strong className='text-highlight'>comigo!</strong> Preencha este formulário e entrarei em contato o mais rápido possível.</Typography>            
          </motion.div>

        </div>
        <div>
            <form className="flex flex-col gap-4 w-80">
                <motion.input 
                variants={upToDownReveal}
                transition={{ duration: 0.75, ease: "easeInOut", delay: 0.5 }}
                initial="hidden"
                whileInView="visible" 
                type="text" 
                placeholder="email" 
                className="p-2 bg-secondary text-white text-2xl outline-none rounded-md" 
                />

                <motion.textarea 
                variants={upToDownReveal}
                transition={{ duration: 0.75, ease: "easeInOut", delay: 0.65 }}
                initial="hidden"
                whileInView="visible"                
                name="" 
                className="p-2 bg-secondary text-white text-2xl outline-none rounded-md resize-none h-40" 
                placeholder="sua mensagem"
                ></motion.textarea>
                <motion.div
                variants={upToDownReveal}
                transition={{ duration: 0.75, ease: "easeInOut", delay: 0.75 }}
                initial="hidden"
                whileInView="visible"
                className="w-full flex justify-center"                
                >
                  <Button placeholder={"button"} fullWidth className="bg-highlight text-white">enviar</Button>
                </motion.div>
            </form>
        </div>
    </div>
  )
}
