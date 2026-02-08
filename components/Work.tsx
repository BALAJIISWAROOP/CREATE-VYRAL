
import React, { useState, useMemo } from 'react';
import { PROJECTS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const Work: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = useMemo(() => {
    const cats = ['All', ...new Set(PROJECTS.map(p => p.category))];
    return cats;
  }, []);

  const getCount = (cat: string) => {
    if (cat === 'All') return PROJECTS.length;
    return PROJECTS.filter(p => p.category === cat).length;
  };

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return PROJECTS;
    return PROJECTS.filter(p => p.category === activeFilter);
  }, [activeFilter]);

  const scrollToSectionTop = (e: React.MouseEvent) => {
    e.preventDefault();
    const gsap = (window as any).gsap;
    if (gsap) {
      gsap.to(window, {
        duration: 1.2,
        scrollTo: { y: "#work", offsetY: 80 },
        ease: "power4.inOut"
      });
    }
  };

  const getCategoryIcon = (category: string) => {
    const iconProps = { className: "w-3 h-3 transition-colors duration-500", strokeWidth: "2.5", fill: "none", stroke: "currentColor" };
    
    switch (category) {
      case 'Cinematography & Edit':
        return (
          <svg viewBox="0 0 24 24" {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        );
      case 'Viral Strategy':
        return (
          <svg viewBox="0 0 24 24" {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        );
      case 'Documentary Style':
        return (
          <svg viewBox="0 0 24 24" {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5S19.832 5.477 21 6.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section 
      id="work" 
      className="relative z-10 py-24 md:py-48 px-6 md:px-12 bg-white text-black"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 md:mb-32">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-400 block mb-8"
            >
              Selected Portfolio
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9]"
            >
              Selected <br /> <span className="serif italic font-light lowercase text-neutral-300">Works</span>
            </motion.h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-12 md:mt-0 text-lg md:text-xl max-w-sm text-neutral-500 font-light leading-snug"
          >
            A curated selection of cinematic storytelling and data-driven impact.
          </motion.p>
        </div>

        {/* Filter Controls Refined */}
        <div className="flex flex-wrap gap-x-12 gap-y-6 mb-20 border-b border-neutral-100 pb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className="relative group py-2 flex items-start space-x-1"
            >
              <span className={`text-[11px] font-black uppercase tracking-[0.3em] transition-all duration-500 ${
                activeFilter === cat 
                  ? 'text-black scale-105' 
                  : 'text-neutral-300 group-hover:text-neutral-500'
              }`}>
                {cat}
              </span>
              <span className={`text-[8px] font-bold transition-colors duration-500 ${
                activeFilter === cat ? 'text-black' : 'text-neutral-200 group-hover:text-neutral-400'
              }`}>
                {getCount(cat)}
              </span>
              {activeFilter === cat && (
                <motion.div 
                  layoutId="activeFilterUnderline"
                  className="absolute bottom-0 left-0 w-full h-[3px] bg-black"
                  transition={{ type: "spring", bounce: 0.25, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-24 md:gap-y-48 min-h-[600px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div 
                key={project.id} 
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={`work-item group cursor-pointer ${idx % 2 !== 0 ? 'md:mt-32' : ''}`}
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-neutral-50">
                  <motion.img 
                    layout
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                    <span className="text-white border border-white/30 px-8 py-3 rounded-full uppercase text-[10px] font-black tracking-[0.3em] backdrop-blur-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      Explore Case
                    </span>
                  </div>
                </div>
                
                <div className="mt-8 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-neutral-300 font-black mb-2 transition-colors duration-500 group-hover:text-black">
                        {getCategoryIcon(project.category)}
                        {project.category}
                      </span>
                      <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter group-hover:text-neutral-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                    <span className="text-xs font-black text-neutral-200 mt-2">/ 0{idx + 1}</span>
                  </div>
                  <div className="w-0 group-hover:w-full h-[1px] bg-black transition-all duration-700 ease-in-out"></div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-32 md:mt-48 flex flex-col items-center space-y-12">
          <button 
            onClick={scrollToSectionTop}
            className="group relative px-12 py-5 bg-black text-white rounded-full overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 shadow-xl"
          >
            <div className="absolute inset-0 bg-neutral-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            <span className="relative z-10 flex items-center justify-center uppercase text-[10px] font-black tracking-[0.4em]">
              View All Projects
              <svg className="w-4 h-4 ml-4 transform -rotate-45 group-hover:rotate-0 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
          </button>

          <a href="#" className="inline-block group relative">
            <span className="text-2xl md:text-4xl font-black uppercase tracking-tighter flex items-center">
              All Archives
              <svg className="w-8 h-8 ml-6 transform group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </span>
            <div className="mt-2 w-full h-[1px] bg-black/10 origin-left scale-x-100 group-hover:scale-x-0 transition-transform duration-500"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Work;
