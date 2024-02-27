import { Button, Typography } from "@material-tailwind/react"

export const Contact = () => {
  return (
    <div className='min-h-screen flex flex-wrap gap-5 justify-evenly items-center'>
        <div className="flex flex-col gap-6 w-96">
            <Typography placeholder={"title"} variant='h2' className="font-bold text-center text-white">Gostou do que viu? tem alguma <strong className='text-highlight'>dívida?</strong></Typography>
            <Typography placeholder={"title"} variant='h4' className="font-bold text-center text-white">Entre em contato <strong className='text-highlight'>comigo!</strong> Preencha este formulário e entrarei em contato o mais rápido possível.</Typography>

        </div>
        <div className="">
            <form className="flex flex-col gap-4 w-80">
                <input type="text" className="p-2 bg-secondary text-white text-2xl outline-none rounded-md" placeholder="email" />
                <textarea name="" className="p-2 bg-secondary text-white text-2xl outline-none rounded-md resize-none h-40" placeholder="sua mensagem"></textarea>
                <Button placeholder={"button"} className="bg-highlight text-white">enviar</Button>
            </form>
        </div>
    </div>
  )
}
