// File: App.jsx (or App.js)
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Shared Components (immediately imported)
import MyNavbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy load the main pages for performance optimization
const Home = lazy(() => import('./pages/Home'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <Router>
      {/* NAVBAR (always loaded) */}
      <MyNavbar />

      {/* LAZY-LOADED PAGES WRAPPED IN A SUSPENSE */}
      <Suspense fallback={<div className="text-center my-5">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />

          {/* Optional: a catch-all route for 404 or redirect */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Suspense>

      {/* FOOTER (always loaded) */}
      <Footer />
    </Router>
  );
}

export default App;
