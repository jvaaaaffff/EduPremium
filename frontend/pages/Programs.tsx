import React, { useState } from 'react';
import { ArrowUpRight, Download, CheckCircle, TrendingUp, BarChart2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Programs() {
  return (
    <div className="bg-slate-50 pb-20">
      {/* Hero Section */}
      <div className="bg-slate-50 pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-slate-900 tracking-tight leading-tight mb-6 mt-12">
            Advance Your Career with Live, Instructor-Led Programs.
          </h1>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
            Master high-demand skills through cohorts led by industry experts from global organizations. Professional certification designed for executive-level impact.
          </p>
        </motion.div>

        {/* Highlight Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-xl shadow-blue-900/5 p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-center border border-slate-100 gap-8 sm:h-32 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-100 to-transparent rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
          <div className="flex items-center gap-4 px-6 relative z-10 w-full sm:w-auto">
            <div className="text-blue-600 font-bold text-2xl">
              <TrendingUp className="w-8 h-8"/>
            </div>
            <div>
              <p className="text-xs font-bold tracking-widest text-slate-500 uppercase overflow-hidden mb-1">Avg. Salary Hike</p>
              <p className="text-3xl font-display font-bold text-slate-900 leading-none">60%</p>
            </div>
          </div>
          <div className="hidden sm:block w-px h-16 bg-slate-200"></div>
          <div className="flex items-center gap-4 px-6 relative z-10 w-full sm:w-auto">
            <div className="text-blue-600 font-bold text-2xl">
               <CheckCircle className="w-8 h-8"/>
            </div>
            <div>
              <p className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-1">Max Hike Achieved</p>
              <p className="text-3xl font-display font-bold text-slate-900 leading-none">150%</p>
            </div>
          </div>
          <div className="hidden sm:block w-px h-16 bg-slate-200"></div>
          <div className="flex gap-4 pr-6 opacity-30 relative z-10 w-full sm:w-auto justify-start sm:justify-end">
             <img referrerPolicy="no-referrer" src="https://cdn.worldvectorlogo.com/logos/amazon-2.svg" alt="Amazon" className="w-8 h-8 object-contain filter grayscale" />
             <img referrerPolicy="no-referrer" src="https://cdn.worldvectorlogo.com/logos/google-1-1.svg" alt="Google" className="w-8 h-8 object-contain filter grayscale" />
             <img referrerPolicy="no-referrer" src="https://cdn.worldvectorlogo.com/logos/meta-1.svg" alt="Meta" className="w-8 h-8 object-contain filter grayscale" />
          </div>
        </motion.div>
      </div>

      {/* Main Content: Sidebar + Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8 mt-8">
        
        {/* Sidebar Filters */}
        <div className="w-full lg:w-64 shrink-0 space-y-10">
          <div>
            <h3 className="text-sm font-bold text-slate-900 mb-4 tracking-wide uppercase">Domain</h3>
            <div className="space-y-4">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded border-slate-300" />
                <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors">AI & Generative AI</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-slate-300" />
                <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors">Data Science</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-slate-300" />
                <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors">Product Management</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-slate-300" />
                <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors">Business Leadership</span>
              </label>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-900 mb-4 tracking-wide uppercase">Duration</h3>
            <div className="space-y-4">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="radio" name="dur" className="w-4 h-4 text-blue-600 border-slate-300" />
                <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors">3-6 Months</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="radio" name="dur" className="w-4 h-4 text-blue-600 border-slate-300" />
                <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors">6-12 Months</span>
              </label>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-900 mb-4 tracking-wide uppercase">Certification Partner</h3>
            <div className="space-y-4">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-slate-300" />
                <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors">IIM Ahmedabad</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-slate-300" />
                <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors">IIT Madras</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-slate-300" />
                <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors">Stanford Exec Ed</span>
              </label>
            </div>
          </div>
        </div>

        {/* Programs Grid */}
        <motion.div 
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <ProgramCard 
            tag="AI & Generative AI"
            title="Executive Program in Generative AI for Leaders"
            partner="In collaboration with IIM Ahmedabad"
            duration="6 Months"
            starts="Starts Oct 24"
            icon="bg-blue-600 text-white"
          />
          <ProgramCard 
            tag="Data Science"
            title="Advanced Data Science & Decision Making"
            partner="In collaboration with IIT Madras"
            duration="9 Months"
            starts="Starts Nov 12"
            icon="bg-teal-600 text-white"
          />
          <ProgramCard 
            tag="Product Management"
            title="Strategic Product Management Executive Certificate"
            partner="In collaboration with Stanford Exec Ed"
            duration="4 Months"
            starts="Starts Jan 15"
            icon="bg-indigo-600 text-white"
          />
          <ProgramCard 
            tag="Business Leadership"
            title="Strategic Leadership in the Digital Age"
            partner="In collaboration with IIM Ahmedabad"
            duration="12 Months"
            starts="Starts Feb 20"
            icon="bg-slate-900 text-white"
          />
        </motion.div>
      </div>
      
      {/* Bottom CTA */}
      <div className="max-w-7xl mx-auto mt-24 mb-16 bg-slate-900 rounded-3xl text-white py-20 px-8 text-center flex flex-col items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 via-transparent to-transparent"></div>
        <div className="relative z-10 w-full flex flex-col items-center">
          <h2 className="text-4xl font-display font-bold mb-4">Not sure which program is right for you?</h2>
          <p className="text-slate-300 mb-10 max-w-2xl text-lg">
            Get a free consultation from our career experts to find the program that aligns with your professional goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link to="/inquire" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg shadow-blue-900/50 flex justify-center items-center">
              Schedule a Call
            </Link>
            <Link to="/inquire" className="bg-transparent border border-slate-600 hover:border-slate-400 hover:bg-slate-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all flex justify-center items-center">
              Take Career Assessment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProgramCard({ tag, title, partner, duration, starts, icon }: any) {
  return (
    <motion.div 
      variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
      className="bg-white border text-left border-slate-200 rounded-2xl p-8 flex flex-col hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300 group"
    >
      <div className="flex justify-between items-start mb-6">
        <span className="bg-blue-50 text-blue-700 text-[10px] font-bold tracking-widest px-3 py-1.5 rounded-md uppercase">
          {tag}
        </span>
        <div className={`w-10 h-10 rounded-xl ${icon} flex items-center justify-center`}>
          <div className="w-4 h-4 bg-white/50 rounded-full"></div>
        </div>
      </div>
      <h3 className="text-2xl font-display font-bold text-slate-900 mb-3 leading-snug min-h-[4rem] group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-slate-500 mb-8">{partner}</p>
      
      <div className="flex gap-6 mt-auto mb-8 text-sm text-slate-600 font-medium">
        <div className="flex items-center gap-2">
          <span className="opacity-60">🕒</span> {duration}
        </div>
        <div className="flex items-center gap-2">
          <span className="opacity-60">📅</span> {starts}
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3">
        <Link to="/program/ai-genai" className="flex-1 bg-slate-900 hover:bg-blue-600 text-white font-medium py-3 rounded-lg text-center text-sm transition-colors shadow-sm">
          Enroll Now
        </Link>
        <Link to="/inquire" className="bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium py-3 px-4 rounded-lg text-sm transition-colors flex items-center justify-center gap-2">
          <Download className="w-4 h-4"/> 
          <span className="sm:hidden">Download</span>
        </Link>
      </div>
    </motion.div>
  )
}
