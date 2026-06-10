"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alex Rivera",
    role: "CEO at TechCorp",
    content: "Working with this developer was an absolute pleasure. The attention to detail and performance optimization is unmatched. Our conversion rates increased by 40% after the redesign.",
  },
  {
    name: "Sarah Chen",
    role: "Product Manager",
    content: "An incredible eye for design coupled with flawless execution. The project was delivered ahead of schedule and exceeded all our expectations.",
  },
  {
    name: "Michael Roberts",
    role: "Founder at StartupX",
    content: "If you want a premium, high-quality digital experience, look no further. The implementation of complex animations while maintaining accessibility is simply brilliant.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-24 md:py-32 bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black dark:text-white mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
            Don't just take my word for it. Here's what people I've worked with have to say.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/40 relative"
            >
              <Quote className="absolute top-8 right-8 h-8 w-8 text-zinc-800" />
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-8 relative z-10 text-lg">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-zinc-600 dark:text-zinc-400">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-black dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-zinc-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
