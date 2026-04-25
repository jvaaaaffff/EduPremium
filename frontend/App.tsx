/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Programs from './pages/Programs';
import Enterprise from './pages/Enterprise';
import Mentorship from './pages/Mentorship';
import ProgramDetails from './pages/ProgramDetails';
import Inquire from './pages/Inquire';
import GenericPage from './pages/GenericPage';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 w-full overflow-x-hidden">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/enterprise" element={<Enterprise />} />
            <Route path="/mentorship" element={<Mentorship />} />
            <Route path="/program/:id" element={<ProgramDetails />} />
            <Route path="/inquire" element={<Inquire />} />
            
            {/* Generic dynamic pages for footer links */}
            <Route path="/about" element={<GenericPage />} />
            <Route path="/partnerships" element={<GenericPage />} />
            <Route path="/careers" element={<GenericPage />} />
            <Route path="/privacy" element={<GenericPage />} />
            <Route path="/terms" element={<GenericPage />} />
            <Route path="/contact" element={<GenericPage />} />
            
            {/* Subject Area pages */}
            <Route path="/data-science" element={<GenericPage />} />
            <Route path="/leadership" element={<GenericPage />} />
            <Route path="/product-management" element={<GenericPage />} />
            <Route path="/ai-certifications" element={<GenericPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

