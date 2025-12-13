import React from 'react';
import { PROFILE_BIO, SKILLS } from '../constants';
import { SectionId } from '../types';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-20 scroll-mt-24 bg-white dark:bg-dark-lighter/30 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
              {PROFILE_BIO}
            </p>
            <p className="text-slate-500 dark:text-slate-400">
              When I'm not driving customer success, you can find me energized on the dance floor with Salsa and Bachata, or staying active on the volleyball court. I believe in maintaining a vibrant balance and bringing positive energy to every aspect of my life.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-slate-50 dark:bg-dark p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <h4 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">8+</h4>
                <span className="text-sm text-slate-500 dark:text-slate-400">Years Experience</span>
              </div>
              <div className="bg-slate-50 dark:bg-dark p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <h4 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">50+</h4>
                <span className="text-sm text-slate-500 dark:text-slate-400">Projects Completed</span>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {SKILLS.map((skillGroup, idx) => (
              <div key={idx}>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700/50 hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                    >
                      <CheckCircle2 size={14} className="text-primary" />
                      <span className="text-sm font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;