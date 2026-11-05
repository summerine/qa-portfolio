import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './sections/Home.jsx'
import About from './sections/About.jsx'
import Experience from './sections/Experience.jsx'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Experience />
      </main>
    </>
  )
}

export default App