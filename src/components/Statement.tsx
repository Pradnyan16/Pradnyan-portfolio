"use client";

import { motion } from "framer-motion";

export default function Statement() {
  return (
    <section className="w-full bg-[#000000] text-white py-32 md:py-48 border-b border-white/10 flex items-center justify-center px-6 md:px-12 relative overflow-hidden">
      {/* Background Subtle Grid or Texture could go here */}
      
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-6xl mx-auto flex flex-col items-center text-center"
      >
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black uppercase tracking-tighter leading-[1.1] text-white mb-12">
          A COMPUTER TECHNOLOGY STUDENT DRIVEN BY AI, INNOVATION, AND CONTINUOUS GROWTH. I DESIGN AND BUILD DIGITAL SOLUTIONS THAT COMBINE TECHNOLOGY, CREATIVITY, AND REAL-WORLD IMPACT.
        </h2>
        
        {/* Signature */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="font-caveat text-4xl md:text-6xl text-white/80 transform -rotate-2"
          style={{ fontFamily: "var(--font-caveat)" }}
        >
          Pradnyan
        </motion.div>
      </motion.div>
    </section>
  );
}
