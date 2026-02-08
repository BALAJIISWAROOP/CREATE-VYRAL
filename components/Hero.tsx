
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = id.startsWith('#') ? id : `#${id}`;
    const gsap = (window as any).gsap;
    if (gsap) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: target, offsetY: 80 },
        ease: "power4.inOut"
      });
    }
  };

  // High-end reveal variants
  const wordVariants = {
    hidden: { y: "110%", rotateZ: 5, skewY: 7, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      rotateZ: 0,
      skewY: 0,
      opacity: 1,
      transition: {
        duration: 1.4,
        delay: 0.1 + i * 0.1,
        ease: [0.215, 0.61, 0.355, 1.0]
      }
    })
  };

  const charVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.8 + i * 0.04,
        ease: [0.215, 0.61, 0.355, 1.0]
      }
    })
  };

  const SplitWord = ({ text, custom, className = "" }: { text: string, custom: number, className?: string }) => (
    <div className={`overflow-hidden inline-block ${className}`}>
      <motion.span
        variants={wordVariants}
        initial="hidden"
        animate="visible"
        custom={custom}
        className="inline-block origin-left"
      >
        {text}
      </motion.span>
    </div>
  );

  const SplitChars = ({ text, className = "" }: { text: string, className?: string }) => (
    <span className={`inline-flex ${className}`}>
      {text.split('').map((char, i) => (
        <span key={i} className="overflow-hidden inline-block">
          <motion.span
            variants={charVariants}
            initial="hidden"
            animate="visible"
            custom={i}
            className="inline-block"
          >
            {char}
          </motion.span>
        </span>
      ))}
    </span>
  );

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-40 pb-20 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[20%] right-[-5%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-[1400px] w-full mx-auto relative z-10">
        <div className="flex flex-col mb-12">
          <motion.span 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 mb-8"
          >
            Creative Ecosystem / 2024
          </motion.span>
          
          <h1 className="text-[14vw] sm:text-[12vw] md:text-[10vw] font-black leading-[0.8] tracking-[-0.04em] uppercase">
            <div className="flex flex-wrap items-baseline gap-x-4">
              <SplitWord text="Mastering" custom={0} />
              <SplitWord 
                text="the" 
                custom={1} 
                className="serif italic font-light lowercase text-white/30 tracking-tight" 
              />
            </div>
            <div className="block">
              <SplitWord text="Digital" custom={2} />
            </div>
            <div className="flex flex-wrap items-baseline gap-x-4">
              <SplitChars text="Impact" className="text-outline" />
              <SplitChars text="." />
            </div>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mt-12 md:mt-24">
          <div className="lg:col-span-5">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="text-lg md:text-xl text-white/50 leading-relaxed font-light max-w-md"
            >
              We are the backstage engine for the world's most ambitious creators. 
              Engineering virality through cinematic vision and data-driven strategy.
            </motion.p>
          </div>
          
          <div className="lg:col-span-7 flex flex-col items-start lg:items-end space-y-6 md:space-y-8">
            <motion.a 
              href="#work"
              onClick={(e) => scrollToSection(e, 'work')}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 1 }}
              className="group relative inline-flex items-center space-x-8"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500 overflow-hidden">
                <svg className="w-8 h-8 text-white group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.4em] group-hover:translate-x-2 transition-transform duration-500">
                Explore Selected Works
              </span>
            </motion.a>

            <motion.a 
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 1 }}
              className="group relative inline-flex items-center space-x-8 lg:mr-4"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-blue-500 group-hover:border-blue-500 transition-all duration-500 overflow-hidden">
                <svg className="w-5 h-5 text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40 group-hover:text-white transition-colors duration-500">
                Work With Us
              </span>
            </motion.a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-6 md:left-12 flex items-center space-x-6">
        <div className="flex -space-x-3">
          {[1,2,3].map(i => (
            <div key={i} className="w-8 h-8 rounded-full border-2 border-[#080808] bg-neutral-800 overflow-hidden">
              <img src={`https://picsum.photos/100/100?random=${i+10}`} alt="Creator" />
            </div>
          ))}
        </div>
        <span className="text-[10px] font-bold uppercase tracking-widest text-white/30">
          Trusted by 1300+ Creators
        </span>
      </div>
    </section>
  );
};

export default Hero;
