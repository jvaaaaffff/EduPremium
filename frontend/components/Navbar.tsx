import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white/95 text-left backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center cursor-pointer">
            <Link to="/" className="text-2xl font-display font-extrabold text-slate-900 tracking-tight" onClick={() => setIsMobileMenuOpen(false)}>
              EduPremium<span className="text-blue-600">.</span>
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            <NavLink 
              to="/programs" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors border-b-2 py-8 ${isActive ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-600 hover:text-slate-900'}`
              }
            >
              Programs
            </NavLink>
            <NavLink 
              to="/enterprise" 
               className={({ isActive }) => 
                `text-sm font-medium transition-colors border-b-2 py-8 ${isActive ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-600 hover:text-slate-900'}`
              }
            >
              Enterprise
            </NavLink>
            <NavLink 
              to="/mentorship" 
               className={({ isActive }) => 
                `text-sm font-medium transition-colors border-b-2 py-8 ${isActive ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-600 hover:text-slate-900'}`
              }
            >
              Mentorship
            </NavLink>
          </div>
          
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
              Login
            </button>
            <Link 
              to="/inquire"
              className="px-5 py-2.5 rounded-lg text-sm font-medium text-white bg-slate-900 hover:bg-blue-600 transition-all duration-300 shadow-sm"
            >
              Inquire Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white absolute w-full left-0 shadow-lg pb-6">
          <div className="px-4 pt-4 pb-3 space-y-2 flex flex-col">
            <NavLink 
              to="/programs" 
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) => 
                `block px-3 py-3 rounded-md text-base font-medium ${isActive ? 'text-blue-600 bg-blue-50' : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'}`
              }
            >
              Programs
            </NavLink>
            <NavLink 
              to="/enterprise" 
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) => 
                `block px-3 py-3 rounded-md text-base font-medium ${isActive ? 'text-blue-600 bg-blue-50' : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'}`
              }
            >
              Enterprise
            </NavLink>
            <NavLink 
              to="/mentorship" 
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) => 
                `block px-3 py-3 rounded-md text-base font-medium ${isActive ? 'text-blue-600 bg-blue-50' : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'}`
              }
            >
              Mentorship
            </NavLink>
            
            <div className="border-t border-slate-100 my-2 pt-2"></div>
            
            <button 
              className="block w-full text-left px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </button>
            <Link 
              to="/inquire"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center mt-4 px-5 py-3 rounded-lg text-base font-medium text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-colors"
            >
              Inquire Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
