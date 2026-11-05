
function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="navbar-logo">
       INDRI
      </a>

      <ul className="nav-list">
        <li><a href="#home">HOME</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#experience">EXPERIENCE</a></li>
        <li><a href="#projects">PROJECTS</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
