import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { fetchCheckinsHTML } from '../services/api';

export default function Checkins() {
  const [html, setHtml] = useState('');
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCheckinsHTML()
      .then(setHtml)
      .catch(e => setErr(e.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Helmet><title>Check-ins :: Jason Shew</title></Helmet>

      <section id="checkins" className="prose dark:prose-invert max-w-none">
        <h1>Check-ins</h1>

        {loading && <div id="loading" className="italic text-gray-500">Loading…</div>}
        {err && <div className="text-red-600 dark:text-red-400">Error: {err}</div>}

        {!loading && !err && (
          <div
            id="checkins-list"
            className="loaded"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        )}
      </section>
    </>
  );
}