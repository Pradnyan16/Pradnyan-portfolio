"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

export default function Meeting() {
  return (
    <section id="meeting" className="w-full bg-transparent text-black dark:text-white py-24 border-b border-black/10 dark:border-white/10">
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
               07 // Contact
             </h2>
             <p className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter uppercase leading-none break-words">
               Let's <br/> Connect
             </p>
           </motion.div>
        </div>

        {/* Meeting Content */}
        <div className="w-full xl:w-2/3 flex flex-col border-t xl:border-t-0 border-black/10 dark:border-white/10 p-8 md:p-12">
           <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col max-w-3xl"
           >
             <div className="flex items-center gap-6 mb-12">
               <div className="p-4 border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 shrink-0">
                 <Calendar className="h-8 w-8 md:h-10 md:w-10 text-black dark:text-white" />
               </div>
               <h3 className="text-2xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-black dark:text-white">
                 Let's Connect
               </h3>
             </div>
             
             <p className="font-mono text-sm uppercase tracking-widest leading-relaxed text-zinc-500 mb-12">
               Open to internships, collaborations, and networking opportunities.
             </p>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-black/10 dark:border-white/10 mb-12">
               <div className="flex flex-col items-center justify-center p-8 border-b md:border-b-0 md:border-r border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-crosshair text-center">
                 <span className="text-xl md:text-2xl font-bold uppercase text-black dark:text-white mb-2">Response within 24h</span>
                 <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">Timeline</span>
               </div>
               <div className="flex flex-col items-center justify-center p-8 border-b md:border-b-0 md:border-r border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-crosshair text-center">
                 <span className="text-xl md:text-2xl font-bold uppercase text-black dark:text-white mb-2">Remote / Hybrid</span>
                 <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">Work Model</span>
               </div>
               <div className="flex flex-col items-center justify-center p-8 hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-crosshair text-center">
                 <span className="text-xl md:text-2xl font-bold uppercase text-black dark:text-white mb-2">Available for Internships</span>
                 <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">Status</span>
               </div>
             </div>

             <div className="flex flex-col sm:flex-row gap-4 w-full md:w-fit mt-4">
               <a 
                 href="https://wa.me/919403774838?text=Hello%20Pradnyan,%0A%0AI%20would%20like%20to%20book%20a%20meeting%20with%20you."
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex-1 flex items-center justify-center gap-4 bg-black dark:bg-white text-white dark:text-black hover:bg-zinc-300 transition-colors px-8 py-5 font-bold uppercase tracking-widest text-sm md:text-base group cursor-crosshair"
               >
                 <Calendar className="h-5 w-5 transition-transform shrink-0" />
                 Connect on WhatsApp
               </a>
               <a 
                 href="mailto:pradnyanw2@gmail.com?subject=Meeting%20Request"
                 className="flex-1 flex items-center justify-center gap-4 border border-black dark:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors px-8 py-5 text-black dark:text-white font-bold uppercase tracking-widest text-sm md:text-base group cursor-crosshair"
               >
                 <Calendar className="h-5 w-5 group-hover:text-black transition-colors shrink-0" />
                 Send an Email
               </a>
             </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
