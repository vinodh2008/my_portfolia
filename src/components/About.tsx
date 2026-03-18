import { motion } from 'framer-motion';
import { User, Code2, Globe } from 'lucide-react';

export const About = () => {
  const cards = [
    { title: 'Web Development', icon: <Code2 size={24} />, desc: 'Building responsive web platforms with React, HTML, CSS, and Bootstrap.' },
    { title: 'AI & Machine Learning', icon: <Globe size={24} />, desc: 'Exploring ML algorithms, computer vision, and data analysis using Python.' },
    { title: 'Networking', icon: <User size={24} />, desc: 'Deep understanding of OSI layer, DNS, protocols, and IP addressing.' }
  ];

  return (
    <section id="about" className="py-24 relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/about-bg.jpg')" }}>
      <div className="absolute inset-0 bg-white/90 backdrop-blur-sm z-0" />
      
      <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10">
        <div className="flex flex-col items-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 gradient-text"
          >
            About Me
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1.5 w-24 bg-blue-500/20 rounded-full relative overflow-hidden"
          >
            <motion.div 
              initial={{ x: "-100%" }}
              whileInView={{ x: "0%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute inset-0 bg-blue-500 rounded-full"
            />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                <span className="w-10 h-[2px] bg-blue-500 rounded-full shrink-0"></span>
                The Journey
              </h3>
              <div className="pl-13 space-y-4">
                <p className="text-slate-600 text-lg leading-relaxed">
                  I’m <span className="text-blue-600 font-bold underline decoration-blue-100 underline-offset-4">Vinodh</span>, a Diploma in Computer Engineering student from Andhra Pradesh. I am deeply passionate about 
                  <span className="text-slate-800 font-semibold mx-1">AI/ML, Web Development, and Networking</span>.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed">
                  I enjoy building projects that combine programming, data analysis, and real-world problem-solving. Currently, I am focused on mastering <span className="text-slate-800 font-medium">Advanced Python and React</span>, while exploring the intersection of AI with cybersecurity.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed">
                  With a strong technical foundation, I have honed my skills across both front-end and back-end development. I'm eager to apply my knowledge and continue growing in a professional environment.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white/80 backdrop-blur-md p-6 rounded-2xl flex gap-4 group hover:shadow-md border border-slate-200 transition-all duration-300"
              >
                <div className="p-3 bg-blue-50/80 rounded-xl border border-blue-100 text-[#3b82f6] group-hover:scale-110 group-hover:bg-blue-100 transition-all shrink-0">
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">{card.title}</h3>
                  <p className="text-slate-600 font-medium">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
