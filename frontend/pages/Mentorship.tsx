import React from 'react';
import { Users, FileText, Network, MessageSquare, Plus, ArrowUpRight, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Mentorship() {
  return (
    <div className="bg-slate-50 pb-20">
      {/* Hero */}
      <div className="pt-16 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <span className="bg-[#eef3ff] text-[#0f52ba] text-xs font-semibold px-4 py-2 rounded-full mb-6 inline-block">
             Institutional Excellence in Careers
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            Accelerate your career with elite corporate support.
          </h1>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
            We don't just provide content. We provide a bridge to your next leadership role through personalized mentorship and a global institutional network.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
             <Link to="/inquire" className="bg-[#0f52ba] text-white px-6 py-3 rounded font-medium hover:bg-blue-800 transition-colors text-center inline-block">
               Get Started
             </Link>
             <Link to="/programs" className="bg-white border border-slate-300 text-slate-700 px-6 py-3 rounded font-medium hover:bg-slate-50 transition-colors text-center inline-block">
               View All Services
             </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="bg-slate-300 aspect-video rounded-xl shadow-xl overflow-hidden">
            {/* Fake image */}
            <div className="w-full h-full object-cover flex items-center justify-center text-slate-500 bg-slate-200">
               Image of Mentorship session
            </div>
          </div>
        </div>
      </div>

      {/* Distinction Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="bg-white border text-left border-slate-200 rounded-xl p-8 sm:p-12 shadow-sm flex flex-col md:flex-row gap-12 text-sm">
          <div className="md:w-1/3">
             <h3 className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-3">The Distinction</h3>
             <p className="text-slate-600 text-lg">Why we're different from free courses.</p>
          </div>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8">
             <div>
                <div className="flex items-center gap-2 font-bold tracking-tight text-slate-900 mb-2">
                   <Users className="w-5 h-5 text-[#0f52ba]" /> Live Access to Mentors
                </div>
                <p className="text-slate-500 leading-relaxed">
                   Real-time guidance from industry veterans, not pre-recorded generic advice.
                </p>
             </div>
             <div>
                <div className="flex items-center gap-2 font-bold tracking-tight text-slate-900 mb-2">
                   <Briefcase className="w-5 h-5 text-[#0f52ba]" /> Dedicated Career Coaches
                </div>
                <p className="text-slate-500 leading-relaxed">
                   One-on-one strategy sessions tailored to your specific organizational goals.
                </p>
             </div>
          </div>
        </div>
      </div>

      {/* Pillars Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="text-center mb-12">
          <h2 className="text-slate-900 font-medium">Comprehensive Career Pillars</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {/* Card 1 */}
           <div className="bg-white border text-left border-slate-200 rounded-xl p-8 flex flex-col">
              <div className="w-10 h-10 bg-blue-50 rounded flex items-center justify-center mb-6">
                <Users className="w-5 h-5 text-[#0f52ba]"/>
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-3">1:1 Mentorship</h3>
              <p className="text-slate-500 text-sm mb-6 flex-1 text-left">
                Get paired with a Fortune 500 leader who provides personalized feedback on your projects and career roadmap.
              </p>
              <div className="flex items-center gap-1">
                 <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-300"></div>
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-400"></div>
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-500"></div>
                 </div>
                 <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-700 text-[10px] font-bold flex items-center justify-center border-2 border-white ml-[-8px] z-10">
                   +240
                 </div>
              </div>
           </div>

           {/* Card 2 */}
           <div className="bg-white border text-left border-slate-200 rounded-xl p-8 flex flex-col">
              <div className="w-10 h-10 bg-blue-50 rounded flex items-center justify-center mb-6">
                <FileText className="w-5 h-5 text-[#0f52ba]"/>
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-3">Resume Building</h3>
              <p className="text-slate-500 text-sm mb-6 flex-1 text-left">
                ATS-optimized resumes designed to pass through elite recruitment filters with high-impact narratives.
              </p>
           </div>

           {/* Card 3 */}
           <div className="bg-white border text-left border-slate-200 rounded-xl p-8 flex flex-col">
              <div className="w-10 h-10 bg-blue-50 rounded flex items-center justify-center mb-6">
                <Network className="w-5 h-5 text-[#0f52ba]"/>
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-3">Alumni Network</h3>
              <p className="text-slate-500 text-sm mb-6 flex-1 text-left">
                Exclusive access to our global directory of professionals at top-tier firms and direct referral channels.
              </p>
           </div>

           {/* Card 4 - Highlighted spanning remaining space (2 cols on lg) */}
           <div className="bg-[#0f52ba] text-white rounded-xl p-8 flex flex-col md:col-span-2 lg:col-span-2 relative overflow-hidden">
             <div className="w-10 h-10 bg-blue-400/30 rounded flex items-center justify-center mb-6 relative z-10">
                <MessageSquare className="w-5 h-5 text-white"/>
              </div>
              <h3 className="text-2xl font-display font-bold mb-3 relative z-10">Interview Prep</h3>
              <p className="text-blue-100 text-sm mb-6 max-w-sm relative z-10 leading-relaxed text-left">
                Mock interviews with behavioral experts and technical panels to ensure you are ready for any executive interview scenario.
              </p>
              
              <div className="absolute top-1/2 right-12 -translate-y-1/2 hidden md:block opacity-60">
                 <div className="w-48 h-24 border border-blue-400/50 rounded flex flex-col justify-center p-4 gap-3 bg-blue-800/50 backdrop-blur-sm">
                    <div className="h-2 w-3/4 bg-blue-400 rounded"></div>
                    <div className="h-2 w-full bg-blue-400/50 rounded"></div>
                    <div className="h-2 w-5/6 bg-blue-400/50 rounded"></div>
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="flex justify-between items-end mb-8">
           <div>
              <p className="text-xs text-slate-500 mb-1">Transformation Gallery</p>
              <h2 className="text-xl font-medium text-slate-900">Real transformations from our institutional graduates.</h2>
           </div>
           <Link to="/inquire" className="bg-[#0f52ba] text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-800 transition-colors flex items-center gap-2">
              Explore Success Stories <ArrowUpRight className="w-4 h-4"/>
           </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <StoryCard 
             name="Marcus J."
             role="Data Scientist"
             before="Junior Analyst"
             after="Lead Analytics Director"
             hike="+125%"
           />
           <StoryCard 
             name="Elena S."
             role="Senior Product Manager"
             before="UX Researcher"
             after="VP of Product"
             hike="+85%"
           />
           <StoryCard 
             name="David K."
             role="Software Architect"
             before="Freelance Developer"
             after="Principal Architect"
             hike="+150%"
           />
        </div>
      </div>

      {/* CTA Footer */}
      <div className="bg-[#1a1b1e] text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
           <h2 className="text-3xl font-display font-bold mb-6 tracking-wide">Ready for your next transformation?</h2>
           <p className="text-slate-400 mb-10 text-xl max-w-2xl mx-auto leading-relaxed">
             Join the ranks of elite professionals who have used our institutional support to redefine their career trajectories.
           </p>
           <Link to="/inquire" className="bg-[#0f52ba] hover:bg-blue-700 text-white px-8 py-3 rounded font-medium transition-colors mb-20 inline-block text-center">
             Schedule a Career Audit
           </Link>

           <div className="flex flex-wrap justify-center gap-12 font-bold tracking-widest text-[#4a5568]">
             <span>TECHCORP</span>
             <span>NEXUSLTD</span>
             <span>GLOBALSECURITY</span>
           </div>
        </div>
      </div>
    </div>
  );
}

function StoryCard({name, role, before, after, hike}: any) {
  return (
    <div className="bg-white border text-left border-slate-200 rounded-xl overflow-hidden shadow-sm flex flex-col">
       <div className="h-48 bg-slate-300 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-white">
             <div className="text-sm">{name}</div>
             <div className="font-bold">{role}</div>
          </div>
       </div>
       <div className="p-6">
          <div className="flex justify-between items-center mb-6 text-sm">
             <div>
                <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">Before</div>
                <div className="text-slate-700 font-medium">{before}</div>
             </div>
             <div className="text-blue-600">
               <ArrowUpRight className="w-5 h-5"/>
             </div>
             <div className="text-right">
                <div className="text-[10px] text-blue-500 font-bold uppercase mb-1">After</div>
                <div className="text-[#0f52ba] font-bold">{after}</div>
             </div>
          </div>
          <div className="bg-[#f8fafc] rounded p-3 flex justify-between items-center text-sm border border-slate-100">
             <span className="text-slate-500">Salary Transformation</span>
             <span className="font-bold text-[#0f52ba]">{hike}</span>
          </div>
       </div>
    </div>
  )
}
