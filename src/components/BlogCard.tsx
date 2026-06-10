"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, Tag } from 'lucide-react';
import type { PostMeta } from '@/lib/mdx';

interface BlogCardProps {
  slug: string;
  meta: PostMeta;
  index: number;
}

export default function BlogCard({ slug, meta, index }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <Link href={`/blog/${slug}`} className="block h-full">
        <div className="h-full border border-black/10 dark:border-white/10 bg-zinc-100 dark:bg-[#0a0a0a] hover:bg-[#111111] transition-colors p-6 flex flex-col justify-between overflow-hidden">
          
          <div className="mb-6">
            <div className="flex items-center gap-4 text-xs text-zinc-500 font-mono mb-4">
              <span className="flex items-center gap-1">
                <Calendar size={12} />
                {new Date(meta.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white mb-3 group-hover:text-zinc-300 transition-colors line-clamp-2">
              {meta.title}
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm line-clamp-3 leading-relaxed">
              {meta.excerpt}
            </p>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="flex flex-wrap gap-2">
              {meta.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="flex items-center gap-1 text-[10px] uppercase tracking-wider font-mono bg-black/5 dark:bg-white/5 px-2 py-1 text-zinc-600 dark:text-zinc-400">
                  <Tag size={10} />
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="w-8 h-8 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
              <ArrowUpRight size={16} />
            </div>
          </div>
          
        </div>
      </Link>
    </motion.div>
  );
}
