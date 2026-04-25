import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle, Shield, Globe, Users, Briefcase, FileText } from 'lucide-react';

export default function GenericPage() {
  const location = useLocation();
  const path = location.pathname.substring(1);
  const formatTitle = (str: string) => {
    return str
      .split('-')
      .map(word => word === 'ai' ? 'AI' : word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  const title = formatTitle(path);

  const renderContent = () => {
    switch (path) {
      case 'contact':
        return (
          <div className="max-w-6xl mx-auto text-left grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Get in Touch</h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Whether you're looking for program details, corporate partnerships, or alumni support, our dedicated team is here to assist you. Reach out to the appropriate department below.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg"><Globe className="w-6 h-6 text-blue-600" /></div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Global Headquarters</h3>
                    <p className="text-slate-600">1200 Innovation Drive, Suite 400<br/>San Francisco, CA 94103</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg"><Users className="w-6 h-6 text-blue-600" /></div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Admissions & Enrollment</h3>
                    <p className="text-slate-600">admissions@edupremium.com<br/>+1 (800) 555-0199</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg"><Briefcase className="w-6 h-6 text-blue-600" /></div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Enterprise Partnerships</h3>
                    <p className="text-slate-600">enterprise@edupremium.com<br/>+1 (800) 555-0200</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                    <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                    <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                  <input type="email" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Inquiry Type</label>
                  <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none bg-white">
                    <option>General Support</option>
                    <option>Admissions</option>
                    <option>Enterprise</option>
                    <option>Careers</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                  <textarea rows={4} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"></textarea>
                </div>
                <button type="button" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        );
      case 'about':
        return (
          <div className="max-w-4xl mx-auto text-left space-y-16">
            <div>
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                EduPremium was founded with a singular vision: to bridge the gap between academic theory and practical, industry-leading skills. We believe that true institutional excellence comes from continuous, rigorous learning and access to global networks of professionals.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Over the past decade, we have worked tirelessly to bring the most advanced curriculum to our students. By partnering with leading technology firms and Ivy League educators, we've developed a pedagogy that balances deep theoretical knowledge with immediate, actionable insights. Every program is designed to create leaders who don't just understand the future, but shape it.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm transition hover:shadow-md">
                <Globe className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">Global Impact</h3>
                <p className="text-slate-600 leading-relaxed">Our alumni network spans over 100 countries, bringing transformative leadership to Fortune 500 companies around the world. We pride ourselves on the diverse perspectives that make our community strong.</p>
              </div>
              <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm transition hover:shadow-md">
                <Users className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">Expert Faculty</h3>
                <p className="text-slate-600 leading-relaxed">Learn directly from practitioners who are actively shaping the future of AI, product management, and enterprise strategy. Our educators aren't just academics; they are industry veterans.</p>
              </div>
              <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm transition hover:shadow-md">
                <Shield className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">Uncompromising Quality</h3>
                <p className="text-slate-600 leading-relaxed">Every course, assignment, and lecture goes through rigorous peer-review to ensure that you are receiving the most updated and impactful education possible.</p>
              </div>
              <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm transition hover:shadow-md">
                <CheckCircle className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">Results Driven</h3>
                <p className="text-slate-600 leading-relaxed">Our success is measured entirely by the career acceleration of our graduates. We offer extensive career services and mentorship to ensure ROI for every student.</p>
              </div>
            </div>

            <div className="bg-slate-900 p-12 rounded-2xl text-center text-white mt-12 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
               <div className="relative z-10">
                 <h2 className="text-3xl font-display font-bold mb-4">Join Our Community</h2>
                 <p className="text-slate-400 max-w-2xl mx-auto mb-8 text-lg">
                   Ready to take the next step in your professional journey? Explore our programs and discover the EduPremium difference.
                 </p>
                 <Link to="/programs" className="inline-block bg-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-500 transition-colors">
                   View Programs
                 </Link>
               </div>
            </div>
          </div>
        );
      case 'partnerships':
        return (
          <div className="max-w-5xl mx-auto text-left space-y-16">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Partner with EduPremium</h2>
              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                We collaborate with top-tier universities, global tech giants, and specialized industry groups to deliver unparalleled educational experiences. By becoming a partner, you gain access to a curated talent pool and co-creation opportunities for our curriculum.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img referrerPolicy="no-referrer" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Partnerships" className="rounded-xl shadow-lg border border-slate-200" />
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900">Why Partner with Us?</h3>
                <p className="text-slate-600">
                  EduPremium isn't just an education provider; we are an institutional talent engine. Our partners enjoy early access to graduating cohorts, custom training for internal employees, and branding opportunities across our global network.
                </p>
                <ul className="space-y-4 pt-4">
                  {[
                    'Design custom curriculum tailored to your specific tech stack.',
                    'Direct recruitment pipelines from our top-performing graduates.',
                    'Beta early-access to our proprietary executive learning platform.',
                    'Generous executive training group discounts for your entire organization.'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-blue-600 shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-12 rounded-2xl border border-blue-100 text-center mt-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Let's Build the Future Together</h3>
              <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                Ready to explore how a partnership with EduPremium can transform your organization's talent pipeline?
              </p>
              <div className="flex justify-center gap-4">
                <Link to="/contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                  Contact Our Partnership Team
                </Link>
                <Link to="/enterprise" className="inline-block bg-white text-slate-800 border border-slate-300 px-8 py-3 rounded-lg font-semibold hover:bg-slate-50 transition">
                  View Enterprise Solutions
                </Link>
              </div>
            </div>
          </div>
        );
      case 'careers':
        return (
          <div className="max-w-5xl mx-auto text-left space-y-16">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-6">Do your life's best work.</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  We are a remote-first team of passionate educators, brilliant engineers, and visionary leaders on a mission to democratize elite institutional education.
                </p>
                <div className="flex gap-4">
                  <a href="#open-roles" className="bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition">
                    View Open Roles
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img referrerPolicy="no-referrer" src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Team" className="rounded-lg shadow-sm" />
                <img referrerPolicy="no-referrer" src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Working" className="rounded-lg shadow-sm mt-8" />
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-12 mb-16">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Benefits and Perks</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                {[
                  { title: 'Remote-First Culture', desc: 'Work from anywhere in the world and design your perfect setup.', icon: Globe },
                  { title: 'Unlimited PTO', desc: 'We value deep work and proper rest. Take the time you need.', icon: CheckCircle },
                  { title: 'Continuous Learning', desc: 'Free access to all our courses, plus a generous external learning stipend.', icon: FileText }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200">
                    <item.icon className="w-8 h-8 text-blue-600 mb-4" />
                    <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div id="open-roles">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 px-2 border-b border-slate-200 pb-4">Open Roles</h2>
              <div className="grid gap-6">
                {[
                  { role: 'Senior Curriculum Architect (AI)', dept: 'Education', type: 'Full-time', loc: 'Remote' },
                  { role: 'Product Manager, Enterprise Learning', dept: 'Product', type: 'Full-time', loc: 'New York / Hybrid' },
                  { role: 'Lead Frontend Engineer (React/TypeScript)', dept: 'Engineering', type: 'Full-time', loc: 'Remote' },
                  { role: 'Admissions Consultant', dept: 'Sales', type: 'Full-time', loc: 'London / Hybrid' }
                ].map((job, i) => (
                  <div key={i} className="p-8 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-blue-300 transition-colors">
                    <div>
                      <p className="text-sm font-semibold text-blue-600 mb-1">{job.dept}</p>
                      <h3 className="text-xl font-bold text-slate-900">{job.role}</h3>
                      <div className="flex flex-wrap gap-4 mt-3 text-sm text-slate-500 font-medium">
                        <span className="flex items-center gap-1.5"><Briefcase className="w-4 h-4" /> {job.type}</span>
                        <span className="flex items-center gap-1.5"><Globe className="w-4 h-4" /> {job.loc}</span>
                      </div>
                    </div>
                    <Link to="/contact" className="px-8 py-3 border border-slate-300 rounded-lg font-medium hover:bg-slate-50 hover:border-slate-400 transition text-center text-slate-800">
                      Apply Now
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'privacy':
      case 'terms':
        return (
          <div className="max-w-3xl mx-auto text-left space-y-8 bg-white p-8 md:p-12 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-slate-100">
              {path === 'privacy' ? <Shield className="w-12 h-12 text-blue-600" /> : <FileText className="w-12 h-12 text-blue-600" />}
              <div>
                <h2 className="text-2xl font-bold text-slate-900">EduPremium {title}</h2>
                <p className="text-slate-500">Last updated: October 24, 2024</p>
              </div>
            </div>
            <div className="prose prose-slate max-w-none text-slate-600">
              <p>
                This document outlines the {path === 'privacy' ? 'data collection, usage, and protection' : 'rules, guidelines, and agreements'} policies for all users of the EduPremium platform. By accessing our services, you agree to comply with the stipulations detailed herein.
              </p>
              <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. General Provisions</h3>
              <p>
                We prioritize the security and integrity of user experiences. Information provided during registration is protected with industry-standard encryption. Users are responsible for maintaining the confidentiality of their credentials.
              </p>
              <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Compliance and Regulations</h3>
              <p>
                Our services adhere strictly to international data protection regulations (including GDPR and CCPA where applicable). We do not sell personally identifiable information to third parties under any circumstances.
              </p>
              <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Updates to this Policy</h3>
              <p>
                EduPremium reserves the right to modify these terms at any time. Continued use of the platform following targeted notifications of changes constitutes acceptance of the new terms.
              </p>
            </div>
            <div className="mt-12 pt-8 border-t border-slate-100 text-center">
              <p className="text-slate-500">For legal inquiries, please contact <a href="mailto:legal@edupremium.com" className="text-blue-600 hover:underline">legal@edupremium.com</a></p>
            </div>
          </div>
        );
      case 'ai-certifications':
      case 'leadership':
      case 'data-science':
      case 'product-management':
        return (
          <div className="max-w-5xl mx-auto text-left space-y-16">
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Elevate your career trajectory with our advanced programs in {title}. Designed for professionals ready to transition into executive roles or spearhead high-impact initiatives.
              </p>
              <div className="flex justify-center gap-4">
                <Link to="/inquire" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                  Inquire Now
                </Link>
                <Link to="/programs" className="bg-white border border-slate-300 text-slate-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-50 transition">
                  View Full Catalog
                </Link>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Industry-Led Curriculum', desc: 'Learn strategies developed and tested by leaders at top tech companies.', icon: Briefcase },
                { title: 'Cohort-Based Learning', desc: 'Network with diverse peers from global Fortune 500 organizations.', icon: Users },
                { title: 'Verified Certification', desc: 'Earn credentials recognized worldwide for excellence and rigor.', icon: CheckCircle }
              ].map((Feature, idx) => (
                <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                  <Feature.icon className="w-10 h-10 text-blue-600 mb-6" />
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{Feature.title}</h3>
                  <p className="text-slate-600">{Feature.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-slate-900 rounded-2xl p-12 text-center border border-slate-800 text-white relative overflow-hidden mt-12">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full"></div>
              <div className="relative z-10 max-w-2xl mx-auto">
                <h3 className="text-3xl font-display font-bold mb-4 text-white">Ready to Master {title}?</h3>
                <p className="text-slate-400 mb-8 text-lg">
                  Join our upcoming cohort and transform your approach to {title.toLowerCase()}.
                </p>
                <Link to="/inquire" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-500 transition shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                  Reserve Your Spot
                </Link>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Welcome to the {title} page. This section of our institutional excellence platform is currently being updated. Please check back later for full details.
            </p>
            <Link to="/" className="inline-block bg-slate-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-slate-800 transition">
              Return Home
            </Link>
          </div>
        );
    }
  };

  return (
    <div className="bg-slate-50 pb-24 pt-16 px-4 min-h-[70vh]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-slate-900 mb-6 capitalize tracking-tight">
            {title}
          </h1>
        </div>
        
        {renderContent()}
        
      </motion.div>
    </div>
  );
}
