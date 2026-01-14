import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Reveal } from '@/components/motion/Reveal';
import { SignatureEffect } from '@/components/effects/SignatureEffect';
import { SignatureInteraction } from '@/components/effects/SignatureInteraction';
import { LuInstagram, LuMail } from 'react-icons/lu';

// --- Fonts & Global Styles ---
// In a real app, these would be in index.css or imported from Google Fonts
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@300;600&family=Space+Grotesk:wght@300;500&family=Syne:wght@400;700;800&display=swap');
    
    :root {
      --color-bg: #121212;
      --color-paper: #F2F0E9;
      --color-accent: #CFA78A;
    }
    
    body {
      background-color: var(--color-bg);
      color: #F2F0E9;
      cursor: crosshair;
    }
    
    .font-syne { font-family: 'Syne', sans-serif; }
    .font-space { font-family: 'Space Grotesk', sans-serif; }
    .font-jp { font-family: 'Noto Serif JP', serif; }
    
    .vertical-text {
      writing-mode: vertical-rl;
      text-orientation: mixed;
      transform: rotate(180deg);
    }
    
    /* Custom Scrollbar */
    ::-webkit-scrollbar {
      width: 6px;
    }
    ::-webkit-scrollbar-track {
      background: #121212;
    }
    ::-webkit-scrollbar-thumb {
      background: #333;
    }
  `}</style>
);

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-start mix-blend-difference text-[#F2F0E9] font-space">
    <div className="flex flex-col leading-none">
      <span className="text-xs tracking-[0.2em] uppercase mb-1 opacity-70">Tokyo, Japan</span>
      <span className="font-bold text-2xl tracking-tighter">KISSATEN</span>
    </div>
    <div className="hidden md:flex gap-12 text-xs uppercase tracking-[0.1em]">
      {['Menu', 'Roasts', 'Atelier'].map((item) => (
        <a key={item} href="#" className="hover:line-through decoration-1 decoration-white/50 transition-all">
          {item}
        </a>
      ))}
    </div>
    <div className="md:hidden">
      <div className="space-y-1.5 cursor-pointer">
        <div className="w-8 h-0.5 bg-[#F2F0E9]"></div>
        <div className="w-6 h-0.5 bg-[#F2F0E9] ml-auto"></div>
      </div>
    </div>
  </nav>
);

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <header ref={ref} className="relative w-full h-screen flex items-center justify-center overflow-hidden font-space">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        <motion.div style={{ y }} className="w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1542617415-e5ff54c55d0a?q=80&w=2565&auto=format&fit=crop" 
            alt="Dark Urban Tokyo" 
            className="w-full h-full object-cover grayscale opacity-60 scale-110"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/30 to-[#121212]/80"></div>
      </div>

      {/* Vertical JP Text */}
      <motion.div 
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
        className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-10 hidden md:block"
      >
        <h2 className="font-jp vertical-text text-6xl text-white/10 select-none font-thin">
          喫茶店 ・ 東京
        </h2>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-20 text-center flex flex-col items-center max-w-5xl mx-auto px-4">
        <motion.span 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-[#CFA78A] text-xs md:text-sm tracking-[0.4em] uppercase mb-6"
        >
          Est. 2024 — Shibuya District
        </motion.span>
        
        <motion.h1 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-syne text-7xl md:text-9xl font-bold tracking-tighter leading-[0.85] mb-8"
        >
          CONCRETE<br/>
          <span className="font-thin italic font-serif">
            &
          </span> ESPRESSO
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="max-w-md text-white/60 text-sm md:text-base leading-relaxed"
        >
          A brutalist sanctuary for the modern coffee purist. Where industrial precision meets organic chaos in the heart of Tokyo.
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
      >
        <span className="text-[10px] tracking-widest uppercase">Explore</span>
        <div className="w-[1px] h-12 bg-white/30"></div>
      </motion.div>
    </header>
  );
};

const Philosophy = () => (
  <section className="relative w-full py-32 bg-[#F2F0E9] text-[#1A1A1A] overflow-hidden font-space">
    <div className="absolute top-0 right-0 w-1/3 h-full bg-[#E8E6DE] -z-0 hidden md:block"></div>
    
    <div className="container mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
        <div className="md:col-span-7">
          <Reveal>
            <h2 className="font-syne text-5xl md:text-8xl font-extrabold uppercase tracking-tight leading-none mb-12">
              The Art of<br/> extraction
            </h2>
          </Reveal>
          <div className="flex gap-8">
            <div className="w-12 h-[1px] bg-black mt-3 shrink-0"></div>
            <Reveal delay={0.4}>
              <p className="max-w-md text-lg leading-relaxed">
                We treat coffee not as a routine, but as a ritual. Our beans are roasted in small batches within our concrete walls, filling the industrial void with the warmth of distinct, complex aromas.
              </p>
            </Reveal>
          </div>
        </div>
        <div className="md:col-span-5">
          <Reveal delay={0.6} width="100%">
            <div className="relative aspect-[4/5] overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2671&auto=format&fit=crop" 
                alt="Pour over coffee" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2">
                <span className="text-xs uppercase tracking-widest font-bold">Process 01</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

const MenuItem = ({ name, price, desc }: { name: string; price: string; desc: string }) => (
  <motion.div 
    className="group cursor-pointer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-baseline justify-between">
      <span className="text-lg font-medium group-hover:translate-x-2 transition-transform duration-300">{name}</span>
      <div className="flex-grow border-b border-dashed border-black/20 mx-4 -translate-y-1"></div>
      <span className="font-mono opacity-60">{price}</span>
    </div>
    <p className="text-xs text-black/50 mt-1 ml-0 group-hover:translate-x-2 transition-transform duration-300 delay-75">{desc}</p>
  </motion.div>
);

const Menu = () => (
  <section className="relative w-full py-32 bg-[#F2F0E9] text-[#1A1A1A] font-space">
    <div className="container mx-auto px-6 max-w-4xl">
      <Reveal>
        <div className="flex items-baseline justify-between mb-20 border-b border-black/10 pb-6">
          <h2 className="font-syne text-4xl md:text-6xl font-bold uppercase tracking-tight">Beverage<br/>Manifest</h2>
          <span className="font-jp text-2xl opacity-40">メニュー</span>
        </div>
      </Reveal>

      {/* Category: Espresso */}
      <div className="mb-16">
        <Reveal delay={0.2}>
          <div className="flex items-center gap-4 mb-8">
            <span className="w-3 h-3 bg-[#1A1A1A]"></span>
            <h3 className="text-xl font-bold uppercase tracking-widest">Black / Espresso</h3>
          </div>
        </Reveal>
        
        <div className="space-y-6">
          <MenuItem name="Double Espresso" price="¥500" desc="House Blend / Single Origin (+¥100)" />
          <MenuItem name="Long Black" price="¥600" desc="Double shot over hot water" />
          <MenuItem name="Cold Brew" price="¥700" desc="Kyoto-style slow drip (24hr)" />
        </div>
      </div>

      {/* Category: White */}
      <div className="mb-16">
        <Reveal delay={0.3}>
          <div className="flex items-center gap-4 mb-8">
            <span className="w-3 h-3 border border-[#1A1A1A]"></span>
            <h3 className="text-xl font-bold uppercase tracking-widest">White / Milk</h3>
          </div>
        </Reveal>
        
        <div className="space-y-6">
          <MenuItem name="Flat White" price="¥650" desc="Velvet micro-foam, double ristretto" />
          <MenuItem name="Oat Latte" price="¥750" desc="Organic oat milk, nutty profile" />
          <MenuItem name="Dirty Matcha" price="¥800" desc="Uji matcha, espresso shot, milk" />
        </div>
      </div>
    </div>
  </section>
);

const Interlude = () => (
  <section className="w-full h-[60vh] relative overflow-hidden font-space">
    <SignatureInteraction type="parallax" className="w-full h-full">
      <img 
        src="https://images.unsplash.com/photo-1550953831-2921509372fb?q=80&w=2670&auto=format&fit=crop" 
        alt="Industrial Interior" 
        className="w-full h-full object-cover grayscale"
      />
    </SignatureInteraction>
    <div className="absolute inset-0 bg-black/40 flex items-center justify-center pointer-events-none">
      <h2 className="text-white text-4xl md:text-6xl font-serif italic text-center">
        "Silence is the ingredient."
      </h2>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#121212] text-[#F2F0E9] py-20 px-6 border-t border-white/10 font-space">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="md:col-span-2">
        <h2 className="font-syne text-4xl font-bold tracking-tighter mb-6">KISSATEN</h2>
        <p className="text-white/50 max-w-xs leading-relaxed">
          A coffee roastery and design study inspired by the brutalist architecture of 1970s Tokyo.
        </p>
      </div>
      <div>
        <h4 className="text-xs uppercase tracking-widest text-[#CFA78A] mb-6">Visit</h4>
        <address className="not-italic text-sm text-white/70 space-y-2">
          <p>12-4 Udagawacho,</p>
          <p>Shibuya City,</p>
          <p>Tokyo 150-0042</p>
        </address>
      </div>
      <div>
        <h4 className="text-xs uppercase tracking-widest text-[#CFA78A] mb-6">Connect</h4>
        <ul className="text-sm text-white/70 space-y-2">
          <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2">Instagram</a></li>
          <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2">Line</a></li>
          <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2">Email</a></li>
        </ul>
      </div>
    </div>
    <div className="mt-20 pt-8 border-t border-white/5 flex justify-between items-center text-xs text-white/30 uppercase tracking-wider">
      <p>&copy; 2026 Kissaten Roastery</p>
      <p className="font-jp">設計</p>
    </div>
  </footer>
);

export default function Index() {
  return (
    <div className="antialiased bg-[#121212] min-h-screen">
      <GlobalStyles />
      <SignatureEffect />
      <Navbar />
      <Hero />
      <Philosophy />
      <Menu />
      <Interlude />
      <Footer />
    </div>
  );
}
