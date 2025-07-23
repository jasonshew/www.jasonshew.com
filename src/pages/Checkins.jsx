import { Helmet } from 'react-helmet-async';
import ExternalScript from '../components/ExternalScript.jsx';

export default function Checkins() {
  return (
    <>
      <Helmet><title>Check-ins :: Jason Shew</title></Helmet>

      <section id="checkins" className="prose dark:prose-invert max-w-none">
        <h1>Check-ins</h1>
        <div id="loading">Loading…</div>
        <div id="checkins-list" />
      </section>

      {/* Load the old script AFTER the DOM nodes exist */}
      <ExternalScript src="https://api.shewtopia.com/jshewblogapi/fetch/fetch-checkins.js" />
    </>
  );
}