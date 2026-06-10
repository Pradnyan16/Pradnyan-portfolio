"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const feedbacks = [
  {
    name: "Aishwarya",
    role: "Software Engineer",
    quote: "Pradnyan's attention to detail and problem-solving skills are unmatched. He delivered the project perfectly on time.",
  },
  {
    name: "Tanay",
    role: "Data Analyst",
    quote: "His grasp on data structures and machine learning concepts helped us optimize our models significantly.",
  },
  {
    name: "Vipul",
    role: "Full-Stack Developer",
    quote: "Working with him was a breeze. He writes clean, maintainable code and always brings fresh ideas to the table.",
  },
  {
    name: "Ashutosh",
    role: "UI/UX Designer",
    quote: "He took my Figma designs and turned them into pixel-perfect, responsive websites. Highly recommended.",
  },
  {
    name: "Pratik",
    role: "Product Manager",
    quote: "A rare combination of technical brilliance and great communication. He always exceeds expectations.",
  },
  {
    name: "Swaroop",
    role: "Backend Engineer",
    quote: "His understanding of API design and database management made our integration seamless.",
  },
  {
    name: "Siddhant",
    role: "Frontend Developer",
    quote: "The brutalist aesthetic he built for our project was incredible. He knows exactly what looks good.",
  },
  {
    name: "Siddharth",
    role: "Systems Architect",
    quote: "He builds highly scalable and robust systems. His work ethic is inspiring.",
  },
  {
    name: "Punayam",
    role: "Tech Lead",
    quote: "One of the most dedicated developers I've worked with. He owns his tasks from start to finish.",
  }
];

export default function Feedback() {
  return (
    <section id="feedback" className="w-full bg-transparent text-black dark:text-white py-24 border-b border-black/10 dark:border-white/10">
      <div className="w-full flex flex-col xl:flex-row">
        {/* Section Header */}
        <div className="w-full xl:w-1/3 px-6 md:px-12 xl:border-r border-black/10 dark:border-white/10 pb-12 xl:pb-0 relative">
           <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            className="sticky top-32"
           >
             <h2 className="font-mono text-xs md:text-sm tracking-widest text-zinc-500 uppercase mb-8">
               08 // Feedback
             </h2>
             <p className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter uppercase leading-none break-words">
               What <br/> They Say
             </p>
           </motion.div>
        </div>

        {/* Feedback Grid */}
        <div className="w-full md:w-2/3 border-t md:border-t-0 border-black/10 dark:border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {feedbacks.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex flex-col p-8 border-b border-r border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-colors group cursor-crosshair"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 bg-zinc-900 border border-black/10 dark:border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-black transition-colors">
                      <span className="font-bold text-lg uppercase">{item.name[0]}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold uppercase text-xs md:text-sm text-zinc-200 group-hover:text-black dark:group-hover:text-white transition-colors">{item.name}</span>
                      <span className="font-mono text-[10px] uppercase text-zinc-500 tracking-widest">{item.role}</span>
                    </div>
                  </div>
                  <Quote className="h-4 w-4 text-zinc-600 opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-xs md:text-sm font-bold uppercase leading-relaxed text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-200 transition-colors">
                  &quot;{item.quote}&quot;
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
