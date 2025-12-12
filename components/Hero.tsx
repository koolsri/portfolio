import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PROFILE_NAME, PROFILE_TAGLINE, PROFILE_TITLE, HERO_IMAGES, PROFILE_IMAGE } from '../constants';
import { SectionId } from '../types';
import ImageCarousel from './ImageCarousel';

const Hero: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id={SectionId.HOME} className="min-h-screen relative flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden gap-16">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none mix-blend-multiply dark:mix-blend-normal" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[128px] pointer-events-none mix-blend-multiply dark:mix-blend-normal" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center md:text-left">
           <div className="inline-block px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-primary text-xs font-semibold tracking-wider uppercase mb-2 animate-fade-in-up">
             Available for hire
           </div>
           <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
             Hi, I'm {PROFILE_NAME}. <br />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600 dark:to-purple-400">
               {PROFILE_TITLE}
             </span>
           </h1>
           <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg mx-auto md:mx-0 leading-relaxed">
             {PROFILE_TAGLINE}
           </p>
           
           <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
             <a 
               href={`#${SectionId.PROJECTS}`}
               onClick={(e) => handleNavClick(e, `#${SectionId.PROJECTS}`)}
               className="px-8 py-3.5 rounded-full bg-primary text-white font-medium hover:bg-indigo-600 transition-colors flex items-center justify-center gap-2 group cursor-pointer shadow-lg shadow-primary/20"
             >
               View Work
               <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
             </a>
             <a 
               href={`#${SectionId.CONTACT}`}
               onClick={(e) => handleNavClick(e, `#${SectionId.CONTACT}`)}
               className="px-8 py-3.5 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-white border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors font-medium flex items-center justify-center cursor-pointer shadow-sm"
             >
               Contact Me
             </a>
           </div>
        </div>

        <div className="relative mx-auto md:mr-0">
          <div className="w-64 h-64 md:w-80 md:h-80 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full opacity-20 blur-2xl animate-pulse"></div>
             {/* Profile Image */}
            <img 
              src={PROFILE_IMAGE} 
              alt="Profile" 
              className="relative w-full h-full object-cover object-top rounded-3xl rotate-3 border-2 border-white dark:border-slate-700 shadow-2xl hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* Image Carousel */}
      <div className="w-full max-w-7xl px-6 relative z-10 animate-fade-in-up delay-200">
        <ImageCarousel images={HERO_IMAGES} />
      </div>
      
    </section>
  );
};

export default Hero;