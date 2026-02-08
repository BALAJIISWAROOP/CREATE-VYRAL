
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-48 px-6 md:px-12 bg-black text-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          <div className="lg:col-span-7">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 block mb-12"
            >
              Who We Are
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-black uppercase tracking-[-0.04em] mb-16 leading-[0.9]"
            >
              The silent engine <br /> 
              <span className="serif italic font-light lowercase text-white/40 tracking-tight">behind</span> <br /> 
              digital giants.
            </motion.h2>
            
            <div className="space-y-12 max-w-2xl">
              <p className="text-xl md:text-3xl font-light text-white/60 leading-tight">
                Create Vyral is a <span className="text-white font-medium italic">backstage powerhouse</span> engineered for the modern era of storytelling. 
              </p>
              <p className="text-lg md:text-xl font-light text-white/40 leading-relaxed">
                We bridge the gap between creative raw talent and corporate scaling. Having scaled <span className="text-white">50M+ views</span> for 1300+ creators, we understand the architecture of attention. Our mission is simple: you focus on the art, we master the impact.
              </p>
            </div>

            <div className="mt-24 grid grid-cols-2 gap-y-12 gap-x-8 md:flex md:space-x-24">
              {[
                { label: "Views Generated", value: "50M+" },
                { label: "Creators Powered", value: "1.3K" },
                { label: "Partner Brands", value: "20+" }
              ].map((stat, i) => (
                <div key={i}>
                  <span className="block text-4xl md:text-6xl font-black tracking-tight mb-2">{stat.value}</span>
                  <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative mt-20 lg:mt-0 flex flex-col items-end">
            {/* Primary Large Image */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-4/5 aspect-[3/4] overflow-hidden grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-1000 self-end"
            >
              <img 
                src="https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=800&auto=format&fit=crop" 
                alt="Production Strategy" 
                className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-[2s]"
              />
              <div className="absolute inset-0 border-[20px] border-black/50 pointer-events-none"></div>
            </motion.div>
            
            {/* Secondary Overlapping Image */}
            <motion.div 
              initial={{ opacity: 0, y: 40, x: -20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-12 left-0 w-3/5 aspect-square overflow-hidden grayscale brightness-50 hover:grayscale-0 hover:brightness-100 transition-all duration-1000 z-10 shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop" 
                alt="Backstage Studio" 
                className="w-full h-full object-cover scale-125 hover:scale-100 transition-transform duration-[2s]"
              />
              <div className="absolute inset-0 border-[10px] border-black/80 pointer-events-none"></div>
              <div className="absolute top-4 left-4">
                <span className="text-[8px] font-black uppercase tracking-[0.4em] bg-white text-black px-2 py-1">Live Studio</span>
              </div>
            </motion.div>
            
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-10 -left-10 w-32 h-32 md:w-48 md:h-48 rounded-full border border-white/10 flex items-center justify-center p-8 backdrop-blur-sm z-20 pointer-events-none"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full text-white/20 uppercase font-black tracking-[0.5em] text-[7px]">
                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                <text>
                  <textPath xlinkHref="#circlePath">
                    • BACKSTAGE TEAM • CREATOR FIRST • BRAND PARTNER • 
                  </textPath>
                </text>
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
