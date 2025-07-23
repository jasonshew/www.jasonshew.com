import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(o => !o);
  const close = () => setOpen(false);

  const linkClass = ({ isActive }) =>
    `px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 ${
      isActive ? 'font-semibold underline' : ''
    }`;

  return (
    <header className="border-b border-gray-200 dark:border-gray-700">
      <div className="nav-container">
        {/* Logo / Title */}
        <div className="logo flex items-center gap-2">
          <Link to="/" onClick={close} className="flex items-center gap-2">
            <img
              src="/assets/images/shew-logo.png"
              alt="Site Logo"
              className="h-8 w-auto"
            />
            <span className="site-title text-xl font-semibold">Jason Shew</span>
          </Link>
        </div>

        {/* Right side buttons */}
        <div className="flex items-center gap-3">
          {/* If you re-enable theme toggle: <ThemeToggle /> */}
          <button
            className="menu-toggle md:hidden text-2xl"
            id="menu-toggle"
            aria-label="Toggle navigation"
            onClick={toggle}
          >
            {open ? '⊗' : '☰'}
          </button>
        </div>
      </div>

      {/* Nav */}
      <nav className={`nav-menu ${open ? 'active' : ''}`}>
        <ul
          onClick={close}
          className="flex flex-col md:flex-row gap-4 md:gap-6 px-4 md:px-0 py-4 md:py-0 md:justify-center"
        >
          {/* Anchor to #news on home. Using plain <a> so it scrolls without extra libs */}
          <li>
            <a href="/#news" className="px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
              News
            </a>
          </li>
          <li><NavLink to="/tracks" className={linkClass}>Tracks</NavLink></li>
          <li><NavLink to="/checkins" className={linkClass}>Check-ins</NavLink></li>
          <li><NavLink to="/linkbook" className={linkClass}>Linkbook</NavLink></li>
          <li>
            <a
              href="/blog"
              target="_blank"
              rel="noreferrer noopener nofollow"
              className="px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Blog⤴
            </a>
          </li>
          <li><NavLink to="/uses" className={linkClass}>Uses</NavLink></li>
          <li><NavLink to="/about" className={linkClass}>About</NavLink></li>
          <li><NavLink to="/connect" className={linkClass}>Connect</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}