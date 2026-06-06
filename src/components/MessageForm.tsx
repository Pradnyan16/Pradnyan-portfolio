"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function MessageForm() {
  return (
    <section id="message" className="w-full bg-[#000000] text-white py-24 border-t border-white/10">
      <div className="w-full flex flex-col xl:flex-row border-b border-white/10 pb-24">
        
        {/* Left Side Header */}
        <div className="w-full xl:w-1/3 px-6 md:px-12 xl:border-r border-white/10 pb-12 xl:pb-0 relative">
           <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            className="sticky top-32"
           >
             <h2 className="font-mono text-xs md:text-sm tracking-widest text-zinc-500 uppercase mb-8">
               08 // Get In Touch
             </h2>
             <p className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter uppercase leading-none break-words">
               Send A <br/> Message
             </p>
           </motion.div>
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-2/3 px-6 md:px-12 flex items-center justify-center">
          <motion.form 
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-8 w-full max-w-2xl"
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const name = formData.get('name');
              const email = formData.get('email');
              const subject = formData.get('subject');
              const message = formData.get('message');

              const text = `Hello Pradnyan,%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Subject:* ${subject}%0A%0A*Message:*%0A${message}`;
              window.open(`https://wa.me/919403774838?text=${text}`, '_blank');
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-3">
                <label className="font-mono text-xs text-zinc-400 uppercase tracking-widest">Name</label>
                <input name="name" type="text" placeholder="Your name" className="w-full bg-transparent border border-white/10 p-4 text-white placeholder:text-zinc-700 focus:outline-none focus:border-white/40 transition-colors cursor-crosshair font-mono text-sm" required />
              </div>
              <div className="flex flex-col gap-3">
                <label className="font-mono text-xs text-zinc-400 uppercase tracking-widest">Email</label>
                <input name="email" type="email" placeholder="your.email@example.com" className="w-full bg-transparent border border-white/10 p-4 text-white placeholder:text-zinc-700 focus:outline-none focus:border-white/40 transition-colors cursor-crosshair font-mono text-sm" required />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <label className="font-mono text-xs text-zinc-400 uppercase tracking-widest">Subject</label>
              <input name="subject" type="text" placeholder="What's this about?" className="w-full bg-transparent border border-white/10 p-4 text-white placeholder:text-zinc-700 focus:outline-none focus:border-white/40 transition-colors cursor-crosshair font-mono text-sm" required />
            </div>

            <div className="flex flex-col gap-3">
              <label className="font-mono text-xs text-zinc-400 uppercase tracking-widest">Message</label>
              <textarea name="message" placeholder="Your message..." rows={6} className="w-full bg-transparent border border-white/10 p-4 text-white placeholder:text-zinc-700 focus:outline-none focus:border-white/40 transition-colors cursor-crosshair font-mono text-sm resize-none" required></textarea>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full">
              <button 
                type="submit" 
                className="flex items-center justify-center gap-4 bg-white text-black py-5 px-8 font-bold uppercase tracking-widest hover:bg-zinc-300 transition-colors cursor-crosshair group flex-1"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform shrink-0" />
                Via WhatsApp
              </button>
              
              <button 
                type="button" 
                onClick={(e) => {
                  const form = e.currentTarget.closest('form');
                  if (!form) return;
                  if (!form.checkValidity()) {
                    form.reportValidity();
                    return;
                  }
                  const formData = new FormData(form);
                  const name = formData.get('name') || '';
                  const email = formData.get('email') || '';
                  const subject = formData.get('subject') || 'New Message from Portfolio';
                  const message = formData.get('message') || '';

                  const body = `Name: ${name}%0AEmail: ${email}%0A%0A${message}`;
                  window.open(`mailto:pradnyanw2@gmail.com?subject=${encodeURIComponent(subject as string)}&body=${body}`);
                }}
                className="flex items-center justify-center gap-4 bg-transparent border border-white text-white py-5 px-8 font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors cursor-crosshair group flex-1"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform shrink-0" />
                Via Email
              </button>
            </div>
          </motion.form>
        </div>

      </div>
    </section>
  );
}
