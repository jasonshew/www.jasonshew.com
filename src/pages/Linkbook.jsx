import { Helmet } from 'react-helmet-async';
import ExternalScript from '../components/ExternalScript.jsx';

export default function Linkbook() {
  return (
    <>
      <Helmet><title>Linkbook :: Jason Shew</title></Helmet>

      <section id="linkbook" className="prose dark:prose-invert max-w-none">
        <h1>Linkbook</h1>
        <div id="loading"><span class="dots">Loading...</span></div>
        <div id="links-list"></div>
      </section>

      {/* Load the old script AFTER the DOM nodes exist */}
      <ExternalScript src="https://api.shewtopia.com/jshewblogapi/fetch/fetch-linkbook.js" />
    </>
  );
}