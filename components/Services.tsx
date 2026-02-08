
import React, { useState, useEffect } from 'react';
import { SERVICES } from '../constants';
import { Service } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedService]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.3,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const handleInquireClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault();
    setSelectedService(null);
    const gsap = (window as any).gsap;
    if (gsap) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: '#contact', offsetY: 80 },
        ease: "power4.inOut"
      });
    }
  };

  return (
    <section 
      id="services" 
      className="py-24 md:py-48 px-6 md:px-12 bg-black text-white overflow-hidden"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-16 md:mb-32"
          >
            <h2 
              id="services-heading"
              className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none"
            >
              Our <br /> <span className="text-white/20">Expertise</span>
            </h2>
          </motion.div>

          <motion.div 
            className="divide-y divide-white/5 border-t border-white/5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            role="list"
          >
            {SERVICES.map((service, idx) => (
              <motion.div 
                key={service.id}
                variants={itemVariants}
                role="listitem"
                onClick={() => setSelectedService(service)}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedService(service)}
                className="group relative py-12 md:py-16 flex flex-col md:flex-row md:items-center justify-between cursor-pointer overflow-hidden px-4 -mx-4 transition-all duration-700 focus-within:bg-white/[0.05] outline-none"
                tabIndex={0}
                aria-haspopup="dialog"
              >
                {/* Background Reveal Layer */}
                <div 
                  className="absolute inset-0 bg-white/[0.03] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-700 ease-[0.16,1,0.3,1] pointer-events-none" 
                  aria-hidden="true"
                ></div>
                
                <div className="flex items-center md:w-3/5 relative z-10">
                  <span 
                    className="text-xs md:text-sm font-bold text-white/10 group-hover:text-white/40 transition-colors duration-500 w-12 md:w-20 block shrink-0"
                    aria-hidden="true"
                  >
                    0{idx + 1}
                  </span>
                  <div className="overflow-hidden">
                    <h3 className="text-3xl md:text-6xl font-black uppercase tracking-tight transform group-hover:translate-x-4 md:group-hover:translate-x-8 transition-transform duration-700 ease-[0.16,1,0.3,1]">
                      {service.title}
                    </h3>
                  </div>
                </div>
                
                <div className="mt-6 md:mt-0 md:w-1/3 relative z-10 flex items-center justify-between">
                  <motion.p 
                    variants={descriptionVariants}
                    className="text-white/30 group-hover:text-white/70 leading-relaxed font-light text-base md:text-lg transition-colors duration-500 max-w-sm"
                  >
                    {service.description}
                  </motion.p>
                  
                  {/* Action Indicator */}
                  <div 
                    className="hidden md:flex opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500 ml-8"
                    aria-hidden="true"
                  >
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500">
                      <svg 
                        className="w-5 h-5 text-white group-hover:text-black transform -rotate-45" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Visual feedback for screen readers */}
                <span className="sr-only">Open details for {service.title}</span>

                {/* Bottom Highlight Line */}
                <div 
                  className="absolute bottom-0 left-0 w-0 h-[1px] bg-white/20 group-hover:w-full transition-all duration-700 ease-in-out" 
                  aria-hidden="true"
                ></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div 
            className="fixed inset-0 z-[200] flex items-center justify-center px-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-xl"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative bg-[#0a0a0a] border border-white/10 w-full max-w-4xl p-8 md:p-16 rounded-[2rem] shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-8 right-8 text-[10px] font-black uppercase tracking-[0.4em] text-white/30 hover:text-white transition-colors"
                aria-label="Close details"
              >
                Close / Exit
              </button>

              <div className="flex flex-col space-y-12">
                <div className="space-y-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500">Service Insight</span>
                  <h2 id="modal-title" className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                    {selectedService.title}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <p className="text-xl md:text-2xl font-light text-white/80 leading-snug">
                      {selectedService.longDescription}
                    </p>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 block mb-6">Core Features</span>
                      <ul className="space-y-4">
                        {selectedService.features?.map((feature, i) => (
                          <li key={i} className="flex items-start space-x-4">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 shrink-0" aria-hidden="true" />
                            <span className="text-lg font-medium text-white/60 tracking-tight">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-8 border-t border-white/5 space-y-6">
                      <a 
                        href="#contact" 
                        onClick={handleInquireClick}
                        className="inline-flex items-center space-x-6 group"
                      >
                        <span className="text-xs font-black uppercase tracking-[0.4em]">Inquire for this service</span>
                        <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-110 transition-transform">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                      </a>

                      <button 
                        onClick={handleInquireClick}
                        className="w-full relative px-8 py-5 bg-white text-black rounded-full overflow-hidden transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] group flex items-center justify-center"
                      >
                        <div className="absolute inset-0 bg-neutral-200 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                        <span className="relative z-10 uppercase text-[10px] font-black tracking-[0.5em]">
                          Request a Consultation
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative detail */}
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
