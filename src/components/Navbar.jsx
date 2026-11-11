
function Navbar({ theme, onToggleTheme }) {
  return (
    <nav className="navbar">

      <ul className="nav-list">
        <li><a href="#home">HOME</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#skills">SKILLS</a></li>
        <li><a href="#experience">EXPERIENCE</a></li>
        <li><a href="#projects">PROJECTS</a></li>
        <li><a href="#contact">CONTACT</a></li>
        <li className="theme-toggle-item">

                <button
        type="button"
        className="theme-toggle"
        onClick={onToggleTheme}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      >
        {theme === 'dark' ? '☀' : '☾'}
      </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
