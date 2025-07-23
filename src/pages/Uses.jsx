import { Helmet } from 'react-helmet-async';

export default function Uses() {
  return (
    <>
      <Helmet>
        <title>Uses</title>
      </Helmet>
      <section className="uses-page prose dark:prose-invert">
        <h1 className="text-3xl font-bold mb-6">Uses</h1>
        <p></p>
      </section>
    </>
  );
}
