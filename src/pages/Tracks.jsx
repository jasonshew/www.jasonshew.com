import { Helmet } from 'react-helmet-async';

export default function Tracks() {
  return (
    <>
      <Helmet>
        <title>Tracks</title>
      </Helmet>
      <section className="tracks-page prose dark:prose-invert">
        <h1 className="text-3xl font-bold mb-6">Tracks</h1>
        <p></p>
      </section>
    </>
  );
}
