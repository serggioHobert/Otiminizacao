"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function CactosDivider() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [80, -30]);

  return (
    <div ref={ref} className="w-full h-32 relative overflow-hidden flex items-end justify-between px-10 md:px-20 -mb-1">
      <motion.div style={{ y: y1 }} className="text-foreground opacity-90">
        <svg width="40" height="80" viewBox="0 0 40 80" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M25 0H15V80H25V0Z" />
          <path d="M15 20H5V40H15V20Z" />
          <path d="M5 20C2.23858 20 0 22.2386 0 25V35C0 37.7614 2.23858 40 5 40H15V20H5Z" />
          <path d="M35 10H25V30H35V10Z" />
          <path d="M35 30C37.7614 30 40 27.7614 40 25V15C40 12.2386 37.7614 10 35 10H25V30H35Z" />
        </svg>
      </motion.div>
      <motion.div style={{ y: y2 }} className="text-foreground opacity-90">
        <svg width="60" height="100" viewBox="0 0 60 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M35 0H25V100H35V0Z" />
          <path d="M25 30H10V60H25V30Z" />
          <path d="M25 50H45V80H25V50Z" />
          <circle cx="10" cy="45" r="10" />
          <circle cx="45" cy="65" r="10" />
        </svg>
      </motion.div>
    </div>
  );
}

export function SunBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden flex items-center justify-center md:justify-end md:pr-40 z-[-1] opacity-20 md:opacity-10">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-gradient-to-tr from-amarelo/20 to-amarelo/60 blur-[100px]"
      />
    </div>
  );
}

export function FooterSilhouette() {
  return (
    <div className="w-full relative mt-20">
      {/* Represents the base silhouette of the Sertão */}
      <svg viewBox="0 0 1440 320" className="w-full h-auto block" preserveAspectRatio="none">
        <path
          fill="var(--color-foreground)"
          fillOpacity="1"
          d="M0,256L48,245.3C96,235,192,213,288,218.7C384,224,480,256,576,261.3C672,267,768,245,864,213.3C960,181,1056,139,1152,144C1248,149,1344,203,1392,229.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
        {/* Adds some cacti vectors directly in the SVG */}
        <g transform="translate(200, 150) scale(0.6)">
           <path fill="var(--color-foreground)" d="M25 0H15V80H25V0ZM15 20H5V40H15V20ZM5 20C2.2 20 0 22.2 0 25V35C0 37.8 2.2 40 5 40H15V20H5ZM35 10H25V30H35V10ZM35 30C37.8 30 40 27.8 40 25V15C40 12.2 37.8 10 35 10H25V30H35Z" />
        </g>
        <g transform="translate(800, 100) scale(0.8)">
           <path fill="var(--color-foreground)" d="M25 0H15V80H25V0ZM15 20H5V40H15V20ZM5 20C2.2 20 0 22.2 0 25V35C0 37.8 2.2 40 5 40H15V20H5ZM35 10H25V30H35V10ZM35 30C37.8 30 40 27.8 40 25V15C40 12.2 37.8 10 35 10H25V30H35Z" />
        </g>
        <g transform="translate(1200, 120) scale(0.5)">
           <path fill="var(--color-foreground)" d="M25 0H15V80H25V0ZM15 20H5V40H15V20ZM5 20C2.2 20 0 22.2 0 25V35C0 37.8 2.2 40 5 40H15V20H5ZM35 10H25V30H35V10ZM35 30C37.8 30 40 27.8 40 25V15C40 12.2 37.8 10 35 10H25V30H35Z" />
        </g>
      </svg>
    </div>
  );
}
