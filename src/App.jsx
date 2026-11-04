import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './sections/Home.jsx'
import About from './sections/About.jsx'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
      </main>
    </>
  )
}

export default App