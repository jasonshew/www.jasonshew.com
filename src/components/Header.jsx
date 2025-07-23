import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle.jsx';

const linkClass = ({ isActive }) =>
  `px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 ${isActive ? 'font-semibold underline' : ''}`;

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(o => !o);
  const close = () => setOpen(false);

  return (
    <header className="border-b border-gray-200 dark:border-gray-700">
      <div className="nav-container">
        <div className="flex items-center gap-4">
          <Link to="/" className="site-title" onClick={close}>
            YourSite
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button id="menu-toggle" className="menu-toggle" onClick={toggle} aria-label="Menu">
            {open ? '⊗' : '☰'}
          </button>
        </div>
      </div>

      <nav className={`nav-menu ${open ? 'active' : ''}`}>
        <ul onClick={close}>
          <li><NavLink to="/about" className={linkClass}>About</NavLink></li>
          <li><NavLink to="/checkins" className={linkClass}>Checkins</NavLink></li>
          <li><NavLink to="/linkbook" className={linkClass}>Linkbook</NavLink></li>
          <li><NavLink to="/tracks" className={linkClass}>Tracks</NavLink></li>
          <li><NavLink to="/personality" className={linkClass}>Personality</NavLink></li>
          <li><NavLink to="/uses" className={linkClass}>Uses</NavLink></li>
          <li><NavLink to="/epicureanism" className={linkClass}>Epicureanism</NavLink></li>
          <li><NavLink to="/connect" className={linkClass}>Connect</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}
