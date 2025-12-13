import React from 'react';
import { SectionId } from '../types';
import { Mail, MapPin } from 'lucide-react';

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

          <div className="bg-slate-50 dark:bg-dark p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSd311R-xbpLl5nEljmYl4w84ZRsyrzXq99Oz_dUkVaZQTkoLw/viewform?embedded=true"
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Contact Form"
              className="w-full"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;