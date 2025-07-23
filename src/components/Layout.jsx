import Header from './Header.jsx';
import Footer from './Footer.jsx';
import GoToTop from './GoToTop.jsx';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="page-content flex-1 w-full">
        {children}
      </main>
      <Footer />
      <GoToTop />
    </div>
  );
}
