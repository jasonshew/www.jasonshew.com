import { Helmet } from 'react-helmet-async';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <section className="home-page">
        <h1>Home</h1>
        <p>Welcome to the React version of your site.</p>
      </section>
    </>
  );
}
