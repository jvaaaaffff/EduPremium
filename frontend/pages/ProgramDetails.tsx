import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowUpRight, 
  CheckCircle, 
  TrendingUp, 
  Zap, 
  Lock, 
  DollarSign, 
  Briefcase, 
  ChevronDown, 
  Clock, 
  Star,
  Users,
  Award,
  Globe,
  ShieldCheck,
  Calendar,
  BookOpen
} from 'lucide-react';
import ConfirmationModal from '../components/ConfirmationModal.tsx';

const FADE_UP = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 20 } }
};

const STAGGER = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function ProgramDetails() {
  const [openAccordion, setOpenAccordion] = useState<string | null>("01");
  const [isConfirmOpen, setConfirmOpen] = useState(false);
  const navigate = useNavigate();

  const curriculum = [
    { 
      num: "01", 
      title: "Foundations of AI & Business Strategy", 
      desc: "Understanding neural networks, ML lifecycles, and ROI mapping. This module covers the core principles of artificial intelligence and how they can be leveraged to drive business value and innovation.",
      details: [
        "History and Evolution of AI",
        "Machine Learning Paradigms",
        "AI Strategy Frameworks",
        "Ethical Considerations in AI"
      ]
    },
    { 
      num: "02", 
      title: "Deep Learning & Generative Models", 
      desc: "Mastering LLMs, Stable Diffusion, and Prompt Engineering. Focus on the architecture of modern generative models and practical applications in content creation and problem-solving.",
      details: [
        "Neural Network Architectures",
        "Transform models and LLMs",
        "Diffusion Models for Media",
        "Advanced Prompt Engineering"
      ]
    },
    { 
      num: "03", 
      title: "Responsible AI & Ethics", 
      desc: "Bias mitigation, regulatory compliance, and governance frameworks. Essential for leaders to ensure AI implementations are fair, transparent, and legally sound.",
      details: [
        "Identifying and Mitigating Bias",
        "AI Governance Models",
        "Global Regulatory Landscape (EU AI Act)",
        "Security and Privacy in AI"
      ]
    },
  ];

  const instructors = [
    {
      name: "Dr. Sarah Chen",
      role: "Ex-Google DeepMind Lead",
      bio: "15+ years experience in neural architectures. Led the team responsible for major NLP breakthroughs. Currently advising enterprise clients on AI strategy.",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Marcus Johnson",
      role: "VP of Product, Meta",
      bio: "Specializes in productizing generative AI tools. Built internal ML deployment pipelines used by 10,000+ engineers globally.",
      img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Elena Rodriguez",
      role: "Principal Data Strategist",
      bio: "Former McKinsey consultant bridging the gap between technical data science teams and C-suite executives.",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200"
    }
  ];

  const handleEnrollClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setConfirmOpen(true);
  };

  const handleConfirm = () => {
    navigate("/inquire");
  };

  return (
    <div className="bg-slate-50 pb-20 overflow-hidden font-sans">
      <ConfirmationModal
        isOpen={isConfirmOpen}
        onClose={() => setConfirmOpen(false)}
        onConfirm={handleConfirm}
        title="Confirm Enrollment Request"
        message="Are you ready to transform your career with the Executive Program in AI? By confirming, you'll be redirected to the secure application form to reserve your spot."
        confirmText="Yes, Apply Now"
        cancelText="Cancel"
      />

      {/* Hero Section */}
      <section className="relative pt-24 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-visible">
        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div 
            initial="hidden"
            animate="show"
            variants={STAGGER}
            className="w-full lg:w-3/5"
          >
            <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 border border-blue-200 bg-blue-50 text-[#0f52ba] text-xs font-bold px-4 py-2 rounded-full mb-8 tracking-wider uppercase shadow-sm">
              <Award className="w-4 h-4"/> Certified by IIM Indore
            </motion.div>
            <motion.h1 variants={FADE_UP} className="text-5xl sm:text-6xl md:text-7xl font-display font-black text-slate-900 tracking-tight leading-[1.1] mb-8">
              Executive Program in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">AI & Generative AI</span>
            </motion.h1>
            <motion.p variants={FADE_UP} className="text-xl text-slate-600 mb-10 leading-relaxed font-medium">
              Master the cutting-edge landscape of LLMs and Neural Networks with a curriculum designed for leaders and innovators. Bridging the gap between engineering and strategic business implementation.
            </motion.p>
            <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-5">
              <button 
                onClick={handleEnrollClick}
                className="bg-[#0f52ba] hover:bg-blue-800 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 shadow-xl shadow-blue-600/20"
              >
                Enroll Now <ArrowUpRight className="w-5 h-5"/>
              </button>
              <Link to="/contact" className="bg-white border border-slate-200 text-slate-700 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all text-center flex items-center justify-center gap-3 group">
                Download Syllabus <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform opacity-50"/>
              </Link>
            </motion.div>
          </motion.div>

          {/* Scannable Info Block / Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-2/5"
          >
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-2xl shadow-slate-200/50 lg:sticky lg:top-32 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-110"></div>
              
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-8 pb-4 border-b border-slate-100 flex items-center gap-3">
                <ShieldCheck className="text-blue-600" /> Program Overview
              </h3>
              
              <div className="space-y-6">
                 <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                       <Clock className="w-6 h-6" />
                    </div>
                    <div>
                       <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Duration</p>
                       <p className="font-bold text-slate-900 text-lg">6 Months <span className="text-slate-500 text-sm font-medium ml-2">(12 hrs/week)</span></p>
                    </div>
                 </div>
                 
                 <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                       <Calendar className="w-6 h-6" />
                    </div>
                    <div>
                       <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Next Cohort</p>
                       <p className="font-bold text-slate-900 text-lg">November 15, 2024</p>
                       <p className="text-red-500 text-xs font-bold mt-1 inline-flex items-center gap-1 bg-red-50 px-2 py-0.5 rounded-md">Filling Fast</p>
                    </div>
                 </div>

                 <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                       <BookOpen className="w-6 h-6" />
                    </div>
                    <div>
                       <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Format</p>
                       <p className="font-bold text-slate-900 text-lg">Live Online + Capstone</p>
                    </div>
                 </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                 <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Key Benefits</p>
                 <ul className="space-y-3">
                    {["IIM Alumni Status", "1:1 Career Mentorship", "Lifetime Content Access", "Global Tech Network"].map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                        <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                        {benefit}
                      </li>
                    ))}
                 </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Statistics Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={STAGGER}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 hover:gap-8 transition-all duration-300"
        >
          {[
            { label: "Avg Salary Hike", value: "150%", sub: "Targeting top-tier roles", icon: TrendingUp, color: "text-blue-600", bg: "bg-blue-50" },
            { label: "Hands-on Projects", value: "18+", sub: "Live data implementation", icon: Zap, color: "text-amber-500", bg: "bg-amber-50" },
            { label: "Industry Mentors", value: "50+", sub: "FAANG executives", icon: Users, color: "text-indigo-600", bg: "bg-indigo-50" },
            { label: "Certification Partner", value: "IIM", sub: "Top ranked business school", icon: Award, color: "text-rose-600", bg: "bg-rose-50" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              variants={FADE_UP}
              className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className={`w-14 h-14 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                <stat.icon className="w-7 h-7" />
              </div>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">{stat.label}</p>
              <p className="text-4xl font-display font-bold text-slate-900 mb-2">{stat.value}</p>
              <p className="text-sm text-slate-500 font-medium">{stat.sub}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Curriculum Accordion */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 text-xs font-bold rounded-full mb-4 uppercase tracking-widest">
            Syllabus
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">World-Class Curriculum</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">Designed by elite faculty and industry veterans, specifically curated for the modern executive's schedule.</p>
        </motion.div>

        <div className="space-y-5">
          {curriculum.map((item, idx) => (
            <motion.div 
              key={item.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`bg-white border rounded-[2rem] transition-all duration-300 overflow-hidden ${
                openAccordion === item.num ? 'border-blue-500 shadow-xl shadow-blue-900/5' : 'border-slate-200 hover:border-slate-300 hover:shadow-md'
              }`}
            >
              <button
                onClick={() => setOpenAccordion(openAccordion === item.num ? null : item.num)}
                className="w-full px-6 sm:px-8 py-7 flex items-center gap-4 sm:gap-6 text-left"
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center font-display font-bold text-xl sm:text-2xl shrink-0 transition-colors duration-300 ${
                  openAccordion === item.num ? 'bg-blue-600 text-white shadow-inner' : 'bg-slate-100 text-slate-400'
                }`}>
                  {item.num}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 truncate">{item.title}</h4>
                  <p className="text-sm text-slate-500 mt-1 line-clamp-1 truncate">{item.desc}</p>
                </div>
                <motion.div
                  animate={{ rotate: openAccordion === item.num ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    openAccordion === item.num ? 'bg-blue-50 text-blue-600' : 'bg-slate-50 text-slate-400'
                  }`}
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openAccordion === item.num && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 sm:px-8 pb-8 pt-2">
                      <div className="h-px bg-slate-100 mb-6" />
                      <p className="text-slate-600 leading-relaxed mb-8 text-sm sm:text-base">
                        {item.desc}
                      </p>
                      <h5 className="font-bold text-slate-900 mb-4 uppercase tracking-widest text-xs">Module Highlights</h5>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {item.details.map((detail, idx) => (
                          <motion.div 
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 + (idx * 0.05) }}
                            key={idx} 
                            className="flex items-start gap-3 justify-start bg-slate-50 p-4 rounded-xl border border-slate-100"
                          >
                            <CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                            <span className="text-sm text-slate-700 font-medium leading-snug">{detail}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Instructors Section */}
      <section className="py-24 bg-white border-y border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-4 tracking-tight">Learn from Industry Pioneers</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Our instructors are active leaders at top global tech companies.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {instructors.map((instructor, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 rounded-[2rem] p-8 hover:bg-blue-50 transition-colors duration-300 group border border-slate-100 hover:border-blue-100 flex flex-col items-center text-center"
              >
                <div className="relative w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg shadow-slate-200/50 transition-transform duration-500 group-hover:scale-110 cursor-default">
                   <img referrerPolicy="no-referrer" src={instructor.img} alt={instructor.name} className="w-full h-full object-cover" />
                   <div className="absolute inset-0 bg-slate-900/80 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 text-center backdrop-blur-sm">
                      <span className="text-white font-bold text-sm">{instructor.name}</span>
                      <span className="text-blue-300 text-xs mt-1 leading-tight line-clamp-2">{instructor.role}</span>
                   </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{instructor.name}</h3>
                <p className="text-blue-600 font-bold text-sm mb-4">{instructor.role}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{instructor.bio}</p>
              </motion.div>
            ))}
          </div>

          {/* Where Our Instructors Have Worked */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-12 border-t border-slate-100 text-center"
          >
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">Where Our Instructors Have Worked</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-500">
               <span className="text-2xl font-black text-slate-800 tracking-tighter">Google</span>
               <span className="text-2xl font-black text-slate-800 tracking-tighter">META</span>
               <span className="text-2xl font-serif font-black text-slate-800 tracking-tight">McKinsey</span>
               <span className="text-2xl font-black text-slate-800 tracking-tighter">OpenAI</span>
               <span className="text-xl font-black text-slate-800 tracking-tighter italic lowercase">amazon</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experiential Learning Section */}
      <section className="bg-slate-900 py-32 relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-20 relative z-10">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] -z-10"></div>
              <div className="flex items-center gap-3 mb-10">
                <div className="w-12 h-12 bg-blue-600/20 text-blue-400 rounded-2xl flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Weekend Live Sessions</h3>
                  <p className="text-slate-400 text-sm">Fits into your working schedule</p>
                </div>
              </div>

              <div className="space-y-8">
                 {[
                   { title: "Personalized Support", desc: "1:1 guidance from industry leaders who are actively shaping AI at top firms.", icon: ShieldCheck },
                   { title: "Real-world Capstones", desc: "Work on live datasets from healthcare, finance, and logistics sectors.", icon: Briefcase },
                   { title: "Exclusive Network", desc: "Permanent access to elite corporate recruitment channels world-wide.", icon: Users }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-5 group cursor-default">
                     <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-blue-500/20 transition-colors">
                       <item.icon className="w-5 h-5 text-blue-400" />
                     </div>
                     <div>
                       <h4 className="text-white font-bold mb-1 group-hover:text-blue-300 transition-colors">{item.title}</h4>
                       <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                     </div>
                   </div>
                 ))}
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-8 leading-tight">
              Transform Your Career with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Advanced AI Excellence</span>
            </h2>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Don't just watch the future happen. Lead the implementation of generative systems and secure your place at the executive table.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
               <button 
                 onClick={handleEnrollClick}
                 className="bg-white text-slate-900 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-100 transition-all shadow-xl hover:scale-105 active:scale-95"
               >
                 Enroll in Winter Cohort
               </button>
               <Link to="/contact" className="bg-slate-800 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-700 transition-all flex items-center justify-center gap-3 border border-white/5 hover:border-white/10">
                 Speak with Advisor <ArrowUpRight className="w-5 h-5"/>
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Meta Section */}
      <section className="bg-slate-100 py-16 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-xs text-slate-500 font-bold uppercase tracking-widest">
            <div className="flex items-center gap-2"><Lock className="w-4 h-4 text-slate-400"/> Certified Secure</div>
            <div className="flex items-center gap-2"><Star className="w-4 h-4 text-slate-400"/> Platinum Educator</div>
            <div className="flex items-center gap-2"><TrendingUp className="w-4 h-4 text-slate-400"/> Career Boost Focus</div>
          </div>
        </div>
      </section>
    </div>
  );
}

