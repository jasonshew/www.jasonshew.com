import { Helmet } from 'react-helmet-async';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      <section className="about-page">
        <h1>About</h1>
        <p>Content coming soon.</p>
      </section>
    </>
  );
}
