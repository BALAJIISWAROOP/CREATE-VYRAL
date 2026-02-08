
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.1; // Reduced threshold for earlier activation
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.startsWith('#') ? href : `#${href}`;
    const gsap = (window as any).gsap;
    if (gsap) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: id, offsetY: 80 },
        ease: "power4.inOut"
      });
    }
    setMobileMenuOpen(false);
  };

  // Animation Variants
  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        when: "afterChildren"
      }
    },
    opened: {
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const linkVariants = {
    closed: {
      opacity: 0,
      y: 40,
      transition: { duration: 0.4 }
    },
    opened: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const footerVariants = {
    closed: { opacity: 0, y: 20 },
    opened: { 
      opacity: 1, 
      y: 0,
      transition: { delay: 0.8, duration: 0.8 }
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ease-[0.16,1,0.3,1] ${
          isScrolled 
            ? 'bg-[#080808]/90 backdrop-blur-2xl py-4 border-b border-white/5' 
            : 'bg-transparent py-10 border-b border-transparent'
        }`}
        role="navigation"
        aria-label="Main Navigation"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
          <motion.a 
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`text-xl font-black tracking-tighter transition-all duration-500 ${isScrolled ? 'scale-90' : 'scale-100'}`}
          >
            VYRAL<span className="text-white/20">.</span>
          </motion.a>

          <div className="flex items-center space-x-12">
            <ul className="hidden md:flex items-center space-x-10">
              {NAV_LINKS.map((link, idx) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx }}
                >
                  <a 
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-[10px] font-black uppercase tracking-[0.3em] transition-colors duration-300 focus:outline-none relative group overflow-hidden ${
                      isScrolled ? 'text-white/70 hover:text-white' : 'text-white/50 hover:text-white'
                    }`}
                  >
                    <span className="inline-block transition-transform duration-500 group-hover:-translate-y-full">{link.name}</span>
                    <span className="absolute left-0 top-full inline-block transition-transform duration-500 group-hover:-translate-y-full text-white">{link.name}</span>
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="flex items-center space-x-6">
               <button 
                onClick={() => setMobileMenuOpen(true)}
                className="md:hidden flex flex-col space-y-1.5 group focus:outline-none"
                aria-label="Open navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                <span className={`h-[2px] bg-white transition-all duration-500 ${isScrolled ? 'w-6' : 'w-8'}`}></span>
                <span className={`h-[2px] bg-white ml-auto transition-all duration-500 ${isScrolled ? 'w-4' : 'w-5'}`}></span>
              </button>

              <a 
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className={`hidden md:block px-6 py-2.5 rounded-full border border-white/10 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500 ${
                  isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                }`}
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="opened"
            exit="closed"
            className="fixed inset-0 bg-[#080808]/95 backdrop-blur-2xl z-[200] flex flex-col p-12"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            <div className="flex justify-between items-center mb-24">
              <span className="text-xl font-black tracking-tighter">VYRAL.</span>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 focus:text-white focus:outline-none group flex items-center"
                aria-label="Close navigation menu"
              >
                <span className="mr-4 opacity-0 group-hover:opacity-100 transition-opacity">Esc</span>
                Close
              </button>
            </div>
            
            <div className="flex flex-col space-y-6">
              {NAV_LINKS.map((link) => (
                <motion.div key={link.name} variants={linkVariants} className="overflow-hidden">
                  <a 
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="group relative inline-block text-5xl sm:text-7xl font-black uppercase tracking-tighter outline-none"
                  >
                    <span className="relative z-10 group-hover:text-white/30 transition-colors duration-500">{link.name}</span>
                    <span className="serif italic font-light lowercase absolute left-0 -bottom-2 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 text-white/10 pointer-events-none">
                      {link.name}
                    </span>
                  </a>
                </motion.div>
              ))}
            </div>

            <motion.div 
              variants={footerVariants}
              className="mt-auto border-t border-white/5 pt-12"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 block mb-6">Connect / Collaborate</span>
              <div className="flex flex-wrap gap-x-12 gap-y-4 text-xs font-bold uppercase tracking-widest">
                {['Instagram', 'Twitter', 'LinkedIn', 'YouTube'].map(social => (
                  <a key={social} href="#" className="text-white/40 hover:text-white transition-colors relative group">
                    {social}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full"></span>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
