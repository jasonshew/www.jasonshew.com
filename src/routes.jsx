import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Connect from './pages/Connect.jsx';
import Checkins from './pages/Checkins.jsx';
import Linkbook from './pages/Linkbook.jsx';
import Tracks from './pages/Tracks.jsx';
import Personality from './pages/Personality.jsx';
import Uses from './pages/Uses.jsx';
import Epicureanism from './pages/Epicureanism.jsx';

export default function RoutesWithLayout() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/checkins" element={<Checkins />} />
        <Route path="/linkbook" element={<Linkbook />} />
        <Route path="/tracks" element={<Tracks />} />
        <Route path="/personality" element={<Personality />} />
        <Route path="/uses" element={<Uses />} />
        <Route path="/epicureanism" element={<Epicureanism />} />
      </Routes>
    </Layout>
  );
}
