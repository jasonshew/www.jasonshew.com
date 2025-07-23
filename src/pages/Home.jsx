import { Helmet } from 'react-helmet-async';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <section className="home-page prose dark:prose-invert">
        <h1 className="text-3xl font-bold mb-6">Home</h1>
        <p>Welcome to the Tailwind-converted React site.</p>
      </section>
    </>
  );
}
