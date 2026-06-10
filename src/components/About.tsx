"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="w-full bg-[#000000] text-white py-24 border-b border-white/10">
      <div className="w-full flex flex-col xl:flex-row">
        {/* Section Header */}
        <div className="w-full xl:w-1/3 px-6 md:px-12 xl:border-r border-white/10 pb-12 xl:pb-0 relative">
           <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            className="sticky top-32"
           >
             <h2 className="font-mono text-xs md:text-sm tracking-widest text-zinc-500 uppercase mb-8">
               01 // About Me
             </h2>
             <p className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter uppercase leading-none break-words">
               Who <br/> I Am
             </p>
           </motion.div>
        </div>

        {/* About Content */}
        <div className="w-full xl:w-2/3 flex flex-col border-t xl:border-t-0 border-white/10 p-8 md:p-12">
           <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="prose prose-invert max-w-none"
           >
             <p className="text-xl md:text-3xl font-medium leading-relaxed text-zinc-300">
               Computer Technology undergraduate with interests in Full-Stack Development, Data Analytics, AI/ML, and UI/UX Design.
             </p>
             <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/10 pt-8">
               <div>
                 <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-4">Technical Foundation</h3>
                 <p className="text-zinc-400 font-mono text-sm leading-relaxed">
                   Skilled in Python, JavaScript, MySQL, Figma, and modern development tools. Experienced in building machine learning applications, designing user-centric interfaces, and developing practical solutions for real-world problems.
                 </p>
               </div>
               <div>
                 <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-4">Core Approach</h3>
                 <p className="text-zinc-400 font-mono text-sm leading-relaxed">
                   Strong analytical, problem-solving, and collaboration skills. I bring a passion for technology and innovation to every project, focusing on clean architecture and beautiful design.
                 </p>
               </div>
             </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
