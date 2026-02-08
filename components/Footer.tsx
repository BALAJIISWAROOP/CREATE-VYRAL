
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Footer: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    const gsap = (window as any).gsap;
    if (gsap) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: 0 },
        ease: "power4.inOut"
      });
    }
  };

  const socials = [
    {
      name: 'Instagram',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="1.5" />
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" strokeWidth="1.5" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454c.98 0 1.775-.773 1.775-1.729V1.729C24 .774 23.205 0 22.225 0z" />
        </svg>
      )
    },
    {
      name: 'Youtube',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      )
    }
  ];

  return (
    <>
      <footer className="py-12 px-6 md:px-12 bg-black text-white border-t border-white/5">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-2xl font-black tracking-tighter mb-2">
              CREATE VYRAL<span className="text-white/20">.</span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-white/30 text-center md:text-left">
              © 2024 Create Vyral Content Company. All rights reserved.
            </span>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-center space-y-8 md:space-y-0 md:space-x-12">
            {/* Social Icons with refined hover states */}
            <div className="flex items-center space-x-8">
              {socials.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ 
                    y: -5, 
                    scale: 1.25,
                    color: "#ffffff"
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 17 
                  }}
                  className="text-white/30 hover:text-white transition-all duration-300 flex items-center justify-center p-1"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* Back to Top Link */}
            <button 
              onClick={scrollToTop}
              className="text-[10px] uppercase tracking-[0.4em] text-white/30 hover:text-white transition-all duration-300 flex items-center group"
            >
              Back to Top <span className="ml-2 group-hover:-translate-y-1 transition-transform">↑</span>
            </button>
          </div>
        </div>
      </footer>

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-[90] w-12 h-12 md:w-16 md:h-16 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-500 group shadow-2xl"
            aria-label="Scroll to top"
          >
            <div className="relative flex flex-col items-center overflow-hidden">
              <span className="text-xl md:text-2xl font-light transform group-hover:-translate-y-12 transition-transform duration-500">↑</span>
              <span className="text-xl md:text-2xl font-light absolute top-12 group-hover:top-0 transition-all duration-500">↑</span>
            </div>
            
            {/* Visual feedback ring */}
            <div className="absolute inset-0 rounded-full border border-white/20 scale-100 group-hover:scale-110 opacity-100 group-hover:opacity-0 transition-all duration-500"></div>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Footer;
