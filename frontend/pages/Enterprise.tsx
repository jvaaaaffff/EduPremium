import React from 'react';
import { ArrowUpRight, TrendingUp, CheckCircle, Network, Code, Briefcase } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Enterprise() {
  return (
    <div className="bg-slate-50 pb-20 overflow-hidden">
      {/* Hero */}
      <div className="pt-20 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative">
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/2"></div>
         <motion.div 
           initial={{ opacity: 0, x: -30 }}
           animate={{ opacity: 1, x: 0 }}
           className="w-full lg:w-1/2"
         >
            <span className="bg-[#eef3ff] text-[#0f52ba] text-[10px] font-bold tracking-wider px-3 py-1.5 rounded uppercase mb-6 inline-block">
               Transforming Global Workforces
            </span>
            <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Elevate Your Workforce with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">Elite Training</span>.
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Bridging the gap between individual career aspiration and corporate excellence through bespoke upskilling programs designed for modern enterprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/inquire" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg shadow-blue-600/20 text-center">
                Schedule Discovery Call
              </Link>
              <Link to="/inquire" className="bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-lg font-semibold hover:bg-slate-50 transition-colors text-center">
                View Enterprise Brochure
              </Link>
            </div>
         </motion.div>
         <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.2 }}
           className="w-full lg:w-1/2 relative"
         >
            <div className="bg-slate-900 aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-transparent mix-blend-overlay"></div>
              {/* Fake image content */}
              <div className="absolute inset-0 flex items-center justify-center p-8 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
                <div className="text-center text-emerald-400 font-display font-black text-3xl sm:text-5xl tracking-tighter leading-none opacity-80 uppercase transform -rotate-12 hover:rotate-0 transition-transform duration-500 cursor-pointer">
                   <div className="text-white drop-shadow-lg">Workspace</div>
                   <div className="text-blue-400 border-y-4 border-current my-2 py-2 drop-shadow-lg bg-slate-900/50 backdrop-blur-sm px-4">Transformation</div>
                </div>
              </div>
            </div>
            
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.6 }}
               className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl max-w-xs border border-white/40"
            >
               <div className="flex items-center gap-4 mb-3">
                 <div className="p-3 bg-blue-50 rounded-xl">
                   <TrendingUp className="w-6 h-6 text-blue-600" />
                 </div>
                 <span className="text-4xl font-display font-bold text-slate-900">84%</span>
               </div>
               <p className="text-sm font-medium text-slate-600 leading-snug">Efficiency increase reported by our Tier-1 corporate partners.</p>
            </motion.div>
         </motion.div>
      </div>

      {/* Partners string */}
      <div className="max-w-7xl mx-auto px-4 mt-12 mb-24 text-center">
        <p className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-8">In Partnership with Global Academic Leaders</p>
        <div className="flex flex-wrap justify-center gap-12 sm:gap-24 opacity-60">
           {['IIM', 'IIT', 'XLRI', 'SP JAIN'].map((name) => (
             <div key={name} className="text-3xl font-display font-black text-slate-800">{name}</div>
           ))}
        </div>
      </div>

      {/* Model */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-slate-900 mb-4 tracking-tight">Our Institutional Excellence Model</h2>
          <p className="text-lg text-slate-600">A data-driven approach to human capital development.</p>
        </div>
        
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <ModelCard 
            icon={<Network className="w-6 h-6 text-blue-600"/>}
            title="Strategy"
            desc="Alignment of curriculum with your specific organizational KPIs and future-state technology roadmaps."
            bullets={["Gap Analysis", "Executive Alignment"]}
          />
          <ModelCard 
            icon={<Code className="w-6 h-6 text-indigo-600"/>}
            title="Execution"
            desc="High-engagement delivery through live sessions, case-based learning, and peer collaboration hubs."
            bullets={["Managed Learning Pathways", "24/7 Mentor Support"]}
          />
          <ModelCard 
            icon={<CheckCircle className="w-6 h-6 text-emerald-600"/>}
            title="Impact"
            desc="Quantifiable ROI through productivity tracking, skill mastery assessments, and project outcomes."
            bullets={["ROI Dashboards", "Behavioral Shift Metrics"]}
          />
        </motion.div>
      </div>

      {/* ROI Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32 flex flex-col md:flex-row gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
           <h2 className="text-4xl sm:text-5xl font-display font-bold text-slate-900 mb-12 leading-tight tracking-tight">
             Evidence of <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">Corporate ROI</span> & Productivity.
           </h2>
           
           <div className="space-y-6">
             <RoiCard 
               tag="TECH LOGISTICS GLOBAL"
               title="32% Increase in Operational Throughput"
               desc="After a 6-month specialized Data Science & Supply Chain optimization program for 250+ managers."
               author="VP of Human Capital"
               company="FORTUNE 500 ENTERPRISE"
             />
             <RoiCard 
               tag="FINTECH INNOVATE"
               title="Internal Mobility Increased by 45%"
               desc="Empowering mid-level management with leadership frameworks and digital transformation toolsets."
               author="Chief Learning Officer"
               company="SERIES E UNICORN"
             />
           </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
           <div className="bg-slate-900 rounded-3xl aspect-[3/4] shadow-2xl relative overflow-hidden group">
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
             {/* Fake portrait image */}
             <div className="w-full h-full bg-slate-800 flex items-center justify-center font-display font-bold text-slate-700 text-2xl group-hover:scale-105 transition-transform duration-1000">
               Client Success Story
             </div>
             
             <div className="absolute bottom-10 left-10 right-10">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-blue-600/30">
                  <div className="w-0 h-0 border-t-6 border-t-transparent border-l-10 border-l-white border-b-6 border-b-transparent ml-1"></div>
                </div>
                <h3 className="text-3xl font-display font-bold text-white mb-2">Hear directly from the CHRO of Apex Global.</h3>
                <p className="text-slate-300">Watch the 4-minute documentary</p>
             </div>
           </div>
        </motion.div>
      </div>

      {/* CTA Footer */}
      <div className="bg-slate-900 text-white py-24 text-center mt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
           <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6 tracking-tight">Ready to Future-Proof Your Organization?</h2>
           <p className="text-slate-300 mb-10 text-xl max-w-2xl mx-auto leading-relaxed">
             Join 50+ industry leaders who trust EduPremium for their workforce transformation needs. Let's build your custom learning roadmap.
           </p>
           <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
             <Link to="/inquire" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 text-lg rounded-lg font-semibold transition-colors shadow-lg shadow-blue-600/20 text-center">
               Schedule an Institutional Discovery Call
             </Link>
             <Link to="/inquire" className="bg-white/10 backdrop-blur border border-white/20 hover:bg-white/20 text-white px-8 py-4 text-lg rounded-lg font-semibold transition-colors text-center">
               Download Case Studies
             </Link>
           </div>
           <div className="flex items-center justify-center gap-3 text-sm text-slate-400 font-medium">
             <CheckCircle className="w-5 h-5 text-emerald-500"/>
             Preferred partner for HR teams across BFSI, Tech, and Manufacturing sectors.
           </div>
        </div>
      </div>
    </div>
  );
}

function ModelCard({title, desc, bullets, icon}: any) {
  return (
    <motion.div 
      variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
      className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 flex flex-col h-full group"
    >
       <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform">
         {icon}
       </div>
       <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">{title}</h3>
       <p className="text-slate-600 leading-relaxed mb-8 flex-1">{desc}</p>
       <div className="space-y-4">
         {bullets.map((b: string) => (
           <div key={b} className="flex items-center gap-3 text-sm font-medium text-slate-700">
             <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
               <CheckCircle className="w-3 h-3"/>
             </div>
             {b}
           </div>
         ))}
       </div>
    </motion.div>
  )
}

function RoiCard({tag, title, desc, author, company}: any) {
  return (
    <div className="bg-white border text-left border-slate-200 p-8 rounded-2xl relative hover:border-blue-300 transition-colors shadow-sm cursor-pointer group">
      <div className="absolute top-8 right-8 text-slate-300 group-hover:text-blue-500 transition-colors group-hover:translate-x-1 group-hover:-translate-y-1">
        <ArrowUpRight className="w-6 h-6" />
      </div>
      <span className="bg-blue-50 text-blue-700 text-[10px] font-bold tracking-widest px-3 py-1.5 rounded-md uppercase mb-6 inline-block">
        {tag}
      </span>
      <h4 className="text-xl font-display font-bold text-slate-900 mb-3 w-[90%]">{title}</h4>
      <p className="text-slate-600 text-sm w-[90%] mb-8 leading-relaxed">{desc}</p>
      <div className="flex items-center gap-4">
         <div className="w-10 h-10 bg-slate-200 rounded-full shrink-0"></div>
         <div>
            <div className="text-sm font-bold text-slate-900">{author}</div>
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">{company}</div>
         </div>
      </div>
    </div>
  )
}
