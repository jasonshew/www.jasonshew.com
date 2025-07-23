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
      <section className="checkins-page">
        <h1>Checkins</h1>
        {err && <div className="error">Error: {err}</div>}
        {!rows && !err && <div id="loading">Loading<span className="dots">...</span></div>}
        {rows && rows.length === 0 && <p>No checkins yet.</p>}
        {rows && rows.length > 0 && (
          <ul className="checkins-list">
            {rows.map(item => (
              <li key={item.id} className="checkin-entry">
                <div className="checkin-placename">{item.place_name || 'Private Premises'}</div>
                <div className="checkin-address">{item.address}</div>
                <time className="checkin-timestamp">{item.timestamp}</time>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
