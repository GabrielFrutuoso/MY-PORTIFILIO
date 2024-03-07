import { Button, ButtonGroup, IconButton, Menu, MenuHandler, MenuItem, MenuList, Navbar, Typography } from "@material-tailwind/react"
import { BiMenu } from "react-icons/bi";
import { Link } from 'react-scroll'
export const NavBar = () => {

  const getSectionPosition = (section: string) => {
    const element = document.getElementById(section);
    const y = element?.getBoundingClientRect();
    window.scrollTo({ top: 0, behavior: 'smooth' })
    window.scrollTo({ top: y?.top, behavior: 'smooth' });
    
  }

  return (
    <Navbar placeholder={"NavBar"} blurred className="flex justify-between fixed top-2 left-1/2 -translate-x-1/2 z-50 bg-secondary  border-none">
        <Typography placeholder={"logo"} className="flex items-center">
            <span className="text-highlight text-xl font-semibold">
               <span className="text-white">{"<"}</span>Gabriel Frutuoso <span className="text-white">{"/>"}</span>
            </span>
        </Typography>
        <ButtonGroup placeholder={"links group"} variant="text" className="hidden md:flex">      
          <Link to="home" spy={true} smooth={true} duration={500}>
            <Button placeholder={"links"} variant="text" size="md" className="text-highlight">
              Home
            </Button> 
          </Link>
          <Link to="about" spy={true} smooth={true} duration={500}>
           <Button placeholder={"links"} variant="text" size="md" className="text-highlight"> 
            Sobre mim
           </Button> 
          </Link>       
          <Link to="contact" spy={true} smooth={true} duration={500}>
            <Button placeholder={"links"} variant="text" size="md" className="text-highlight">
              Contato
            </Button>
          </Link>
      </ButtonGroup>

      <Menu>
        <MenuHandler className="md:hidden">
          <IconButton placeholder={"menu button"} variant="text" >
            <BiMenu size={30} className="text-highlight" />
          </IconButton>
        </MenuHandler>
        <MenuList placeholder={"menu list"} className="bg-secondary text-white border-none">
          <Link to="home" spy={true} smooth={true} duration={500}>
           <MenuItem placeholder={"menu item"} >Home</MenuItem> 
          </Link>
          <Link to="about" spy={true} smooth={true} duration={500}>
            <MenuItem placeholder={"menu item"} >Sobre mim</MenuItem>
          </Link>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            <MenuItem placeholder={"menu item"} >contato</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Navbar>
  )
}
