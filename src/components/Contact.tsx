import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    if (errors[id]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[id];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');

    try {
      // Using Web3Forms - User needs to replace with their own access key
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '92cfc28a-5444-43c1-8b36-0925467c5ff7', // User should replace this
          from_name: formData.name,
          ...formData
        })
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="flex flex-col items-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-4 text-[#2b6cb0]"
        >
          Get In Touch
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-1 w-20 bg-[#3b82f6] rounded-full"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-slate-800 mb-6 transition-colors duration-300">Let's talk about your project</h3>
          <p className="text-slate-600 mb-8 leading-relaxed">
            I'm currently available for freelance work or full-time opportunities.
            If you have a project that needs some creative magic or just want to
            say hi, drop me a message!
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#f0f7ff] border border-blue-100 flex items-center justify-center text-[#3b82f6] shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Email Me at</p>
                <a href="mailto:yemireddivinodh@gmail.com" className="text-lg text-slate-800 hover:text-[#2b6cb0] transition-colors break-all">
                  yemireddivinodh@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#f0f7ff] border border-blue-100 flex items-center justify-center text-[#3b82f6] shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Location</p>
                <p className="text-lg text-slate-800">
                  Andhra Pradesh, India
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl space-y-5 border border-slate-200 shadow-sm relative overflow-hidden">
            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-white/95 z-20 flex flex-col items-center justify-center text-center p-6"
                >
                  <CheckCircle2 size={48} className="text-green-500 mb-4" />
                  <h4 className="text-xl font-bold text-slate-800 mb-2">Message Sent!</h4>
                  <p className="text-slate-600">Thank you for reaching out. I'll get back to you soon.</p>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold text-slate-600">Your Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-[#f4faff] border ${errors.name ? 'border-red-300 ring-1 ring-red-100' : 'border-blue-100'} rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] transition-all`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-xs text-red-500 flex items-center gap-1 mt-1"><AlertCircle size={12} /> {errors.name}</p>}
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-slate-600">Your Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-[#f4faff] border ${errors.email ? 'border-red-300 ring-1 ring-red-100' : 'border-blue-100'} rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] transition-all`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-xs text-red-500 flex items-center gap-1 mt-1"><AlertCircle size={12} /> {errors.email}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-semibold text-slate-600">Subject</label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-[#f4faff] border border-blue-100 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] transition-all"
                placeholder="Project Inquiry"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-semibold text-slate-600">Message</label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className={`w-full bg-[#f4faff] border ${errors.message ? 'border-red-300 ring-1 ring-red-100' : 'border-blue-100'} rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] transition-all resize-none`}
                placeholder="Hello there..."
              />
              {errors.message && <p className="text-xs text-red-500 flex items-center gap-1 mt-1"><AlertCircle size={12} /> {errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className={`w-full py-4 rounded-xl bg-[#3b82f6] text-white font-bold flex items-center justify-center gap-2 hover:bg-[#2563eb] hover:shadow-lg transition-all group disabled:bg-blue-300 disabled:cursor-not-allowed`}
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </button>

            {status === 'error' && (
              <p className="text-sm text-red-500 text-center mt-4 bg-red-50 py-2 rounded-lg border border-red-100">
                Oops! Something went wrong. Please try again or email me directly.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};
