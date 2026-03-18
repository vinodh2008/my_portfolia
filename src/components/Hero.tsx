import { motion } from 'framer-motion';
import { ArrowDown, Mail } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-12 bg-[#f0f7ff]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Left Text Content */}
          <div className="flex-1 space-y-8 z-10 w-full text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-[#2b6cb0] leading-tight mb-4 tracking-tight">
                Vinodh Yemireddi
              </h1>
              <h2 className="text-xl md:text-2xl text-slate-700 font-medium">
                Passionate about AI & Web Development
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-500 max-w-2xl leading-relaxed mx-auto lg:mx-0"
            >
              I am a diploma computer engineering student from Andhra Pradesh, passionate about AI/ML, web development, and networking. I enjoy building projects that combine programming, data analysis, and real-world problem solving. Welcome to my personal space on the internet.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-4"
            >
              <a
                href="#projects"
                className="px-8 py-3.5 rounded-md bg-[#3b82f6] text-white font-medium hover:bg-[#2563eb] transition-colors flex items-center justify-center gap-2 group w-full sm:w-auto shadow-sm hover:shadow"
              >
                <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3.5 rounded-md bg-white border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 hover:text-[#2563eb] transition-all flex items-center justify-center gap-2 w-full sm:w-auto shadow-sm group"
              >
                <Mail size={18} className="text-slate-400 group-hover:text-[#2563eb]" />
                Get in Touch
              </a>
            </motion.div>
          </div>

          {/* Right Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", bounce: 0.4 }}
            className="flex-1 w-full max-w-md lg:max-w-lg relative flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]">
              {/* Outer decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-slate-200/60 shadow-[0_0_40px_rgba(59,130,246,0.1)] transition-transform duration-700 hover:scale-105" />
              
              {/* Inner image container */}
              <div className="absolute inset-2 rounded-full overflow-hidden bg-white shadow-xl shadow-blue-900/5">
                {/* Fallback avatar if profile.jpg is missing */}
                <img 
                  src="/vinodh_profile.jpg" 
                  alt="Vinodh Yemireddi" 
                  className="w-full h-full object-cover z-0"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800";
                  }}
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
