import { Button, ButtonGroup, Navbar, Typography } from "@material-tailwind/react"

export const NavBar = () => {
  return (
    <Navbar placeholder={"NavBar"} blurred className="flex justify-between fixed top-3 left-1/2 -translate-x-1/2 z-50 bg-secondary mx-auto border-none">
        <Typography placeholder={"logo"} className="flex items-center">
            <span className="text-highlight text-xl font-semibold">
               <span className="text-white">{"<"}</span>Gabriel Frutuoso <span className="text-white">{"/>"}</span>
            </span>
        </Typography>
        <ButtonGroup placeholder={"links"} variant="text" className="hidden md:flex">
        <Button placeholder={"links"} size="lg" className="text-highlight">Home</Button>
        <Button placeholder={"links"} size="lg" className="text-highlight">Sobre mim</Button>
        <Button placeholder={"links"} size="lg" className="text-highlight">Contato</Button>
      </ButtonGroup>
    </Navbar>
  )
}
