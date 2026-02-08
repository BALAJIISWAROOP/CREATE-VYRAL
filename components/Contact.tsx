
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [emailError, setEmailError] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData({ ...formData, email: value });
    if (value && !validateEmail(value)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(formData.email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    setIsSending(true);
    
    // Simulate high-end network delay for psychological weight
    setTimeout(() => {
      setIsSending(false);
      setIsSubmitted(true);
      
      // Auto-reset after a while
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 8000);
    }, 1800);
  };

  return (
    <section id="contact" className="py-24 md:py-48 px-6 md:px-12 bg-[#fafafa] text-black relative overflow-hidden">
      {/* Subtle background decorative element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-neutral-100/50 skew-x-[-12deg] translate-x-1/4 pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-5">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-400 block mb-12"
            >
              Get in Touch
            </motion.span>
            
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-[-0.04em] leading-[0.9] mb-12">
              Let's craft <br /> <span className="serif italic font-light lowercase text-neutral-300">your</span> <br /> Legacy.
            </h2>
            
            <div className="space-y-12 mt-20">
              <div className="group">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 block mb-2">New Projects</span>
                <a href="mailto:createvyral@gmail.com" className="text-2xl md:text-3xl font-bold tracking-tight hover:text-neutral-500 transition-colors block">
                  createvyral@gmail.com
                </a>
              </div>
              
              <div className="group">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 block mb-2">Direct Contact</span>
                <a href="tel:+919985560865" className="text-2xl md:text-3xl font-bold tracking-tight hover:text-neutral-500 transition-colors block">
                  +91 99855 60865
                </a>
              </div>

              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 block mb-2">Social Hub</span>
                <div className="flex space-x-6 text-sm font-bold uppercase tracking-widest">
                  <a href="#" className="hover:text-neutral-500 transition-colors">IG</a>
                  <a href="#" className="hover:text-neutral-500 transition-colors">TW</a>
                  <a href="#" className="hover:text-neutral-500 transition-colors">LN</a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 relative min-h-[500px]">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div 
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full w-full flex flex-col justify-center items-center text-center p-12 bg-white border border-neutral-100 rounded-[3rem] shadow-xl relative overflow-hidden"
                >
                  {/* Particle Burst Effect */}
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, x: 0, y: 0 }}
                      animate={{ 
                        scale: [0, 1, 0],
                        x: (Math.random() - 0.5) * 400, 
                        y: (Math.random() - 0.5) * 400 
                      }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                      className="absolute w-2 h-2 bg-neutral-200 rounded-full"
                    />
                  ))}

                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', damping: 12, stiffness: 200, delay: 0.3 }}
                    className="w-24 h-24 bg-black text-white rounded-full flex items-center justify-center mb-10 shadow-lg"
                  >
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <motion.path 
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2.5" 
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </motion.div>

                  <div className="space-y-4">
                    <motion.h3 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-4xl md:text-6xl font-black uppercase tracking-tighter"
                    >
                      Thank <span className="serif italic font-light lowercase text-neutral-300">You</span>
                    </motion.h3>
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7 }}
                      className="text-neutral-400 font-medium tracking-wide max-w-xs mx-auto"
                    >
                      Our team has received your brief. We'll reach out within 24 hours to discuss the next steps.
                    </motion.p>
                  </div>

                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    onClick={() => setIsSubmitted(false)}
                    className="mt-12 text-[10px] font-black uppercase tracking-[0.4em] text-neutral-300 hover:text-black transition-colors"
                  >
                    Send another message
                  </motion.button>
                </motion.div>
              ) : (
                <motion.form 
                  key="contact-form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20, filter: 'blur(5px)' }}
                  onSubmit={handleSubmit}
                  className="space-y-12"
                >
                  <div className="relative group border-b border-neutral-200 py-6 transition-all focus-within:border-black">
                    <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400 absolute top-0 left-0 transition-all group-focus-within:text-black">Name</label>
                    <input 
                      required
                      disabled={isSending}
                      type="text" 
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-transparent text-2xl md:text-3xl outline-none placeholder:text-neutral-200 font-bold tracking-tight mt-2 disabled:opacity-50"
                    />
                  </div>
                  
                  <div className={`relative group border-b ${emailError ? 'border-red-500' : 'border-neutral-200'} py-6 transition-all focus-within:border-black`}>
                    <label className={`text-[10px] font-black uppercase tracking-widest ${emailError ? 'text-red-500' : 'text-neutral-400'} absolute top-0 left-0 transition-all group-focus-within:text-black`}>Email</label>
                    <input 
                      required
                      disabled={isSending}
                      type="email" 
                      placeholder="hello@domain.com"
                      value={formData.email}
                      onChange={handleEmailChange}
                      className="w-full bg-transparent text-2xl md:text-3xl outline-none placeholder:text-neutral-200 font-bold tracking-tight mt-2 disabled:opacity-50"
                    />
                    {emailError && (
                      <motion.span 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute -bottom-6 left-0 text-[10px] font-bold uppercase tracking-widest text-red-500"
                      >
                        {emailError}
                      </motion.span>
                    )}
                  </div>

                  <div className="relative group border-b border-neutral-200 py-6 transition-all focus-within:border-black">
                    <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400 absolute top-0 left-0 transition-all group-focus-within:text-black">Message</label>
                    <textarea 
                      required
                      disabled={isSending}
                      rows={3}
                      placeholder="Tell us about your goals"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-transparent text-2xl md:text-3xl outline-none resize-none placeholder:text-neutral-200 font-bold tracking-tight mt-2 disabled:opacity-50"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSending}
                    className="group relative w-full md:w-auto px-12 py-8 bg-black text-white rounded-full overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <div className="absolute inset-0 bg-neutral-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                    <span className="relative z-10 flex items-center justify-center uppercase text-xs font-black tracking-[0.4em] min-h-[20px]">
                      <AnimatePresence mode="wait">
                        {isSending ? (
                          <motion.div 
                            key="spinner"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            className="flex items-center justify-center"
                          >
                            <svg className="animate-spin h-6 w-6 text-white" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                          </motion.div>
                        ) : (
                          <motion.span 
                            key="text"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex items-center"
                          >
                            Send Inquiry
                            <svg className="w-5 h-5 ml-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </span>
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
