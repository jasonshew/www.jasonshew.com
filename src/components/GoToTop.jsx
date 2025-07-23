import { useEffect, useState } from 'react';

export default function GoToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 150);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      className="fixed z-50 right-10 bottom-6 cursor-pointer text-center"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
    >
      <img
        src="/images/topicon.svg"
        alt="Back to Top"
        className="logo-rotation h-9 w-9"
      />
    </button>
  );
}