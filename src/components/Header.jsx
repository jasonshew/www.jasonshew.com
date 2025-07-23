import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle.jsx';

export default function Header() {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(o => !o);
  const close = () => setOpen(false);

  return (
    <header>
      <div className="nav-container">
        <div className="logo">
          <Link to="/" className="site-title" onClick={close}>YourSite</Link>
        </div>

        <button id="menu-toggle" className="menu-toggle" onClick={toggle}>
          {open ? '⊗' : '☰'}
        </button>

        <nav className={`nav-menu ${open ? 'active' : ''}`}>
          <ul onClick={close}>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/checkins">Checkins</NavLink></li>
            <li><NavLink to="/linkbook">Linkbook</NavLink></li>
            <li><NavLink to="/tracks">Tracks</NavLink></li>
            <li><NavLink to="/personality">Personality</NavLink></li>
            <li><NavLink to="/uses">Uses</NavLink></li>
            <li><NavLink to="/epicureanism">Epicureanism</NavLink></li>
            <li><NavLink to="/connect">Connect</NavLink></li>
          </ul>
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
