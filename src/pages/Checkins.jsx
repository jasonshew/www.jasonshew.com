import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { fetchCheckins } from '../services/api.js';
import { formatCheckinDate } from '../utils/datetime.js';

export default function Checkins() {
  const [rows, setRows] = useState([]);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCheckins()
      .then(data => {
        setRows(Array.isArray(data) ? data : []);
      })
      .catch(e => setErr(e.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Helmet>
        <title>Check-ins :: Jason Shew</title>
      </Helmet>

      <section id="checkins" className="prose dark:prose-invert max-w-none">
        <h1>Check-ins</h1>

        {loading && <div id="loading" className="italic text-gray-500">Loading<span className="dots">...</span></div>}
        {err && <div className="text-red-600 dark:text-red-400">Error: {err}</div>}
        {!loading && !err && rows.length === 0 && <p>No check-ins yet.</p>}

        {!loading && !err && rows.length > 0 && (
          <div id="checkins-list" className="loaded space-y-4">
            {rows.map((c, i) => {
              const placeName = c.place_name || 'Private Premises';
              const url = c.url || '#';
              const address = (c.address || '').replace(/\r\n/g, ', ');
              const when = formatCheckinDate(c.checked_in_at_utc);

              return (
                <div key={c.id ?? i} className="checkin-entry border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <div className="checkin-placename font-medium">
                    📍{' '}
                    <a
                      href={url}
                      target="_blank"
                      rel="noreferrer noopener nofollow"
                      className="underline hover:no-underline"
                    >
                      {placeName}
                    </a>
                  </div>
                  <div className="checkin-address text-sm text-gray-600 dark:text-gray-400">{address}</div>
                  <div className="checkin-timestamp text-xs text-gray-500 mt-1">{when}</div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </>
  );
}