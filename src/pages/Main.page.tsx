import { About } from "../components/About"
import { Contact } from "../components/Contact"
import { Hero } from "../components/Hero"
import { NavBar } from "../components/NavBar"
import { Projects } from "../components/Projects"

export const MainPage = () => {
  return (
    <>
    <NavBar />
    <Hero />
    <About />
    <Projects />
    <Contact />
    </>
    
  )
}
