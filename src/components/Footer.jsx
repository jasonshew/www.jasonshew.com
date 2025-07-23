export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer text-center text-sm text-gray-600 dark:text-gray-400 mt-12">
      <p>
        © 2006 – {year} Jason Shew<br />
        🌎 www.jasonshew.com 𑗅 🇨🇦 jasonshew.ca
      </p>

      <p className="mt-2">
        <a href="https://xn--sr8hvo.ws/previous" rel="noopener noreferrer nofollow">←</a>{' '}
        An <a href="https://xn--sr8hvo.ws" rel="noopener noreferrer nofollow">IndieWeb Webring</a> 🕸💍{' '}
        <a href="https://xn--sr8hvo.ws/next" rel="noopener noreferrer nofollow">→</a>
      </p>

      <div className="flex justify-center items-center h-24">
        <a
          rel="license noopener noreferrer"
          target="_blank"
          href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
        >
          <img
            src="/images/by-nc-nd.svg"
            alt="Creative Commons BY-NC-ND 4.0"
            className="w-20 h-auto"
          />
        </a>
      </div>

      <p className="max-w-lg mx-auto">
        All original content on this website is released under a{' '}
        <a
          rel="license noopener noreferrer"
          target="_blank"
          href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
          className="underline"
        >
          Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License
        </a>.
      </p>
    </footer>
  );
}