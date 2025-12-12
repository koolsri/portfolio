import React from 'react';
import { EDUCATION } from '../constants';
import { SectionId } from '../types';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id={SectionId.EDUCATION} className="py-20 scroll-mt-24 bg-slate-50 dark:bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-1">
            {EDUCATION.map((edu) => (
                <div key={edu.id} className="bg-white dark:bg-dark-lighter border border-slate-200 dark:border-slate-800 p-8 rounded-2xl hover:border-primary/50 transition-colors group relative overflow-hidden max-w-3xl shadow-sm hover:shadow-md">
                    <div className="absolute top-0 right-0 p-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors pointer-events-none"></div>
                    
                    <div className="flex flex-col md:flex-row md:items-start gap-6 relative z-10">
                        <div className="flex-shrink-0">
                            <div className="w-16 h-16 bg-slate-100 dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-700 shadow-sm dark:shadow-lg text-primary">
                                <GraduationCap size={32} />
                            </div>
                        </div>
                        
                        <div className="flex-grow space-y-2">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">{edu.degree}</h3>
                                <span className="flex items-center gap-2 text-primary bg-primary/10 px-3 py-1 rounded-full text-sm font-semibold w-fit whitespace-nowrap border border-primary/20">
                                    <Calendar size={14} />
                                    {edu.period}
                                </span>
                            </div>
                            
                            <p className="text-lg text-slate-600 dark:text-slate-300 font-medium">{edu.institution}</p>
                            
                            <div className="pt-2 flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
                                <Award size={16} className="text-yellow-600 dark:text-yellow-500" />
                                <span>{edu.grade}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Education;