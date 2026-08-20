import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Map, TrendingUp, Sparkles } from 'lucide-react';
import { AGENCY_INFO } from '../data/properties';

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

const AnimatedCounter: React.FC<CounterProps> = ({ end, suffix = '+', duration = 1800 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Ease out cubic
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOutProgress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
};

export const Stats: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="statistiques" className="py-8 md:py-12 bg-transparent relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4"
        >
          {/* Stat 1: 12+ Ans d'existence */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            id="stat-card-experience"
            className="bg-white/95 backdrop-blur-md rounded-xl p-5 sm:p-6 text-center border border-[#e7e2d9]/90 shadow-[0_4px_20px_rgba(0,21,42,0.04)] hover:shadow-lg flex flex-col items-center justify-center min-h-[135px] transition-all relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-amber-500/5 rounded-full -mr-6 -mt-6 group-hover:scale-150 transition-transform duration-500 pointer-events-none" />
            <span className="font-['Manrope'] font-black text-3xl sm:text-4xl text-[#d97706] tracking-tight mb-1">
              <AnimatedCounter end={12} suffix="+" />
            </span>
            <span className="font-['Work_Sans'] text-xs sm:text-sm font-medium text-[#43474d] text-balance">
              Ans d'existence
            </span>
          </motion.div>

          {/* Stat 2: 50+ Clients accompagnés */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            id="stat-card-clients"
            className="bg-white/95 backdrop-blur-md rounded-xl p-5 sm:p-6 text-center border border-[#e7e2d9]/90 shadow-[0_4px_20px_rgba(0,21,42,0.04)] hover:shadow-lg flex flex-col items-center justify-center min-h-[135px] transition-all relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-amber-500/5 rounded-full -mr-6 -mt-6 group-hover:scale-150 transition-transform duration-500 pointer-events-none" />
            <span className="font-['Manrope'] font-black text-3xl sm:text-4xl text-[#d97706] tracking-tight mb-1">
              <AnimatedCounter end={50} suffix="+" />
            </span>
            <span className="font-['Work_Sans'] text-xs sm:text-sm font-medium text-[#43474d] text-balance">
              Clients accompagnés
            </span>
          </motion.div>

          {/* Stat 3: 120+ Biens immobiliers */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            id="stat-card-properties"
            className="bg-white/95 backdrop-blur-md rounded-xl p-5 sm:p-6 text-center border border-[#e7e2d9]/90 shadow-[0_4px_20px_rgba(0,21,42,0.04)] hover:shadow-lg flex flex-col items-center justify-center min-h-[135px] transition-all relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-amber-500/5 rounded-full -mr-6 -mt-6 group-hover:scale-150 transition-transform duration-500 pointer-events-none" />
            <span className="font-['Manrope'] font-black text-3xl sm:text-4xl text-[#d97706] tracking-tight mb-1">
              <AnimatedCounter end={120} suffix="+" />
            </span>
            <span className="font-['Work_Sans'] text-xs sm:text-sm font-medium text-[#43474d] text-balance">
              Biens immobiliers
            </span>
          </motion.div>

          {/* Stat 4: Dakar Zone d'activité (Midnight Blue Card with animated icon) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.2 } }}
            id="stat-card-zone"
            className="bg-[#00152a] rounded-xl p-5 sm:p-6 text-center text-white border border-[#102a43] shadow-[0_6px_25px_rgba(0,21,42,0.2)] flex flex-col items-center justify-center min-h-[135px] transition-all relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
              className="mb-2 text-[#d97706]"
            >
              <Map className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2]" />
            </motion.div>
            <span className="font-['Manrope'] font-bold text-sm sm:text-base text-white tracking-tight leading-tight">
              Dakar & Sénégal
            </span>
            <span className="text-[10px] text-amber-300/80 uppercase tracking-widest mt-0.5 font-semibold">
              Zone d'activité
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
