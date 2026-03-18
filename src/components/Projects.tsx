import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: "WildLens AI",
      description: "Identifies animals from images using deep learning and computer vision.",
      tags: ["Python", "TensorFlow"],
      image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?auto=format&fit=crop&q=80&w=800",
      github: "#",
      demo: "#"
    },
    {
      title: "SkillSwap",
      description: "Student-to-student learning platform",
      tags: ["HTML", "CSS", "JS"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="flex flex-col items-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-[#2b6cb0]"
          >
            Featured Projects
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 w-20 bg-[#3b82f6] rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl overflow-hidden group flex flex-col h-full border border-slate-200 shadow-sm hover:shadow-xl hover:scale-[1.03] transition-all duration-300 transform"
            >
              <div className="relative overflow-hidden aspect-video">
                <div className="absolute inset-0 bg-slate-800/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out z-0"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-1 relative z-20 bg-white">
                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-[#2b6cb0] transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-6 flex-1 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="text-xs font-semibold text-[#3b82f6] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 pt-4 border-t border-slate-100">
                  <a href={project.github} className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-[#2b6cb0] transition-colors">
                    <Github size={18} /> Code
                  </a>
                  <a href={project.demo} className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-[#2b6cb0] transition-colors ml-auto">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
