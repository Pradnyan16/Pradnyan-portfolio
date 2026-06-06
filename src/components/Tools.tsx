"use client";

import { motion } from "framer-motion";

const tools = [
  { name: "Python", icon: "python" },
  { name: "JavaScript", icon: "javascript" },
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextdotjs", color: "white" },
  { name: "HTML5", icon: "html5" },
  { name: "CSS3", icon: "css" },
  { name: "MySQL", icon: "mysql" },
  { name: "Figma", icon: "figma" },
  { name: "Canva", icon: "https://s2.googleusercontent.com/s2/favicons?domain=canva.com&sz=256", isUrl: true },
  { name: "OpenCV", icon: "opencv" },
  { name: "Scikit-Learn", icon: "scikitlearn" },
  { name: "Git", icon: "git" },
  { name: "GitHub", icon: "github", color: "white" }
];

export default function Tools() {
  return (
    <section id="tools" className="w-full bg-[#000000] text-white py-24 border-b border-white/10">
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
               06 // Stack
             </h2>
             <p className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter uppercase leading-none break-words">
               Tools & <br/> Platforms
             </p>
           </motion.div>
        </div>

        {/* Tools Grid */}
        <div className="w-full md:w-2/3 border-t md:border-t-0 border-white/10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 w-full h-full">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex flex-col items-center justify-center p-8 border-b border-r border-white/10 hover:bg-white/5 transition-colors group cursor-crosshair aspect-square"
              >
                <img 
                  src={tool.isUrl ? tool.icon : `https://cdn.simpleicons.org/${tool.icon}${tool.color ? `/${tool.color}` : ''}`} 
                  alt={tool.name} 
                  className="w-10 h-10 md:w-12 md:h-12 mb-6 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                />
                <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors text-center">
                  {tool.name}
                </span>
              </motion.div>
            ))}
            {/* Fill remaining cells if needed for strict grid alignment */}
            {Array.from({ length: (4 - (tools.length % 4)) % 4 }).map((_, i) => (
              <div key={`empty-${i}`} className="hidden lg:block border-b border-r border-white/10 aspect-square"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
