import { Helmet } from 'react-helmet-async';

export default function Linkbook() {
  return (
    <>
      <Helmet>
        <title>Linkbook</title>
      </Helmet>
      <section className="linkbook-page prose dark:prose-invert">
        <h1 className="text-3xl font-bold mb-6">Linkbook</h1>
        <p></p>
      </section>
    </>
  );
}
