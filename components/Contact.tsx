import React from 'react';
import { SectionId } from '../types';
import { Mail, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id={SectionId.CONTACT} className="py-20 scroll-mt-24 bg-white dark:bg-dark-lighter/30 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Let's build something amazing together.</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              I'm open to discussing enterprise cloud strategies, customer success leadership opportunities, and speaking engagements.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-50 dark:bg-dark border border-slate-200 dark:border-slate-800 rounded-full flex items-center justify-center text-primary shadow-sm dark:shadow-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">Email Me</p>
                  <a href="mailto:sriikumarp@gmail.com" className="text-slate-900 dark:text-white hover:text-primary transition-colors text-lg">
                    sriikumarp@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-50 dark:bg-dark border border-slate-200 dark:border-slate-800 rounded-full flex items-center justify-center text-primary shadow-sm dark:shadow-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">Location</p>
                  <p className="text-slate-900 dark:text-white text-lg">Kuala Lumpur, Malaysia</p>
                </div>
              </div>
            </div>
          </div>

          <form className="space-y-4 bg-slate-50 dark:bg-dark p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-600 dark:text-slate-400">Name</label>
                <input type="text" className="w-full bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder-slate-400 dark:placeholder-slate-600" placeholder="Jane Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-600 dark:text-slate-400">Email</label>
                <input type="email" className="w-full bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder-slate-400 dark:placeholder-slate-600" placeholder="jane@example.com" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-600 dark:text-slate-400">Message</label>
              <textarea rows={4} className="w-full bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none placeholder-slate-400 dark:placeholder-slate-600" placeholder="I'd like to discuss..."></textarea>
            </div>

            <button type="button" className="w-full bg-primary hover:bg-indigo-600 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 group shadow-lg shadow-primary/25">
              Send Message
              <Send size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;