import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, Award, TrendingUp, CheckCircle, Loader2 } from 'lucide-react';

export default function Inquire() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    jobTitle: '',
    teamSize: '100 - 500 Employees',
    needs: ''
  });
  const [areasOfInterest, setAreasOfInterest] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (area: string) => {
    setAreasOfInterest(prev => 
      prev.includes(area) ? prev.filter(a => a !== area) : [...prev, area]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          areasOfInterest
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit inquiry. Please try again.');
      }

      setIsSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 max-w-3xl"
        >
          <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-xs font-bold rounded-full mb-6 uppercase tracking-wider">
            Enterprise Solutions
          </div>
          <h1 className="text-5xl sm:text-7xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
            Empower Your Workforce with <span className="text-blue-600">Institutional Excellence</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Partner with EduPremium to deliver world-class professional development. Our enterprise solutions team will tailor a program specifically for your organization's unique innovation goals.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 xl:gap-20">
          
          {/* Main Form Area */}
          <div className="flex-1">
             <AnimatePresence mode="wait">
               {isSubmitted ? (
                 <motion.div 
                   key="success"
                   initial={{ opacity: 0, scale: 0.95 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 0.95 }}
                   className="bg-white border border-green-100 rounded-3xl p-16 text-center shadow-2xl shadow-green-900/5"
                 >
                   <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8">
                     <CheckCircle className="w-10 h-10 text-green-500" />
                   </div>
                   <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Inquiry Received</h2>
                   <p className="text-slate-600 text-lg mb-10 max-w-md mx-auto">
                     Thank you, {formData.fullName}! Our enterprise team will be in touch with you at <span className="font-bold text-slate-900">{formData.email}</span> within the next 24 hours.
                   </p>
                   <button 
                     onClick={() => {
                        setIsSubmitted(false);
                        setFormData({fullName: '', email: '', company: '', jobTitle: '', teamSize: '100 - 500 Employees', needs: ''});
                        setAreasOfInterest([]);
                     }}
                     className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-slate-800 transition shadow-lg shadow-slate-900/10"
                   >
                     Submit Another Request
                   </button>
                 </motion.div>
               ) : (
                 <motion.form 
                   key="form"
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: 20 }}
                   onSubmit={handleSubmit} 
                   className="bg-white border border-slate-200 rounded-3xl p-10 shadow-xl shadow-slate-900/5"
                 >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                       <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                          <input required type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Jane Doe" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-[#0f52ba] transition-all" />
                       </div>
                       <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700 ml-1">Work Email</label>
                          <input required type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="jane@company.com" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-[#0f52ba] transition-all" />
                       </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                       <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700 ml-1">Company Name</label>
                          <input required type="text" name="company" value={formData.company} onChange={handleInputChange} placeholder="Acme Corp" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-[#0f52ba] transition-all" />
                       </div>
                       <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700 ml-1">Job Title</label>
                          <input required type="text" name="jobTitle" value={formData.jobTitle} onChange={handleInputChange} placeholder="VP of Talent" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-[#0f52ba] transition-all" />
                       </div>
                    </div>

                    <div className="mb-8 space-y-2">
                       <label className="text-sm font-bold text-slate-700 ml-1">Estimated Team Size</label>
                       <select name="teamSize" value={formData.teamSize} onChange={handleInputChange} className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-[#0f52ba] transition-all appearance-none cursor-pointer">
                          <option>100 - 500 Employees</option>
                          <option>500 - 1000 Employees</option>
                          <option>1000+ Employees</option>
                       </select>
                    </div>

                    <div className="mb-8">
                       <label className="text-sm font-bold text-slate-700 mb-4 ml-1 block">Areas of Strategic Interest</label>
                       <div className="flex flex-wrap gap-4">
                          {['AI & ML', 'Data Science', 'Leadership', 'Cybersecurity', 'Product Mgmt'].map(area => (
                             <label key={area} className={`group flex items-center gap-2 px-5 py-3 rounded-2xl cursor-pointer border-2 transition-all ${areasOfInterest.includes(area) ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/20' : 'bg-white border-slate-100 text-slate-600 hover:border-slate-300'}`}>
                                <input 
                                  type="checkbox" 
                                  className="hidden" 
                                  checked={areasOfInterest.includes(area)}
                                  onChange={() => handleCheckboxChange(area)}
                                />
                                <span className={`text-sm font-bold transition-colors ${areasOfInterest.includes(area) ? 'text-white' : 'text-slate-600 group-hover:text-slate-900'}`}>{area}</span>
                             </label>
                          ))}
                       </div>
                    </div>

                    <div className="mb-8 space-y-2">
                       <label className="text-sm font-bold text-slate-700 ml-1">Tell us more about your organizational needs</label>
                       <textarea name="needs" value={formData.needs} onChange={handleInputChange} rows={4} placeholder="How can we help your organization?" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-[#0f52ba] transition-all resize-none"></textarea>
                    </div>

                    {error && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }} 
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8 p-4 bg-red-50 border border-red-100 text-red-600 text-sm font-bold rounded-xl"
                      >
                        {error}
                      </motion.div>
                    )}

                    <button 
                      disabled={isSubmitting}
                      type="submit" 
                      className="w-full bg-[#0f52ba] text-white py-5 rounded-2xl font-bold text-xl hover:bg-blue-800 transition-all shadow-xl shadow-blue-600/20 disabled:bg-blue-400 disabled:shadow-none flex items-center justify-center gap-3"
                    >
                       {isSubmitting ? (
                          <><Loader2 className="w-6 h-6 animate-spin" /> Submitting Inquiry...</>
                       ) : (
                          'Request Enterprise Access'
                       )}
                    </button>
                    <p className="text-center text-xs text-slate-400 mt-6 font-medium">
                       By submitting this form, you agree to our <a href="#" className="underline">Privacy Policy</a> and <a href="#" className="underline">Terms of Service</a>.
                    </p>
                 </motion.form>
               )}
             </AnimatePresence>
          </div>

          {/* Sidebar Area */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full lg:w-[400px] shrink-0 space-y-8"
          >
             <div className="bg-[#edf2fa] rounded-3xl p-10 border border-blue-50 shadow-sm">
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-8">The EduPremium Advantage</h3>
                
                <div className="space-y-10">
                   <div className="flex gap-5">
                      <div className="w-12 h-12 bg-white text-blue-600 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                         <Award className="w-6 h-6"/>
                      </div>
                      <div>
                         <h4 className="font-bold text-slate-900 mb-1">Expert-Led Curriculum</h4>
                         <p className="text-slate-500 text-sm leading-relaxed">Taught by world-class practitioners from elite global organizations.</p>
                      </div>
                   </div>
                   <div className="flex gap-5">
                      <div className="w-12 h-12 bg-white text-blue-600 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                         <TrendingUp className="w-6 h-6"/>
                      </div>
                      <div>
                         <h4 className="font-bold text-slate-900 mb-1">Proven ROI Focus</h4>
                         <p className="text-slate-500 text-sm leading-relaxed">Skills designed for immediate business implementation and scalability.</p>
                      </div>
                   </div>
                   <div className="flex gap-5">
                      <div className="w-12 h-12 bg-white text-blue-600 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                         <CheckCircle className="w-6 h-6"/>
                      </div>
                      <div>
                         <h4 className="font-bold text-slate-900 mb-1">Institutional Certification</h4>
                         <p className="text-slate-500 text-sm leading-relaxed">Recognized by regulators and top industry associations worldwide.</p>
                      </div>
                   </div>
                </div>
             </div>

             <div className="bg-white border border-slate-200 rounded-3xl p-10">
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">Direct Concierge</h3>
                <p className="text-slate-500 text-sm mb-8">Speak directly with an enterprise solutions architect for custom requirements.</p>
                <div className="space-y-4 text-sm font-bold text-[#0f52ba]">
                   <a href="tel:+18005550199" className="flex items-center gap-4 group">
                      <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors"><Phone className="w-4 h-4"/></div>
                      +1 (800) 555-0199
                   </a>
                   <a href="mailto:enterprise@edupremium.com" className="flex items-center gap-4 group">
                      <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors"><Mail className="w-4 h-4"/></div>
                      enterprise@edupremium.com
                   </a>
                </div>
             </div>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
}
