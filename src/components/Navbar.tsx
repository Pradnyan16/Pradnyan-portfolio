"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: false }));
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="w-full border-b border-white/10 px-6 py-4 flex items-center justify-between z-50 absolute top-0 font-mono text-xs md:text-sm tracking-widest uppercase"
    >
      <div className="flex-1 flex items-center gap-1 md:gap-2">
        <span className="text-zinc-500">LOCAL/</span>
        <span className="text-white min-w-[70px]">{time}</span>
      </div>

      <div className="hidden md:flex flex-1 justify-center gap-8 text-zinc-500">
        <Link href="/" className="hover:text-white transition-colors">HOME</Link>
        <Link href="/#projects" className="hover:text-white transition-colors">PROJECTS</Link>
        <Link href="/blog" className="hover:text-white transition-colors">BLOG</Link>
        <Link href="/#contact" className="hover:text-white transition-colors">CONTACT</Link>
      </div>

      <div className="flex-1 flex justify-end">
        <Link 
          href="#contact" 
          className="border border-white hover:bg-white hover:text-black transition-colors rounded-full px-6 py-2 text-white font-medium tracking-widest text-xs md:text-sm"
        >
          CONTACT NOW
        </Link>
      </div>
    </motion.header>
  );
}
