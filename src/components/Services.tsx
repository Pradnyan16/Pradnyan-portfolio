"use client";

import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Full-Stack Development",
    description: "Building responsive, robust web applications using HTML, CSS, JavaScript, and modern frameworks.",
  },
  {
    number: "02",
    title: "UI/UX Design",
    description: "Designing user-centric, beautiful interfaces with wireframing and prototyping using Figma and Canva.",
  },
  {
    number: "03",
    title: "AI & Machine Learning",
    description: "Developing intelligent models and computer vision applications using Python, Scikit-Learn, and OpenCV.",
  },
  {
    number: "04",
    title: "Data Analytics",
    description: "Analyzing datasets to discover insights, leveraging tools like MySQL and analytical modeling.",
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full bg-[#000000] text-white py-24 border-b border-white/10">
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
               02 // Services
             </h2>
             <p className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter uppercase leading-none break-words">
               My <br/> Expertise
             </p>
           </motion.div>
        </div>

        {/* Services Grid */}
        <div className="w-full xl:w-2/3 flex flex-col border-t xl:border-t-0 border-white/10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col md:flex-row w-full border-b border-white/10 last:border-b-0 p-8 md:p-12 hover:bg-white/5 transition-colors group cursor-crosshair"
            >
              <div className="font-mono text-xs text-zinc-500 w-16 shrink-0 mb-4 md:mb-0">
                [{service.number}]
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-4 text-zinc-300 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-zinc-400 font-mono leading-relaxed max-w-lg">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
