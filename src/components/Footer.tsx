import { Github, Linkedin, Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white pt-16 pb-8 text-slate-600">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
          <div className="text-2xl font-bold font-sans text-slate-800">
            Vinodh Yemireddi
          </div>

          <div className="flex items-center gap-6">
            <a href="https://github.com/vinodh2008" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-accent-blue transition-colors hover:-translate-y-1 transform duration-300">
              <Github size={22} />
            </a>
            <a href="https://www.linkedin.com/in/vinodh-yemireddi" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-accent-blue transition-colors hover:-translate-y-1 transform duration-300">
              <Linkedin size={22} />
            </a>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {currentYear} Vinodh Yemireddi. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart size={14} className="text-accent-pink" /> and React.
          </p>
        </div>
      </div>
    </footer>
  );
};
