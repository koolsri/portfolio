import React from 'react';
import { CERTIFICATIONS } from '../constants';
import { SectionId } from '../types';
import { ExternalLink, Award } from 'lucide-react';

const Certifications: React.FC = () => {
    return (
        <section id={SectionId.CERTIFICATIONS} className="py-20 scroll-mt-24 bg-white dark:bg-dark relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Certifications</h2>
                    <div className="w-20 h-1 bg-primary rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {CERTIFICATIONS.map((cert, idx) => (
                        <a
                            key={idx}
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block p-6 bg-slate-50 dark:bg-dark-lighter/50 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Award size={64} />
                            </div>

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="mb-4">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                        <Award size={20} className="text-primary" />
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors leading-tight mb-2">
                                        {cert.name}
                                    </h3>
                                    <div className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                        {cert.issuer}
                                    </div>
                                </div>

                                <div className="mt-auto pt-4 flex items-center justify-between text-slate-500 dark:text-slate-400 text-sm border-t border-slate-200 dark:border-slate-700/50">
                                    <span>{cert.date}</span>
                                    <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform dark:text-slate-500 group-hover:text-primary" />
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
