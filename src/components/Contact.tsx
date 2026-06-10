"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="w-full bg-transparent text-black dark:text-white pt-24 border-t border-black/10 dark:border-white/10">
      <div className="w-full flex flex-col xl:flex-row border-b border-black/10 dark:border-white/10">
        
        {/* Left side massive text */}
        <div className="w-full md:w-2/3 px-6 md:px-12 md:border-r border-black/10 dark:border-white/10 pb-12 md:pb-24">
           <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
           >
             <h2 className="text-5xl md:text-8xl lg:text-[10rem] font-black tracking-tighter uppercase leading-none mb-12 select-none">
               Let's <br/> Work <br/> Together
             </h2>
             
             <a 
              href="mailto:pradnyanw2@gmail.com" 
              className="inline-flex items-center gap-4 text-xl md:text-3xl font-bold uppercase tracking-tight text-black dark:text-white hover:text-zinc-400 transition-colors group break-all"
            >
              pradnyanw2@gmail.com
              <ArrowRight className="h-8 w-8 transition-transform group-hover:translate-x-4 shrink-0" />
            </a>
           </motion.div>
        </div>

        {/* Right side strict grid socials */}
        <div className="w-full xl:w-1/3 flex flex-col">
           <div className="flex-1 p-8 md:p-12 border-t md:border-t-0 border-b border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-colors flex flex-col justify-center cursor-crosshair group">
             <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-4 group-hover:text-zinc-400 transition-colors">Location</span>
             <div className="flex items-center gap-4">
               <MapPin className="w-6 h-6 text-zinc-600 dark:text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
               <span className="text-lg md:text-xl font-bold uppercase text-zinc-200 group-hover:text-black dark:group-hover:text-white transition-colors">Pune, Maharashtra</span>
             </div>
           </div>
           
           <div className="flex-1 p-8 md:p-12 border-b border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-colors flex flex-col justify-center cursor-crosshair group">
             <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-4 group-hover:text-zinc-400 transition-colors">Phone</span>
             <div className="flex items-center gap-4">
               <Phone className="w-6 h-6 text-zinc-600 dark:text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
               <span className="text-lg md:text-xl font-bold uppercase text-zinc-200 group-hover:text-black dark:group-hover:text-white transition-colors">+91 9403774838</span>
             </div>
           </div>
           
           <a href="https://linkedin.com/in/pradnyan-wadekar-717b05288" target="_blank" rel="noopener noreferrer" className="flex-1 p-8 md:p-12 border-b border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-colors flex flex-col justify-center group cursor-crosshair">
             <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-4 group-hover:text-zinc-300 transition-colors">Professional</span>
             <div className="flex items-center justify-between">
               <div className="flex items-center gap-4">
                  <svg className="w-6 h-6 text-zinc-600 dark:text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  <span className="text-lg md:text-xl font-bold uppercase text-zinc-200 group-hover:text-black dark:group-hover:text-white">LinkedIn</span>
                </div>
               <ArrowRight className="h-6 w-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-black dark:text-white" />
             </div>
           </a>

           <a href="https://www.instagram.com/prad.16nyan?igsh=cmZsZXVtdXkzYjFk" target="_blank" rel="noopener noreferrer" className="flex-1 p-8 md:p-12 border-b border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-colors flex flex-col justify-center group cursor-crosshair">
             <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-4 group-hover:text-zinc-300 transition-colors">Social</span>
             <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <svg className="w-6 h-6 text-zinc-600 dark:text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  <span className="text-lg md:text-xl font-bold uppercase text-zinc-200 group-hover:text-black dark:group-hover:text-white">Instagram</span>
                </div>
               <ArrowRight className="h-6 w-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-black dark:text-white" />
             </div>
           </a>

           <a href="https://x.com/pradnyan_w" target="_blank" rel="noopener noreferrer" className="flex-1 p-8 md:p-12 border-b md:border-b-0 border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-colors flex flex-col justify-center group cursor-crosshair">
             <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-4 group-hover:text-zinc-300 transition-colors">Updates</span>
             <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <svg className="w-6 h-6 text-zinc-600 dark:text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
                  <span className="text-lg md:text-xl font-bold uppercase text-zinc-200 group-hover:text-black dark:group-hover:text-white">X (Twitter)</span>
                </div>
               <ArrowRight className="h-6 w-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-black dark:text-white" />
             </div>
           </a>
        </div>
      </div>

      <div className="w-full flex flex-col xl:flex-row justify-between items-center p-6 md:px-12 text-[10px] md:text-xs font-mono uppercase tracking-widest text-zinc-500">
        <p>© {new Date().getFullYear()} Pradnyan Wadekar.</p>
        <div className="flex items-center gap-6 mt-4 md:mt-0">
          <Link href="#" className="hover:text-black dark:hover:text-white transition-colors">Privacy</Link>
          <Link href="#" className="hover:text-black dark:hover:text-white transition-colors">Terms</Link>
        </div>
      </div>
    </section>
  );
}
