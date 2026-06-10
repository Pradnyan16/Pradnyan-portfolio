"use client";

import { motion } from "framer-motion";

const certItems = [
  {
    title: "Deep Learning",
    date: "Nov 2025",
    category: "Skillsoft Percipio",
  },
  {
    title: "IT Specialist – Databases",
    date: "Sep 2024",
    category: "Certiport",
  },
  {
    title: "IT Specialist – HTML, CSS & JS",
    date: "Jul 2024",
    category: "Certiport",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="w-full bg-[#000000] text-white py-24 border-b border-white/10">
      <div className="w-full flex flex-col xl:flex-row">
        <div className="w-full xl:w-1/3 px-6 md:px-12 xl:border-r border-white/10 pb-12 xl:pb-0 relative">
           <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            className="sticky top-32"
           >
             <h2 className="font-mono text-xs md:text-sm tracking-widest text-zinc-500 uppercase mb-8">
               05 // Certifications
             </h2>
             <p className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter uppercase leading-none break-words">
               Skill <br/> Badges
             </p>
           </motion.div>
        </div>

        <div className="w-full xl:w-2/3 flex flex-col border-t xl:border-t-0 border-white/10">
          {certItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col md:flex-row w-full border-b border-white/10 last:border-b-0 p-8 md:p-12 hover:bg-white/5 transition-colors group cursor-crosshair justify-between items-start md:items-center gap-6"
            >
              <div className="flex flex-col gap-3">
                <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 border border-white/10 px-2 py-1 w-fit group-hover:border-white/30 transition-colors">
                  {item.category}
                </span>
                <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-zinc-300 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
              </div>
              <div className="font-mono text-xs text-zinc-500 shrink-0">
                {item.date}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
