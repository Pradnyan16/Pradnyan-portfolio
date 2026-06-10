"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Sign Language to Text",
    description: "Real-time gesture recognition system using OpenCV.",
    tags: ["Python", "OpenCV", "cvzone"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    title: "Customer Churn Prediction",
    description: "ML model to predict customer churn based on usage patterns.",
    tags: ["Python", "Scikit-Learn", "Data Analytics"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    title: "ERP Student Portal",
    description: "ERP-based student management portal for academic workflows.",
    tags: ["Full-Stack", "Web App", "UI/UX"],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    title: "McDonald's App Redesign",
    description: "Redesigned food-ordering app using Figma.",
    tags: ["Figma", "UI/UX", "Wireframing"],
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    title: "Zudio Clothing",
    description: "E-commerce interface and digital experience design for Zudio.",
    tags: ["E-Commerce", "UI/UX", "Web App"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full bg-[#000000] text-white py-24 border-b border-white/10">
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
               03 // Portfolio
             </h2>
             <p className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter uppercase leading-none break-words">
               Crafted <br/> Experiences
             </p>
           </motion.div>
        </div>

        {/* Projects List */}
        <div className="w-full xl:w-2/3 flex flex-col border-t xl:border-t-0 border-white/10">
          {projects.map((project, index) => (
            <Link key={project.title} href={project.link} className="block group">
              <motion.div
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col md:flex-row w-full border-b border-white/10 last:border-b-0 p-8 md:p-12 hover:bg-white/5 transition-colors cursor-crosshair items-start md:items-center relative overflow-hidden"
              >
                <div className="w-full md:w-1/2 flex flex-col gap-4 mb-6 md:mb-0 shrink-0 z-10">
                  <div className="flex gap-2 flex-wrap">
                     {project.tags.map(tag => (
                       <span key={tag} className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 border border-white/10 px-2 py-1 group-hover:border-white/30 transition-colors bg-black group-hover:bg-transparent">
                         {tag}
                       </span>
                     ))}
                  </div>
                  <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-zinc-300 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                <div className="w-full md:w-1/2 flex items-center md:pl-12 md:border-l border-white/10 z-10 justify-between">
                  <p className="text-zinc-400 font-mono text-sm leading-relaxed pr-8">
                    {project.description}
                  </p>
                  <ArrowUpRight className="h-6 w-6 text-zinc-600 group-hover:text-white transition-colors shrink-0" />
                </div>

                {/* Image Reveal removed per user request */}
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
