import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h3 className="text-xl font-display font-bold text-slate-900 mb-4">EduPremium<span className="text-blue-600">.</span></h3>
            <p className="text-slate-500 text-sm max-w-sm mb-6">
              Empowering professionals through elite certification and real-world skills.
              Leading institutional excellence through advanced workforce training and upskilling solutions.
            </p>
            <div className="flex space-x-4 text-slate-400">
               {/* Icons placehodlers */}
               <div className="w-8 h-8 rounded bg-slate-200 flex items-center justify-center hover:bg-blue-100 hover:text-blue-600 transition-colors cursor-pointer">in</div>
               <div className="w-8 h-8 rounded bg-slate-200 flex items-center justify-center hover:bg-blue-100 hover:text-blue-600 transition-colors cursor-pointer">tw</div>
               <div className="w-8 h-8 rounded bg-slate-200 flex items-center justify-center hover:bg-blue-100 hover:text-blue-600 transition-colors cursor-pointer">fb</div>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-4">Programs / Company</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><Link to="/data-science" className="hover:text-blue-600 transition-colors">Data Science</Link></li>
              <li><Link to="/leadership" className="hover:text-blue-600 transition-colors">Leadership</Link></li>
              <li><Link to="/product-management" className="hover:text-blue-600 transition-colors">Product Management</Link></li>
              <li><Link to="/ai-certifications" className="hover:text-blue-600 transition-colors">AI Certifications</Link></li>
              <li><Link to="/about" className="hover:text-blue-600 transition-colors">About Us</Link></li>
              <li><Link to="/partnerships" className="hover:text-blue-600 transition-colors">Partnerships</Link></li>
              <li><Link to="/careers" className="hover:text-blue-600 transition-colors">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-4">Resources & Support</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><Link to="/contact" className="hover:text-blue-600 transition-colors">Contact Support</Link></li>
              <li><Link to="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-blue-600 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
             <h4 className="text-sm font-semibold text-slate-900 mb-4">Newsletter</h4>
             <p className="text-sm text-slate-500 mb-4">Get AI insights delivered to your inbox.</p>
             <div className="flex">
               <input type="email" placeholder="Email" className="flex-1 px-3 py-2 border border-slate-300 rounded-l-lg text-sm focus:outline-none focus:border-blue-500" />
               <button className="bg-[#0f52ba] text-white px-4 py-2 text-sm font-medium rounded-r-lg hover:bg-blue-800 transition-colors">Join</button>
             </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
          <p>© 2024 EduPremium Institutional Excellence. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex gap-4">
             Global HQ: Corporate Park, Cyber City, Building 10-A, 12th Floor.
          </div>
        </div>
      </div>
    </footer>
  );
}
