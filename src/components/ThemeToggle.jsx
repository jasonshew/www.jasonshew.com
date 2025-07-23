import { useThemeToggle } from '../hooks/useTheme.js';

export default function ThemeToggle() {
  const { theme, cycle } = useThemeToggle();
  const icon = theme === 'system' ? '🌓' : theme === 'dark' ? '🌙' : '☀️';

  return (
    <button id="theme-toggle" className="toggle-btn" onClick={cycle} title={`Theme: ${theme}`}>
      {icon}
    </button>
  );
}
