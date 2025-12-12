import React, { useState, useEffect } from 'react';
import { Menu, X, Linkedin, Mail, Sun, Moon } from 'lucide-react';
import { SectionId } from '../types';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Initialize theme from local storage or system preference
    const storedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (storedTheme === 'dark' || (!storedTheme && systemPrefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const navItems = [
    { label: 'About', href: `#${SectionId.ABOUT}` },
    { label: 'Experience', href: `#${SectionId.EXPERIENCE}` },
    { label: 'Highlights', href: `#${SectionId.PROJECTS}` },
    { label: 'Education', href: `#${SectionId.EDUCATION}` },
    { label: 'Contact', href: `#${SectionId.CONTACT}` },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 80; // Approximate height of the fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled || mobileMenuOpen 
          ? 'bg-white/90 dark:bg-dark/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 py-3 shadow-sm dark:shadow-none' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a 
          href={`#${SectionId.HOME}`} 
          onClick={(e) => handleNavClick(e, `#${SectionId.HOME}`)}
          className="group flex items-center gap-3 text-slate-900 dark:text-white hover:opacity-90 transition-opacity"
        >
          {/* Logo Icon */}
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-sm tracking-widest shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform duration-300 border border-white/10">
            SK
          </div>
          {/* Logo Text */}
          <div className="text-xl font-bold tracking-tight">
            Sri <span className="text-primary">Kumar</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 px-3 py-2 rounded-lg transition-all"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Social Icons, Theme Toggle & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 border-l border-slate-300 dark:border-slate-700 pl-4">
             <button
               onClick={toggleTheme}
               className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-white p-2 hover:bg-slate-100 dark:hover:bg-white/5 rounded-full transition-colors"
               aria-label="Toggle theme"
             >
               {isDark ? <Sun size={18} /> : <Moon size={18} />}
             </button>
             <a href="https://www.linkedin.com/in/srikumarpadmanabhan/" target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-[#0077b5] dark:hover:text-white transition-colors p-2 hover:bg-slate-100 dark:hover:bg-white/5 rounded-full" aria-label="LinkedIn"><Linkedin size={18} /></a>
             <a href="mailto:sriikumarp@gmail.com" className="text-slate-500 dark:text-slate-400 hover:text-red-500 dark:hover:text-white transition-colors p-2 hover:bg-slate-100 dark:hover:bg-white/5 rounded-full" aria-label="Email"><Mail size={18} /></a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
               onClick={toggleTheme}
               className="text-slate-600 dark:text-slate-300 p-2 hover:bg-slate-100 dark:hover:bg-white/10 rounded-lg transition-colors"
             >
               {isDark ? <Sun size={20} /> : <Moon size={20} />}
             </button>
            <button 
              className="text-slate-900 dark:text-white p-2 hover:bg-slate-100 dark:hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-dark border-b border-slate-200 dark:border-slate-800 animate-in slide-in-from-top-5 duration-200 shadow-xl">
           <nav className="flex flex-col p-6 gap-2">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-base font-medium text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 px-4 py-3 rounded-xl transition-all"
              >
                {item.label}
              </a>
            ))}
             <div className="flex gap-4 mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 justify-center">
                <a href="https://www.linkedin.com/in/srikumarpadmanabhan/" target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-[#0077b5] dark:hover:text-white p-2" aria-label="LinkedIn"><Linkedin size={24} /></a>
                <a href="mailto:sriikumarp@gmail.com" className="text-slate-500 dark:text-slate-400 hover:text-red-500 dark:hover:text-white p-2" aria-label="Email"><Mail size={24} /></a>
             </div>
           </nav>
        </div>
      )}
    </header>
  );
};

export default Header;