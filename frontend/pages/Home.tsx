import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShieldCheck, Zap, Globe, Target, Layers, Cpu, Database, BarChart } from 'lucide-react';

const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 20 } },
};

const STAGGER_CHILDREN = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Home() {
  return (
    <div className="bg-slate-50 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-40 bg-slate-950 border-b border-white/5">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none"></div>
        
        {/* Animated Background Orbs */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-blue-600/30 via-transparent to-transparent blur-[160px] -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-500/20 via-transparent to-transparent blur-[160px] -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <motion.div 
              variants={STAGGER_CHILDREN}
              initial="hidden"
              animate="show"
              className="flex-1 text-center lg:text-left"
            >
              <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
                <span className="flex h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                <span className="text-sm font-bold text-slate-300 uppercase tracking-widest">Cohort 12 Now Open</span>
              </motion.div>

              <motion.h1 
                variants={FADE_UP_ANIMATION_VARIANTS}
                className="text-6xl sm:text-8xl font-display font-extrabold text-white tracking-tight leading-[0.95] mb-8"
              >
                Elevate Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-500">
                  Leadership.
                </span>
              </motion.h1>

              <motion.p 
                variants={FADE_UP_ANIMATION_VARIANTS}
                className="text-xl text-slate-400 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium"
              >
                The ultimate cohort-based learning platform for modern professionals. Master AI, Product, and Strategy with the world's 1% mentors.
              </motion.p>

              <motion.div 
                variants={FADE_UP_ANIMATION_VARIANTS} 
                className="flex flex-col sm:flex-row gap-5"
              >
                <Link 
                  to="/programs" 
                  className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-blue-500 hover:shadow-[0_20px_40px_rgba(37,99,235,0.3)] transition-all duration-300 flex items-center justify-center gap-3 group active:scale-[0.98]"
                >
                  View Programs
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
                </Link>
                <Link 
                  to="/enterprise" 
                  className="bg-white/5 text-white border border-white/10 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all flex items-center justify-center backdrop-blur-md"
                >
                  Enterprise
                </Link>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 10 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex-1 relative hidden lg:block perspective-1000"
            >
              <div className="grid grid-cols-2 gap-6 rotate-[-12deg] translate-y-12">
                 <div className="space-y-6">
                    <HeroCard icon={Cpu} color="blue" title="AI Engineering" val="98%" />
                    <HeroCard icon={Database} color="indigo" title="Data Strategy" val="84k" />
                 </div>
                 <div className="space-y-6 -translate-y-12">
                    <HeroCard icon={BarChart} color="emerald" title="ROI Growth" val="+120%" />
                    <HeroCard icon={Layers} color="amber" title="Cloud Infra" val="Tier 1" />
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              {[
                { label: "Active Learners", value: "25k+" },
                { label: "Graduation Rate", value: "94%" },
                { label: "Global Mentors", value: "500+" },
                { label: "Salary Increase", value: "62%" }
              ].map((stat, i) => (
                <div key={i}>
                   <p className="text-4xl font-display font-bold text-slate-900 mb-2">{stat.value}</p>
                   <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl sm:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                Curated programs for the <span className="text-[#0f52ba]">next-gen leader.</span>
              </h2>
              <p className="text-xl text-slate-600 font-medium">Step away from passive video-watching. Join high-intensity cohorts that drive real results.</p>
            </div>
            <Link to="/programs" className="text-blue-600 font-bold text-lg hover:underline flex items-center gap-2">
              Browse all programs <ArrowRight className="w-5 h-5"/>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
             {[
               { category: "Artificial Intelligence", title: "GenAI for Executives", price: "Starting Nov 15", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800" },
               { category: "Product Management", title: "Technical Product Marketing", price: "Starting Nov 20", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" },
               { category: "Data Science", title: "Predictive Analytics Masterclass", price: "In Session", img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800" }
             ].map((program, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: i * 0.1 }}
                 className="group cursor-pointer"
                 onClick={() => window.location.href = '/program/ai-genai'}
               >
                 <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden mb-6 shadow-xl shadow-slate-900/5 group-hover:scale-[1.02] transition-transform duration-500">
                    <img referrerPolicy="no-referrer" src={program.img} alt={program.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                       <span className="text-white font-bold bg-white/20 backdrop-blur-md px-3 py-1 rounded-lg text-xs border border-white/20">{program.category}</span>
                       <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 shadow-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                          <ArrowRight className="w-5 h-5" />
                       </div>
                    </div>
                 </div>
                 <h3 className="text-2xl font-display font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{program.title}</h3>
                 <p className="text-slate-500 font-bold text-sm tracking-wide uppercase">{program.price}</p>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Bento Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2 bg-[#0f52ba] rounded-[40px] p-12 text-white overflow-hidden relative group">
                 <div className="relative z-10 h-full flex flex-col">
                    <Zap className="w-12 h-12 mb-8 text-blue-300" />
                    <h3 className="text-4xl font-display font-bold mb-6 leading-tight">Live Expert Session <br/>Every Weekend.</h3>
                    <p className="text-blue-100 text-lg max-w-sm mb-12">Learn directly from practitioners at top tech companies. No pre-recorded dry lectures.</p>
                    <div className="mt-auto flex items-center gap-4">
                       <div className="flex -space-x-3">
                          {[
                            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
                            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80",
                            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
                            "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80"
                          ].map((src, i) => <img referrerPolicy="no-referrer" key={i} src={src} alt="avatar" className="w-10 h-10 rounded-full border-2 border-[#0f52ba] object-cover bg-slate-300" />)}
                       </div>
                       <span className="text-sm font-bold">Join 500+ professionals</span>
                    </div>
                 </div>
                 <Target className="absolute -right-20 -bottom-20 w-80 h-80 opacity-10 group-hover:scale-110 transition-transform duration-700" />
              </div>

              <div className="bg-slate-900 rounded-[40px] p-10 text-white flex flex-col items-center justify-center text-center">
                 <Star className="w-12 h-12 mb-6 text-yellow-400 fill-yellow-400" />
                 <h3 className="text-2xl font-display font-bold mb-4">4.9/5 Rating</h3>
                 <p className="text-slate-400 text-sm">Consistent top marks from our global student body.</p>
              </div>

              <div className="bg-emerald-50 border border-emerald-100 rounded-[40px] p-10 flex flex-col">
                 <ShieldCheck className="w-12 h-12 mb-6 text-emerald-600" />
                 <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">60% Pay Increase</h3>
                 <p className="text-slate-600 text-sm">Average salary hike reported by alumni within 6 months of completion.</p>
              </div>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(15,82,186,0.05),transparent_70%)]"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
           <h2 className="text-5xl sm:text-7xl font-display font-bold text-slate-900 mb-8 tracking-tighter leading-tight">Apply for institutional excellence today.</h2>
           <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto font-medium">Limited spots available for the Winter cohort. Reserve your place with a refundable deposit.</p>
           <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/inquire" className="bg-[#0f52ba] text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-blue-800 transition-all shadow-2xl shadow-blue-900/20 active:scale-95">
                 Apply for Admission
              </Link>
              <Link to="/contact" className="bg-white border border-slate-200 text-slate-800 px-12 py-5 rounded-2xl font-bold text-xl hover:bg-slate-50 transition-all active:scale-95">
                 Speak to Advisor
              </Link>
           </div>
        </div>
      </section>
    </div>
  );
}

function HeroCard({icon: Icon, color, title, val}: any) {
  return (
    <div className="bg-white/10 backdrop-blur-2xl border border-white/20 p-8 rounded-[32px] shadow-2xl w-full min-w-[200px]">
       <div className={`w-12 h-12 bg-${color}-500/20 text-${color}-400 rounded-2xl flex items-center justify-center mb-6`}>
          <Icon className="w-6 h-6" />
       </div>
       <p className="text-white font-display font-bold text-3xl mb-1">{val}</p>
       <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">{title}</p>
    </div>
  )
}
