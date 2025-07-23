import { Helmet } from 'react-helmet-async';

export default function Personality() {
  return (
    <>
      <Helmet>
        <title>Personality</title>
      </Helmet>
      <section className="personality-page prose dark:prose-invert">
        <h1 className="text-3xl font-bold mb-6">Personality</h1>
        <p></p>
      </section>
    </>
  );
}
