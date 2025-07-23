import { useEffect } from 'react';

export default function ExternalScript({ src, type = 'module' }) {
  useEffect(() => {
    const s = document.createElement('script');
    s.src = src;
    s.type = type;
    s.crossOrigin = 'anonymous';
    document.body.appendChild(s);
    return () => document.body.removeChild(s);
  }, [src, type]);

  return null;
}