import { About } from "../components/About"
import { Contact } from "../components/Contact"
import { Hero } from "../components/Hero"
import { NavBar } from "../components/NavBar"
import { Projects } from "../components/Projects"
import { Techs } from "../components/Techs"

export const MainPage = () => {
  return (
    <>
    <NavBar />
    <Hero />
    <About />
    <Techs />
    <Projects />
    <Contact />
    </>
    
  )
}
