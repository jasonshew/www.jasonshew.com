import { useEffect, useState } from 'react';

const getPreferred = () => localStorage.getItem('theme') || 'system';

export function useThemeToggle() {
  const [theme, setTheme] = useState(getPreferred);

  useEffect(() => {
    const apply = (t) => {
      const resolved = t === 'system'
        ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
        : t;
      document.documentElement.dataset.theme = resolved;
      document.documentElement.classList.toggle('dark', resolved === 'dark');
    };

    apply(theme);
    localStorage.setItem('theme', theme);

    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const listener = () => getPreferred() === 'system' && apply('system');
    mq.addEventListener('change', listener);
    return () => mq.removeEventListener('change', listener);
  }, [theme]);

  const cycle = () =>
    setTheme(prev => prev === 'system' ? 'light' : prev === 'light' ? 'dark' : 'system');

  return { theme, cycle };
}
