"use client";

import { motion } from "framer-motion";
import { MapPin, Globe, Award } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative w-full flex flex-col pt-32 md:pt-48 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col z-10 w-full"
      >
        <h1 className="text-[11vw] md:text-[11vw] lg:text-[12vw] font-black tracking-tighter text-center w-full text-white leading-none uppercase select-none">
          pradnyan.16
        </h1>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 border-t border-b border-white/10 mt-16 md:mt-24 py-0 md:py-8">
          <div className="flex flex-col items-center justify-center text-center px-4 md:border-r border-white/10 relative py-8 md:py-0 border-b md:border-b-0">
            <MapPin className="h-5 w-5 text-green-500 mb-4" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-white mb-1">
              Based in Pune,
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
              Maharashtra
            </span>
          </div>

          <div className="flex flex-col items-center justify-center text-center px-4 md:border-r border-white/10 relative py-8 md:py-0 border-b md:border-b-0">
            <Globe className="h-5 w-5 text-white mb-4" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-white mb-1">
              Available for Internships
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
              Worldwide
            </span>
          </div>

          <div className="flex flex-col items-center justify-center text-center px-4 relative py-8 md:py-0">
            <Award className="h-5 w-5 text-blue-500 mb-4" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-white mb-1">
              Computer Technology
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
              Undergraduate
            </span>
          </div>
        </div>

      </motion.div>
    </section>
  );
}
