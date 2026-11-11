
import { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      <button
        className={`menu-toggle ${menuOpen ? 'active' : ''}`}
        type="button"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul
        id="primary-navigation"
        className={`nav-list ${menuOpen ? 'is-open' : ''}`}
      >
        <li><a href="#home" onClick={closeMenu}>HOME</a></li>
        <li><a href="#about" onClick={closeMenu}>ABOUT</a></li>
        <li><a href="#skills" onClick={closeMenu}>SKILLS</a></li>
        <li><a href="#experience" onClick={closeMenu}>EXPERIENCE</a></li>
        <li><a href="#projects" onClick={closeMenu}>PROJECTS</a></li>
        <li><a href="#contact" onClick={closeMenu}>CONTACT</a></li>
      </ul>

    </nav>
  );
}

export default Navbar;
