import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

export const Certificates = () => {
  const certificates = [
    {
      title: "Python Certificate from APSSDC",
      icon: <Award size={40} className="text-blue-500 mb-4" />,
      link: "https://github.com/vinodh2008/Certificates/blob/main/python-internship%20certificate.pdf"
    },
    {
      title: "Basics of Gen AI from IBM",
      icon: <Award size={40} className="text-blue-500 mb-4" />,
      link: "https://skills.yourlearning.ibm.com/certificate/share/0e70b19fb9ewogICJvYmplY3RJZCIgOiAiUExBTi1CQUVGQ0NBQUQ1MjAiLAogICJvYmplY3RUeXBlIiA6ICJBQ1RJVklUWSIsCiAgImxlYXJuZXJDTlVNIiA6ICI3MDk1MjI5UkVHIgp931e31c41df-10"
    }
  ];

  return (
    <section id="certificates" className="py-24 relative bg-[#f0f7ff]">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="flex flex-col items-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-[#2b6cb0]"
          >
            Certificates
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 w-20 bg-[#3b82f6] rounded-full"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 justify-center">
          {certificates.map((cert, index) => (
            <motion.a
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:scale-[1.03] transition-all duration-300 transform flex flex-col items-center justify-center text-center group relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink size={18} className="text-blue-400" />
              </div>
              {cert.icon}
              <h3 className="text-xl font-bold text-slate-800 group-hover:text-[#2b6cb0] transition-colors leading-tight px-4">
                {cert.title}
              </h3>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
