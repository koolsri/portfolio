import React from 'react';
import { EXPERIENCE } from '../constants';
import { SectionId } from '../types';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id={SectionId.EXPERIENCE} className="py-20 scroll-mt-24 bg-slate-50 dark:bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Experience</h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </div>

        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-3 md:ml-6 space-y-12">
          {EXPERIENCE.map((job) => (
            <div key={job.id} className="relative pl-8 md:pl-12">
              <div className="absolute -left-[9px] top-0 bg-slate-50 dark:bg-dark p-1">
                <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-slate-50 dark:ring-dark shadow-lg shadow-primary/20"></div>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{job.role}</h3>
                <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                  {job.period}
                </span>
              </div>
              
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 mb-4 font-medium">
                <Briefcase size={16} />
                {job.company}
              </div>

              <ul className="space-y-2">
                {job.description.map((item, i) => (
                  <li key={i} className="text-slate-600 dark:text-slate-400 text-base leading-relaxed pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-slate-400 dark:before:text-slate-600">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;