import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 dark:bg-dark border-t border-slate-200 dark:border-slate-800 py-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-600 dark:text-slate-500 text-sm">
          © {new Date().getFullYear()} Sri Kumar Padmanabhan. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-slate-600 dark:text-slate-500">
          <a href="#" className="hover:text-primary dark:hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary dark:hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;