import { motion } from 'framer-motion';
import { Brain, Users, MessageSquare, Compass, Palette } from 'lucide-react';

const TechSkill = ({ name, percent }: { name: string; percent: number }) => (
  <div className="mb-6">
    <div className="flex justify-between mb-2">
      <span className="text-slate-800 font-medium">{name}</span>
      <span className="text-accent-blue font-bold">{percent}%</span>
    </div>
    <div className="w-full bg-slate-100 rounded-full h-3 border border-slate-200 overflow-hidden">
      <motion.div
        className="bg-[#3b82f6] h-full rounded-full shadow-[0_0_15px_rgba(56,189,248,0.3)]"
        initial={{ width: 0 }}
        whileInView={{ width: `${percent}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
      />
    </div>
  </div>
);

const SoftSkill = ({ name, percent, icon }: { name: string; percent: number; icon: React.ReactNode }) => {
  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-32 h-32 flex items-center justify-center mb-4">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="64" cy="64" r={radius}
            stroke="currentColor" strokeWidth="8" fill="transparent"
            className="text-slate-200"
          />
          <motion.circle
            cx="64" cy="64" r={radius}
            stroke="currentColor" strokeWidth="8" fill="transparent"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: 'easeOut', delay: 0.3 }}
            strokeLinecap="round"
            className="text-[#3b82f6] drop-shadow-[0_0_10px_rgba(56,189,248,0.3)]"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <div className="text-slate-800 mb-1 drop-shadow-sm">{icon}</div>
          <span className="text-sm font-bold text-accent-blue">{percent}%</span>
        </div>
      </div>
      <span className="text-slate-600 font-semibold text-center">{name}</span>
    </div>
  );
};

export const Skills = () => {
  const technicalSkills = [
    { name: "Python", percent: 90 },
    { name: "SQL", percent: 90 },
    { name: "JavaScript", percent: 80 },
    { name: "React", percent: 50 },
    { name: "ML", percent: 50 },


    { name: "Networking", percent: 70 },

  ];

  const softSkills = [
    { name: "Teamwork", percent: 98, icon: <Users size={24} /> },
    { name: "Creativity", percent: 97, icon: <Palette size={24} /> },
    { name: "Adaptability", percent: 95, icon: <Compass size={24} /> },
    { name: "Problem Solving", percent: 92, icon: <Brain size={24} /> },
    { name: "Communication", percent: 90, icon: <MessageSquare size={24} /> },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-[120px] z-[-1]" />

      <div className="flex flex-col items-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-4 text-[#2b6cb0]"
        >
          My Skills
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-1 w-24 bg-[#3b82f6] rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Technical Skills - Horizontal Bars */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-200 shadow-sm relative hover:shadow-md transition-shadow"
          >
            <div className="absolute -top-4 left-8 px-4 py-1.5 bg-[#f0f7ff] border border-blue-100 rounded-full text-[#3b82f6] font-semibold text-sm shadow-sm">
              Technical Skills
            </div>
            <div className="pt-4">
              {technicalSkills.map((skill, idx) => (
                <TechSkill key={idx} name={skill.name} percent={skill.percent} />
              ))}
            </div>
          </motion.div>

          {/* Soft Skills - Circular Charts */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-50 rounded-3xl p-8 lg:p-10 border border-slate-200 shadow-sm relative flex flex-col items-center justify-center hover:shadow-md transition-shadow"
          >
            <div className="absolute -top-4 right-8 px-4 py-1.5 bg-[#f0f7ff] border border-blue-100 rounded-full text-[#3b82f6] font-semibold text-sm shadow-sm">
              Soft Skills
            </div>

            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 pt-6 place-items-center">
              {softSkills.map((skill, idx) => (
                <SoftSkill key={idx} name={skill.name} percent={skill.percent} icon={skill.icon} />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
