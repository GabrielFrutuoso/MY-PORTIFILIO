import { Button, ButtonGroup, IconButton, Menu, MenuHandler, MenuItem, MenuList, Navbar, Typography } from "@material-tailwind/react"
import { BiMenu } from "react-icons/bi";

export const NavBar = () => {

  const scroll = (Yaxys: any) => {
    window.scrollTo({ top: Yaxys, behavior: 'smooth' });
  }

  return (
    <Navbar placeholder={"NavBar"} blurred className="flex justify-between fixed top-2 left-1/2 -translate-x-1/2 z-50 bg-secondary  border-none">
        <Typography placeholder={"logo"} className="flex items-center">
            <span className="text-highlight text-xl font-semibold">
               <span className="text-white">{"<"}</span>Gabriel Frutuoso <span className="text-white">{"/>"}</span>
            </span>
        </Typography>
        <ButtonGroup placeholder={"links group"} variant="text" className="hidden md:flex"> 
        <Button placeholder={"links"} size="lg" className="text-highlight" onClick={() => scroll(0)}>Home</Button>
        <Button placeholder={"links"} size="lg" className="text-highlight" onClick={() => scroll(740)}>Sobre mim</Button>
        <Button placeholder={"links"} size="lg" className="text-highlight" onClick={() => scroll(2500)}>Contato</Button>
      </ButtonGroup>

      <Menu>
        <MenuHandler className="md:hidden">
          <IconButton placeholder={"menu button"} variant="text" >
            <BiMenu size={30} className="text-highlight" />
          </IconButton>
        </MenuHandler>
        <MenuList placeholder={"menu list"} className="bg-secondary text-white border-none">
          <MenuItem placeholder={"menu item"} onClick={() => scroll(0)}>Home</MenuItem>
          <MenuItem placeholder={"menu item"} onClick={() => scroll(700)}>Sobre mim</MenuItem>
          <MenuItem placeholder={"menu item"} onClick={() => scroll(2500)}>contato</MenuItem>
        </MenuList>
      </Menu>
    </Navbar>
  )
}
