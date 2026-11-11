import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './sections/Home.jsx'
import About from './sections/About.jsx'
import Experience from './sections/Experience.jsx'
import Skills from './sections/Skills.jsx'
import Projects from './sections/Projects.jsx'
import Contact from './sections/Contact.jsx'
import ScrollButtons from './ScrollButtons.jsx'
import Footer from './sections/Footer.jsx'
import {useState, useEffect} from 'react'

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme === 'light' ? 'light' : 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(currentTheme =>
      currentTheme === 'dark' ? 'light' : 'dark'
    )
  }

  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />

        <ScrollButtons />
      </main>
    </>
  )
}

export default App