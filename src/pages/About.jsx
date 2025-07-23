import { Helmet } from 'react-helmet-async';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      <section className="about-page prose dark:prose-invert">
        <h1 className="text-3xl font-bold mb-6">About</h1>
        <p></p>
      </section>
    </>
  );
}
