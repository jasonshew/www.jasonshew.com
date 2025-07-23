import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { fetchCheckins } from '../services/api.js';

export default function Checkins() {
  const [rows, setRows] = useState(null);
  const [err, setErr] = useState(null);

  useEffect(() => {
    fetchCheckins().then(setRows).catch(e => setErr(e.message));
  }, []);

  return (
    <>
      <Helmet>
        <title>Checkins</title>
      </Helmet>
      <section className="checkins-page prose dark:prose-invert">
        <h1 className="text-3xl font-bold mb-6">Checkins</h1>
        {err && <div className="text-red-600 dark:text-red-400">Error: {err}</div>}
        {!rows && !err && <div id="loading">Loading<span className="dots">...</span></div>}
        {rows && rows.length === 0 && <p>No checkins yet.</p>}
        {rows && rows.length > 0 && (
          <ul className="checkins-list">
            {rows.map(item => (
              <li key={item.id} className="checkin-entry">
                <div className="checkin-placename font-medium">{item.place_name || 'Private Premises'}</div>
                <div className="checkin-address text-sm text-gray-600 dark:text-gray-400">{item.address}</div>
                <time className="checkin-timestamp block mt-1 text-xs text-gray-500">{item.timestamp}</time>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
