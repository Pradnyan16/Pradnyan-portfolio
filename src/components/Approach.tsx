"use client";

import { motion } from "framer-motion";

const phases = [
  {
    number: "01",
    title: "LEARN & EXPLORE",
    description: "Continuously learning AI, software development, and emerging technologies.",
  },
  {
    number: "02",
    title: "DESIGN & BUILD",
    description: "Creating modern websites, applications, and digital solutions.",
  },
  {
    number: "03",
    title: "GROW & IMPACT",
    description: "Delivering projects that solve problems and create meaningful value.",
  }
];

export default function Approach() {
  return (
    <section id="approach" className="w-full bg-[#000000] text-white py-32 border-b border-white/10 relative overflow-hidden">
      
      {/* Top Labels */}
      <div className="absolute top-8 left-6 md:left-12 right-6 md:right-12 flex justify-between items-center font-mono text-[10px] uppercase tracking-widest text-zinc-500">
        <span>02</span>
        <span>// Approach</span>
        <span className="hidden md:block">Three Phases</span>
      </div>

      <div className="w-full flex flex-col items-center">
        
        {/* Massive Center Text */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto mt-12 mb-8 px-6 md:px-12"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[1.1] mb-6">
            BUILDING THE FUTURE<br className="hidden md:block"/> WITH CODE, AI & CREATIVITY.
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 font-medium">
            Computer Technology student crafting innovative digital experiences.
          </p>
        </motion.div>

        {/* Phase Timeline Nodes */}
        <motion.div 
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-3xl mx-auto relative flex justify-between items-center my-24 px-12 md:px-0"
        >
          {/* Connecting Line */}
          <div className="absolute left-12 right-12 md:left-0 md:right-0 top-1/2 -translate-y-1/2 h-[1px] bg-white/10 -z-10"></div>
          
          {phases.map((phase) => (
            <div key={phase.number} className="w-12 h-12 rounded-full bg-[#000000] border border-white/20 flex items-center justify-center font-mono text-xs text-white z-10">
              {phase.number}
            </div>
          ))}
        </motion.div>

        {/* Phase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 w-full border-t border-white/10">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.title}
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
              className="flex flex-col items-center text-center p-12 md:p-16 border-b md:border-b-0 md:border-r border-white/10 last:border-r-0 hover:bg-white/5 transition-colors cursor-crosshair group"
            >
              {/* Three dots */}
              <div className="flex gap-1.5 mb-10">
                <div className="w-1.5 h-1.5 rounded-full bg-white group-hover:bg-zinc-400 transition-colors"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-zinc-500 transition-colors"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-zinc-600 transition-colors"></div>
              </div>

              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-4 text-white">
                {phase.title}
              </h3>
              <p className="text-sm font-mono text-zinc-500 leading-relaxed max-w-xs">
                {phase.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
